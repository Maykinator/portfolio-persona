# 🎭 Persona 3 Reload - Interactive Portfolio & Socials Menu

Um menu interativo de portfólio e redes sociais totalmente inspirado na interface de usuário (UI/UX) do jogo **Persona 3 Reload**. O projeto traz uma experiência imersiva com animações fluidas, respostas sonoras, suporte completo a atalhos de teclado e layout responsivo para dispositivos móveis.

## ✨ Funcionalidades

* **🎮 Estética Persona 3 Reload:**

  * Geometria inclinada (*skew/polygon clip-paths*).

  * Tipografia marcante e estilizada (fontes *Bebas Neue*, *Barlow Condensed* e *Anton*).

  * Animações fluidas em CSS (*keyframes* para entrada, pulsação e hover).

* **🎵 Design de Som Imersivo:**

  * Efeitos sonoros para troca de foco, navegação por itens, confirmação e retorno acionados via `soundManager`.

* **⌨️ Navegação Completa por Teclado:**

  * **Seta para Cima / Baixo (↑ / ↓):** Navegar pelos itens da lista.

  * **Seta para Direita / Esquerda (→ / ←):** Alternar entre o menu principal e a lista de sub-projetos.

  * **Enter (↵):** Abrir link do projeto ou categoria.

  * **ESC / Backspace / Seta Esquerda (no menu principal):** Voltar para a tela anterior.

* **📱 Responsividade & Touch:**

  * Comportamento inteligente no celular com sistema de sanfona (toque 1: expande a descrição; toque 2: abre o link).

  * Painel de controle dedicado para telas menores.

* **🔥 Efeitos Visuais Exclusivos:**

  * Ícone de notificação **NEW** animado com efeito de pulsação suave (*breathing effect*).

  * Fundo com vídeo em loop contínuo e cartões de personagens com recortes em polígono.

## 🛠️ Tecnologias Utilizadas

* [**React**](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces.

* [**React Router DOM**](https://reactrouter.com/) - Gerenciamento de rotas e navegação.

* [**Vite**](https://vitejs.dev/) - Build tool e ambiente de desenvolvimento ultra-rápido.

* **CSS3 Customizado** - Manipulação de `clip-path`, animações `@keyframes` e mídia queries responsivas.

## 📂 Estrutura do Projeto

```
src/
├── assets/             # Vídeos de fundo, imagens de personagens e ícones
│   ├── char1.png
│   ├── newsign.png
│   ├── main3.mp4
│   └── ...
├── soundManager.js     # Gerenciador de efeitos sonoros (Move, Confirm, Enter, etc)
├── Socials.jsx         # Componente principal do Menu estilo Persona
└── App.jsx             # Roteamento e estrutura base

```

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão 16 ou superior)

* **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório:**

   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   
   ```

2. **Acesse o diretório do projeto:**

   ```
   cd seu-repositorio
   
   ```

3. **Instale as dependências:**

   ```
   npm install
   
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```
   npm run dev
   
   ```

5. **Acesse no navegador:**
   Abra `http://localhost:5173` para visualizar a aplicação em execução.

## 🎮 Controles de Navegação

| Ação | Teclado (Desktop) | Mouse / Touch (Mobile) | 
 | ----- | ----- | ----- | 
| **Navegar na Lista** | `Setas Cima / Baixo` | Hover / Clique | 
| **Trocar para Sub-Lista** | `Seta Direita` | Hover / Clique no item lateral | 
| **Abrir Link / Expandir** | `Enter` | Clique/Toque (1º toque expande, 2º abre) | 
| **Voltar** | `ESC` ou `Backspace` | Botão **BACK** na tela | 

## 📄 Licença

Este projeto é de uso pessoal e para fins de portfólio. As artes e conceito estético de UI são inspirados no jogo **Persona 3**, de propriedade da **ATLUS / SEGA**.