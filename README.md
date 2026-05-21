# Dia Mundial da Segurança do Doente 2026 - Landing Page

Este projeto é uma plataforma web desenvolvida em **React** (via Vite) para promover a campanha do Dia Mundial da Segurança do Doente 2026, com o tema focado na Segurança do Paciente em Situações de Conflito.

## 🛠️ Tecnologias Principais
- **React 19**
- **Vite** (Bundler / Servidor de Desenvolvimento)
- **CSS Vanilla** (Variáveis Globais e Design System Customizado)

## 📦 Dependências Externas (Requisitos)
Para além do React base, este projeto utiliza as seguintes bibliotecas:
1. `lucide-react`: Utilizada para toda a iconografia do site.
2. `react-simple-maps`: Utilizada para renderizar o Mapa Interativo de Conflitos (baseado em TopoJSON).
3. `prop-types`: Necessário para o correto funcionamento da biblioteca de mapas nas versões mais recentes do React.

---

## 🚀 Guia de Instalação e Execução

Siga os passos abaixo para instalar todas as dependências e correr o projeto no seu computador:

### Passo 1: Pré-requisitos
Certifique-se de que tem o **Node.js** instalado no seu computador. Pode descarregá-lo em [nodejs.org](https://nodejs.org/).

### Passo 2: Instalar as Dependências Base
Abra o terminal (Linha de Comandos ou PowerShell) na pasta principal do projeto (`c:\Website Gestão Cliníca`) e execute:
```bash
npm install
```

### Passo 3: Instalar as Bibliotecas Específicas
Para garantir que o mapa e os ícones funcionam perfeitamente sem problemas de compatibilidade com o React 19, instale as bibliotecas forçando a aceitação das dependências antigas (Legacy Peer Deps):
```bash
npm install lucide-react react-simple-maps prop-types --legacy-peer-deps
```

### Passo 4: Correr o Site
Após todas as instalações estarem concluídas, inicie o servidor de desenvolvimento local:
```bash
npm run dev
```

O terminal irá fornecer um endereço (normalmente `http://localhost:5173`). Pode clicar nele ou copiá-lo para o seu navegador para ver o site a funcionar!

---

## 🎨 Notas de Design
As cores principais da campanha podem ser editadas globalmente no ficheiro `src/index.css`.
- **Primária (Azul Marinho)**: `#173e6b`
- **Secundária (Vermelho Alerta)**: `#d33b3b`
