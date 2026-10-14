# Manual do Corretor

Área de membros para corretores de imóveis: módulos com aulas em vídeo, bônus, dica do dia, checklist de primeiros passos e calculadoras (comissão, financiamento SAC/Price e custos de compra).

## Como ver

Abra o `index.html` no navegador, ou publique a pasta em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel).

## Como inserir conteúdo

Edite só o arquivo `assets/js/data.js`:

- **SITE**: nome, edição, slogan, WhatsApp do suporte e link da comunidade.
- **MODULOS**: cada aula tem `titulo`, `duracao`, `video` (link do YouTube, Vimeo ou embed do Panda), `descricao` e `materiais` (`[{ titulo, link }]`).
- **BONUS**: título, descrição, ícone, link do arquivo e etiqueta.
- **DICAS**: categoria e texto.
- **CHECKLIST**: tarefas da primeira semana.

O progresso do aluno (aulas concluídas e checklist) fica salvo no navegador dele.
