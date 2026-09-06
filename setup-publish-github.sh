#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$SCRIPT_DIR"
cd "$PROJECT_DIR"

echo "========================================================================"
echo "   DRIVA Investor Pitch — Publicar no GitHub + GitHub Pages"
echo "   Repositório com commit inicial já existente na branch main."
echo "========================================================================"
echo ""

# Verifica autenticação
check_gh() {
  if command -v gh >/dev/null 2>&1; then
    gh auth status 2>&1 | head -2 || true
    return 0
  fi
  return 1
}

check_ssh() {
  if [ -f "$HOME/.ssh/id_ed25519" ] || [ -f "$HOME/.ssh/id_rsa" ]; then
    echo "✅ Chave SSH encontrada."
    return 0
  fi
  return 1
}

echo "--- Passo 1: Informações do commit atual ---"
echo "   HEAD: $(git log --oneline -n 1)"
echo "   Branch: $(git branch --show-current)"
echo ""

# Detecta nome de usuário GitHub padrão
DEFAULT_USER=""
if command -v gh >/dev/null 2>&1 && gh auth status 2>/dev/null; then
  DEFAULT_USER=$(gh api user -q .login 2>/dev/null || echo "")
fi

read -rp "Seu username no GitHub [$DEFAULT_USER]: " GH_USER
GH_USER="${GH_USER:-$DEFAULT_USER}"
if [ -z "$GH_USER" ]; then
  echo "❌ Username obrigatório."
  exit 1
fi

DEFAULT_REPO="pitch_driva"
read -rp "Nome do repositório a criar no GitHub [$DEFAULT_REPO]: " GH_REPO
GH_REPO="${GH_REPO:-$DEFAULT_REPO}"

echo ""
echo "--- Escolha de visibilidade ---"
echo "   1) Público  (Recomendado para investors — GitHub Pages funciona free para repo público)"
echo "   2) Privado  (GitHub Pages em repo privado requer Plano Pro da conta p/ Pages gratuitos)"
echo ""
read -rp "Escolha [1/2] (padrão 1 público): " VIS_OPT
case "$VIS_OPT" in
  2) VISIBILITY="--private" ; VIS_NAME="Privado" ;;
  *) VISIBILITY="--public"  ; VIS_NAME="Público" ;;
esac

echo ""
echo "--- Resumo ---"
echo "   Usuário GitHub : $GH_USER"
echo "   Repositório    : $GH_REPO ($VIS_NAME)"
echo "   URL final Pages: https://$GH_USER.github.io/$GH_REPO/"
echo "   Repositório GH : https://github.com/$GH_USER/$GH_REPO"
echo ""
read -rp "Prosseguir? [s/N]: " confirm
case "$confirm" in
  s|S|y|Y) ;;
  *) echo "❌ Cancelado."; exit 0 ;;
esac

# Passo 2: Cria o repositório
if command -v gh >/dev/null 2>&1 && gh auth status 2>/dev/null; then
  echo ""
  echo "--- Passo 2: Criando repositório via GitHub CLI ---"
  REMOTE_URL="https://github.com/$GH_USER/$GH_REPO.git"
  # Ignora erro se já existir
  gh repo create "$GH_USER/$GH_REPO" $VISIBILITY --description "DRIVA Investor Pitch Deck (2026–2028) • 14 slides • English • Platform Revolution intro" -y 2>&1 | tail -5 || true
else
  echo ""
  echo "--- ⚠️  GitHub CLI (gh) não autenticado ---"
  echo "   Se o GitHub CLI estiver instalado, rode:  gh auth login"
  echo "   Caso contrário, crie o repositório manualmente no navegador:"
  echo "   → https://github.com/new?repo_name=$GH_REPO&visibility=$( [ "$VIS_NAME" = "Público" ] && echo public || echo private )"
  echo ""
  REMOTE_URL="git@github.com:$GH_USER/$GH_REPO.git"
  read -rp "Pressione ENTER para continuar (se criou o repo no navegador)..."
fi

# Passo 3: Add remote e push
echo ""
echo "--- Passo 3: Adicionando remote e push main ---"
git remote remove origin 2>/dev/null || true
git remote add origin "git@github.com:$GH_USER/$GH_REPO.git"
git remote -v

echo ""
echo "--- Passo 4: Primeiro push para origin/main ---"
git push -u origin main
echo ""
echo "✅ Push concluído."

# Passo 5: Habilita Pages via API (se gh CLI autenticado)
if command -v gh >/dev/null 2>&1 && gh auth status 2>/dev/null; then
  echo ""
  echo "--- Passo 5: Habilitando GitHub Pages via API (source: GitHub Actions) ---"
  # A partir de 2023 Pages pode usar Actions como source (configuramos o workflow)
  gh api repos/$GH_USER/$GH_REPO/pages -X PUT \
    -H "Accept: application/vnd.github+json" \
    -f build_type=workflow \
    -f source[branch]=main 2>&1 | head -30 || true
  echo ""
  echo "✅ Pages habilitado via GitHub Actions workflow."
fi

echo ""
echo "========================================================================"
echo "  🎉 Tudo pronto! Aguarde 1–2 minutos pelo build do Actions e acesse:"
echo ""
echo "  🔗 Pitch ao vivo:   https://$GH_USER.github.io/$GH_REPO/"
echo "  📁 Repositório:     https://github.com/$GH_USER/$GH_REPO"
echo "  🔨 Build Status:    https://github.com/$GH_USER/$GH_REPO/actions"
echo ""
echo "  📝 Dica: O workflow .github/workflows/pages.yml roda automaticamente"
echo "           a cada push na branch main — sem precisar de comandos extras."
echo "========================================================================"
