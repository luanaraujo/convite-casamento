# Convite de Casamento — Ana Carolina & Luan

Site de convite de casamento em página única (HTML/CSS/JS puro, sem build).

A experiência simula receber um convite físico dentro de um envelope: a página abre
numa "capa" com um selo de cera dourado — ao clicar (em qualquer ponto da capa), o
envelope se abre em portas duplas revelando o convite.

O visual das duas telas (capa e convite) usa **diretamente as artes exportadas do
Canva** (`assets/capa.svg` e `assets/convite.svg`), garantindo fidelidade total ao
modelo original — nenhum texto/fonte/ornamento é recriado em CSS, é a imagem vetorial
mesma. A interatividade (abrir o envelope, confirmar presença, adicionar ao
calendário) é feita com áreas clicáveis transparentes posicionadas por cima da
imagem do convite.

## Como rodar localmente

Não há dependências nem processo de build. Basta servir os arquivos estáticos, por
exemplo:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Estrutura

```
index.html              # markup da capa e do convite (usa as imagens de assets/)
assets/capa.svg          # arte da capa/selo, exportada do Canva
assets/convite.svg       # arte do convite completo, exportada do Canva
css/style.css            # container, animação de abertura e posicionamento das áreas clicáveis
js/script.js             # interação de abrir o envelope + geração do arquivo .ics
```

## Se o design mudar no Canva

Basta re-exportar as duas páginas como SVG do Canva e substituir os arquivos
`assets/capa.svg` e `assets/convite.svg` (mantendo os mesmos nomes). Se as posições
dos dois botões ("Confirmar presença..." e "Adicionar ao calendário") mudarem no
novo design, ajuste as coordenadas em `css/style.css` (classes `.hotspot-rsvp` e
`.hotspot-calendar`, em porcentagem da imagem).

## Antes de publicar

- **Link de confirmação de presença / lista de presentes**: já aponta para
  `https://biolink.website/anaeluan` (no `index.html`, classe `hotspot-rsvp`). Se o
  link mudar, procure por `biolink.website/anaeluan` no arquivo.
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
