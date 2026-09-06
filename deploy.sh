#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$SCRIPT_DIR"
PUBLIC_DIR="$PROJECT_DIR/public"

echo "================================================================"
echo "   DRIVA Investor Pitch — Publicar para Visualização Externa"
echo "   14 slides • English • v2.0.0"
echo "================================================================"
echo ""

# Garante servidor local rodando na 3456 (para tunnels)
ensure_local_server() {
  if ! command -v python3 >/dev/null 2>&1; then
    echo "❌ python3 não encontrado. Instale antes."
    exit 1
  fi
  # Verifica se já tem algo na 3456
  if lsof -nP -iTCP:3456 -sTCP:LISTEN >/dev/null 2>&1; then
    echo "✅ Servidor já rodando na porta 3456."
  else
    echo "🚀 Iniciando servidor Python local na porta 3456..."
    cd "$PUBLIC_DIR"
    nohup python3 -m http.server 3456 >/tmp/driva_server.log 2>&1 &
    SERVER_PID=$!
    export DRIVA_SERVER_PID=$SERVER_PID
    sleep 2
    if ps -p $SERVER_PID >/dev/null 2>&1; then
      echo "✅ Servidor Python rodando (PID $SERVER_PID)."
      # Deixa o script parar o servidor no final
      trap 'echo ""; echo "🛑 Parando servidor local..."; kill $SERVER_PID 2>/dev/null; wait $SERVER_PID 2>/dev/null; echo "✅ Servidor parado."' EXIT
    else
      echo "❌ Falha ao iniciar servidor local."
      exit 1
    fi
  fi
}

show_menu() {
  echo ""
  echo "Qual publicação deseja fazer?"
  echo ""
  echo "   🅰️   Deploy Permanente → VERCEL (estático, gratuito, URL fixa)"
  echo "   🅱️   Túnel Imediato    → localhost.run (sem signup, URL aleatória HTTPS, dura até fechar terminal)"
  echo "   🅲   Túnel Imediato    → serveo.net (subdomínio personalizado, sem signup)"
  echo "   🆀   Sair"
  echo ""
  read -rp "Escolha uma opção [A/B/C/Q]: " opt
  case "$(echo "$opt" | tr '[:upper:]' '[:lower:]')" in
    a) deploy_vercel ;;
    b) deploy_localhost_run ;;
    c) deploy_serveo ;;
    q|*) echo "👋 Saindo." ;;
  esac
}

deploy_vercel() {
  echo ""
  echo "--- Opção A: Deploy Vercel (Permanente) ---"
  if ! command -v vercel >/dev/null 2>&1; then
    echo "Vercel CLI não encontrado. Instalando globalmente via npm..."
    if ! command -v npm >/dev/null 2>&1; then
      echo "❌ npm não encontrado. Instale o Node.js (https://nodejs.org) primeiro."
      exit 1
    fi
    npm install -g vercel
  fi

  echo ""
  echo "Login na Vercel:"
  vercel login
  echo ""
  echo "Fazendo deploy de PRODUÇÃO..."
  echo "   Diretório de saída: public/"
  cd "$PROJECT_DIR"
  vercel --prod --yes
  echo ""
  echo "✅ Deploy concluído. Copie a URL acima e compartilhe com investidores."
}

deploy_localhost_run() {
  ensure_local_server
  echo ""
  echo "--- Opção B: Túnel localhost.run (30s, sem signup) ---"
  echo "   Gere sua chave SSH (se não tiver, é gerada agora)."
  KEY="$HOME/.ssh/id_ed25519"
  if [ ! -f "$KEY" ]; then
    echo "🔐 Gerando chave SSH padrão..."
    ssh-keygen -t ed25519 -N "" -f "$KEY" -C "driva-tunnel" -q
    echo "✅ Chave criada em $KEY."
  fi
  echo ""
  echo "🌐 Abrindo túnel HTTPS público (CTRL+C para parar)."
  echo "   Copie a URL https://....lhr.life que aparecer abaixo:"
  echo ""
  sleep 1
  ssh \
    -i "$KEY" \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -o ServerAliveInterval=30 \
    -o ExitOnForwardFailure=yes \
    -N -T \
    -R 80:localhost:3456 nokey@localhost.run
}

deploy_serveo() {
  ensure_local_server
  echo ""
  echo "--- Opção C: Túnel serveo.net (subdomínio personalizado) ---"
  KEY="$HOME/.ssh/id_ed25519"
  if [ ! -f "$KEY" ]; then
    echo "🔐 Gerando chave SSH padrão..."
    ssh-keygen -t ed25519 -N "" -f "$KEY" -C "driva-tunnel" -q
    echo "✅ Chave criada em $KEY."
  fi
  echo ""
  read -rp "Subdomínio desejado (padrão: drivapitch): " SUBDOM
  SUBDOM="${SUBDOM:-drivapitch}"
  echo ""
  echo "🌐 Abrindo túnel em: https://$SUBDOM.serveo.net (CTRL+C para parar)."
  echo ""
  sleep 1
  ssh \
    -i "$KEY" \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -o ServerAliveInterval=30 \
    -o ExitOnForwardFailure=yes \
    -N -T \
    -R "$SUBDOM":80:localhost:3456 serveo.net
}

show_menu
