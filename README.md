# Cadastro de Fornecedores e Produtos

Este projeto é uma aplicação web front-end para o cadastro de fornecedores, desenvolvido como solução para um desafio técnico. A interface permite ao usuário registrar informações completas de um fornecedor, adicionar múltiplos produtos de forma dinâmica e anexar documentos relevantes.

O formulário foi construído com foco em modularidade, boas práticas de desenvolvimento e uma experiência de usuário interativa, utilizando tecnologias web padrão.

## ✨ Funcionalidades Principais

* **Formulário Modular:** A interface é dividida em componentes (Dados do Fornecedor, Produtos, Anexos) que são carregados dinamicamente com JavaScript, mantendo o código principal limpo e organizado.
* **Consulta de Endereço via API:** Ao digitar o CEP, o sistema busca automaticamente os dados de endereço (rua, bairro, cidade e estado) através da API pública [ViaCEP](https://viacep.com.br/), agilizando o preenchimento.
* **Gestão Dinâmica de Produtos:**
    * O usuário pode adicionar e remover múltiplos produtos ao cadastro.
    * O campo "Valor Total" de cada produto é calculado em tempo real, multiplicando a quantidade pelo valor unitário.
* **Gerenciamento de Anexos:**
    * Permite o upload de múltiplos arquivos.
    * Os documentos são armazenados temporariamente na memória do navegador (`sessionStorage`) como strings Base64.
    * Funcionalidades para visualizar (fazer download) e excluir os anexos da lista e da memória.
* **Validação e Geração de JSON:**
    * O formulário valida campos obrigatórios, incluindo a exigência de ao menos um produto e um anexo.
    * Ao clicar em "Salvar", os dados de todo o formulário são coletados e estruturados em um objeto JSON, que é exibido no console do navegador para fins de depuração e visualização.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização personalizada e layout.
* **Bootstrap 3.3.7:** Framework CSS para a criação de um layout responsivo e componentes de interface.
* **JavaScript (ECMAScript 6):** Lógica de negócio, manipulação do DOM e interatividade.
* **jQuery 3.5.1:** Simplificação da manipulação de eventos, animações e requisições AJAX.

## ⚙️ Como Rodar Localmente

Para executar este projeto em sua máquina, você precisará de um editor de código (como o VS Code) e de um servidor web local para carregar os componentes HTML corretamente. A forma mais simples é usando a extensão **Live Server** no VS Code.

1.  **Clone ou baixe o repositório:**
    ```bash
    git clone https://[URL-DO-REPOSITORIO]
    ```
2.  **Abra a pasta do projeto** no Visual Studio Code.
3.  Se ainda não tiver, instale a extensão **"Live Server"** pela aba de extensões do VS Code.
4.  **Inicie o servidor:** Clique com o botão direito no arquivo `index.html` e selecione a opção **"Open with Live Server"**.
5.  O projeto será aberto automaticamente no seu navegador padrão.

## 📄 Referência do Desafio

Este projeto foi desenvolvido como uma solução para o desafio técnico proposto pela VFLOWS. Mais detalhes sobre os requisitos originais podem ser encontrados no repositório oficial do desafio:
* [**VFLOWS/Teste-Estagio**](https://github.com/VFLOWS/Teste-Estagio)

## 🏆 Créditos

**Max Barros**  
[LinkedIn](https://www.linkedin.com/in/max-barros/)  
Email: rmaxbarros@gmail.com  
