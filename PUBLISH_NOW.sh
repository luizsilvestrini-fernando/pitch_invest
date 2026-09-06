#!/bin/bash
set -euo pipefail

# ============================================================
#  PUBLISH NOW — DRIVA Investor Pitch
#  One-click publish to GitHub + GitHub Pages (sem perguntas)
#  Author:  luizsilvestrini-fernando
#  Repo:    pitch_driva
#  Visibility: PUBLIC (GitHub Pages free)
# ============================================================

GH_USER="luizsilvestrini-fernando"
GH_REPO="pitch_driva"
VISIBILITY="--public"   # altere para --private se sua conta for Pro
BRANCH="main"

URL_PAGES="https://$GH_USER.github.io/$GH_REPO/"
URL_REPO="https://github.com/$GH_USER/$GH_REPO"
URL_ACTIONS="https://github.com/$GH_USER/$GH_REPO/actions"

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

echo "========================================================================"
echo "   🚀 DRIVA Investor Pitch — Publicação Direta (sem perguntas)"
echo "========================================================================"
echo ""
echo "   👤 Usuário GitHub : $GH_USER"
echo "   📁 Repositório    : $GH_REPO (Público)"
echo "   🌐 Pitch ao vivo  : $URL_PAGES"
echo "   🧾 Repositório    : $URL_REPO"
echo ""
echo "   Pressione Ctrl+C em qualquer momento para cancelar."
echo ""
sleep 1

# --- 1) Verifica se existem mudanças a commitar ---------------------------
if [ -n "$(git status --porcelain)" ]; then
  echo "🟡 (1/5) Alterações locais pendentes — adicionando + commitando..."
  git add -A
  git commit -m "chore: atualizações antes do publish" 2>&1 | tail -3
else
  echo "🟢 (1/5) Working tree limpo — nada para commitar localmente."
fi

# --- 2) Garante branch correta --------------------------------------------
echo ""
echo "🔀 (2/5) Branch: $BRANCH"
git branch -M "$BRANCH"

# --- 3) Cria o repositório no GitHub se não existir ----------------------
echo ""
echo "📦 (3/5) Criando repositório no GitHub (se não existir)..."
if command -v gh >/dev/null 2>&1 && gh auth status 2>/dev/null; then
  echo "   → GitHub CLI autenticado — usando 'gh repo create'..."
  gh repo create "$GH_USER/$GH_REPO" $VISIBILITY \
    --description "DRIVA Investor Pitch Deck (2026–2028) • 14 slides • English • Platform Revolution intro" \
    -y 2>&1 | tail -5 || true
else
  echo "   ⚠️  GitHub CLI (gh) não autenticado."
  echo "   Abra essa URL e CRIE o repositório MANUALMENTE se ainda não existir:"
  echo "   → https://github.com/new?name=$GH_REPO&visibility=public&description=DRIVA+Investor+Pitch+Deck"
  echo ""
  read -rp "   Assim que criar/confirmar que ele existe, pressione ENTER para continuar..."
fi

# --- 4) Garante remote origin --------------------------------------------
echo ""
echo "🔗 (4/5) Remote origin -> git@github.com:$GH_USER/$GH_REPO.git"
git remote remove origin 2>/dev/null || true
git remote add origin "git@github.com:$GH_USER/$GH_REPO.git"
git remote -v

# --- 5) Push --------------------------------------------------------------
echo ""
echo "☁️  (5/5) Fazendo push para origin/$BRANCH ..."
git push -u origin "$BRANCH"
echo "✅ Push concluído."

# --- 6) Habilita GitHub Pages via Actions (se gh estiver logado) ---------
echo ""
echo "🛠️  (Extra) Configurando GitHub Pages (source = GitHub Actions)..."
if command -v gh >/dev/null 2>&1 && gh auth status 2>/dev/null; then
  gh api "repos/$GH_USER/$GH_REPO/pages" -X PUT \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -f build_type=workflow \
    -f source[branch]=$BRANCH 2>&1 | head -20 || true
  echo ""
  echo "✅ Pages habilitado via GitHub Actions."
else
  echo "ℹ️  Para habilitar Pages manualmente (uma vez só):"
  echo "   Abra → $URL_REPO/settings/pages"
  echo "   Em 'Build and deployment' selecione:"
  echo "   • Source: 『GitHub Actions』"
  echo "   (a partir daí o workflow já configurado faz o resto sozinho)"
fi

echo ""
echo "========================================================================"
echo "   🎉 Publicação submetida com sucesso!"
echo ""
echo "   🔗 URL PITCH (ao vivo em 1-2 min após build): $URL_PAGES"
echo "   📁 Repositório:                             $URL_REPO"
echo "   🔨 Acompanhe o build no Actions:             $URL_ACTIONS"
echo ""
echo "   💡 Dica: A cada vez que editar e commitar, basta:"
echo "      git add -A && git commit -m \"mensagem\" && git push"
echo "      e o Actions já faz o deploy automático."
echo "========================================================================"
