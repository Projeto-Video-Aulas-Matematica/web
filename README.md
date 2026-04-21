# Curso de Matemática Unioeste - React

Projeto React montado com Vite, baseado no protótipo do Figma enviado.

## O que já tem

- Home
- Página do curso
- Página de módulo
- Página de aula
- Página sobre o projeto
- Estrutura modular com componentes reutilizáveis
- Base pronta para integrar com backend Java Spring depois

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal.

## Como gerar build

```bash
npm run build
npm run preview
```

## Estrutura

```bash
src/
  components/
  data/
  pages/
  services/
  styles/
```

## Onde alterar cada coisa

### Textos e dados fake

Arquivo:

```bash
src/data/courseData.js
```

### Rotas e páginas

Arquivo:

```bash
src/App.jsx
```

### Estilo global

Arquivo:

```bash
src/styles/global.css
```

### Integração futura com Spring

Arquivo:

```bash
src/services/api.js
```

Nesse arquivo já deixei exemplos de funções para consumir endpoints.
Você pode usar `VITE_API_URL` em um arquivo `.env` depois.

Exemplo:

```env
VITE_API_URL=http://localhost:8080
```

## Observação

Os vídeos estão com link placeholder e os dados ainda são locais para ficar fácil de apresentar e alterar.
