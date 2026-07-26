# Convite de Casamento — Ana Carolina & Luan

Site de convite de casamento em página única (HTML/CSS/JS puro, sem build).

A experiência simula receber um convite físico dentro de um envelope: a página abre
numa "capa" com um selo de cera dourado — ao clicar, o envelope se abre em portas
duplas revelando o convite.

## Como rodar localmente

Não há dependências nem processo de build. Basta servir os arquivos estáticos, por
exemplo:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Estrutura

```
index.html       # markup da capa (selo) e do convite
css/style.css    # estilos, cores, tipografia e animação de abertura
js/script.js     # interação de abrir o envelope + geração do texto curvo + arquivo .ics
```

## Antes de publicar

- **Link de confirmação de presença / lista de presentes**: o botão está apontando
  para `https://www.anaeluan.com.br` como placeholder. Troque pela URL real no
  `index.html` (procure o comentário `<!-- TODO -->` perto do botão
  "Confirmar presença & lista de presentes").
- **Data/local do evento**: já preenchidos em `js/script.js` (função `buildICS`),
  usados no botão "Adicionar ao calendário" (gera um arquivo `.ics` com os dados do
  casamento, compatível com Google Calendar, Apple Calendar e Outlook).

## Deploy

Como é um site 100% estático, pode ser publicado em qualquer serviço de hospedagem
estática, por exemplo:

- **GitHub Pages**: habilite em Settings → Pages, apontando para a branch/pasta deste
  repositório.
- **Netlify / Vercel**: importe o repositório e publique sem nenhuma configuração de
  build (é um site estático puro).
