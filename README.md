# Convite de Casamento — Ana Carolina & Luan

Site de convite de casamento em página única (HTML/CSS/JS puro, sem build).

A experiência simula receber um convite físico dentro de um envelope: a página abre
numa "capa" com um selo de cera dourado — ao clicar (em qualquer ponto da capa), o
envelope se abre em portas duplas revelando o convite.

## Como rodar localmente

Não há dependências nem processo de build. Basta servir os arquivos estáticos, por
exemplo:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Estrutura

```
index.html                       # capa + convite (o texto do convite mora aqui)
css/style.css                    # layout, escala tipográfica e animação de abertura
js/script.js                     # abre o envelope e libera a rolagem
assets/capa.svg                  # arte da capa/selo, exportada do Canva
assets/convite.svg               # arte original do convite — REFERÊNCIA, não é exibida
assets/background.webp           # ilustração do pôr do sol (fundo da página)
assets/canto.webp                # ornamento de canto da moldura (usado 4x, espelhado)
assets/monograma.webp            # monograma AL
assets/nomes.svg                 # "Ana Carolina e Luan" em script (vetor)
assets/divisor-{1,2,3}.svg       # ornamentos divisores (vetor)
assets/icone-{coracao,calendario}.svg   # ícones dos botões (usados como máscara CSS)
assets/fonts/montserrat-*.woff2  # fonte auto-hospedada
assets/casamento-ana-e-luan.ics  # evento para o botão de calendário
assets/preview.jpg               # imagem da prévia ao compartilhar o link
assets/favicon-*.png             # ícones do site
```

## Por que o texto do convite é HTML e não imagem

O convite era exibido como uma imagem única (`assets/convite.svg`) com o texto
embutido em contornos vetoriais. Como a imagem tem proporção fixa e no celular o
cartão já ocupa a largura toda, o texto ficava em torno de **7px** e não havia como
aumentar: as linhas longas (a maior tem 61 caracteres) só cabem naquele tamanho.

Agora o texto é HTML de verdade, então quebra em mais linhas e cresce. A escala é
definida em `css/style.css`:

```css
--fs: max(15px, 2.043cqw);
```

- **No desktop** o tamanho é proporcional à largura do cartão — `2.043cqw` é a
  proporção medida no convite original, então a versão desktop continua fiel ao
  layout do Canva (conferido: todos os blocos caem dentro de 0,4 de 930 unidades).
- **No celular** o piso de 15px assume, o texto cresce ~2x, o cartão fica mais alto
  que a tela e a página rola.

Os demais tamanhos são múltiplos de `--fs` com as proporções medidas no original.

Os ornamentos (moldura, monograma, nomes em script, divisores, ícones) foram
extraídos do próprio `assets/convite.svg`, que segue no repositório como referência.

## Fonte

O convite original usa **Gotham**, que é comercial e não pode ser distribuída aqui.
Em seu lugar vai **Montserrat**, a substituta livre mais próxima — escolhida
comparando o contorno de 43 letras do arquivo original contra 14 candidatas.

Se vocês tiverem licença web da Gotham, é só colocar o `.woff2` em `assets/fonts/` e
trocar o `@font-face` no topo do `css/style.css`.

## Como editar o texto do convite

Direto no `index.html`, dentro de `<article class="card">`. O CSS coloca tudo em
maiúsculas (`text-transform`), então escreva normalmente.

Se o design mudar no Canva, re-exporte as duas páginas em SVG e substitua
`assets/capa.svg` e `assets/convite.svg`; depois reveja se os ornamentos extraídos
(`nomes.svg`, `divisor-*.svg`, `canto.webp`, `monograma.webp`) precisam ser
regerados a partir do novo arquivo.

## Links e dados do evento

- **Confirmar presença / lista de presentes** → `https://biolink.website/anaeluan`
- **Texto "www.anaeluan.com.br"** → `https://www.anaeluan.com.br`
- **Adicionar ao calendário** → `assets/casamento-ana-e-luan.ics`
  (10/10/2026, 16h30 às 02h00, fuso `America/Sao_Paulo` declarado explicitamente
  para os apps não mostrarem um segundo horário em GMT). No Android o
  `js/script.js` não é usado para isso — o `.ics` serve todas as plataformas.

## Prévia ao compartilhar o link

As URLs de `og:image` no `index.html` são **absolutas** (os crawlers não resolvem
caminho relativo) e apontam para `convite-ana-e-luan.vercel.app`. Se o domínio
mudar, atualize as cinco URLs agrupadas sob o comentário no `<head>`.

O WhatsApp cacheia a prévia por link: para testar depois de um deploy, use um
sufixo diferente (ex: `?v=2`).

## Deploy

Site 100% estático — publica em qualquer hospedagem estática. Está na Vercel,
publicando automaticamente a cada merge na `main`.
