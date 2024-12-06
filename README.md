# Site Filmes consumindo API

Este documento descreve o código-fonte do projeto MarllonFlix, uma aplicação web simples para buscar informações sobre filmes usando a API OMDb.

### Tecnologias utilizadas

* **Frontend:** HTML, CSS, JavaScript
* **Framework:** Express.js (Node.js)
* **API externa:** OMDb API ([https://www.omdbapi.com/](https://www.omdbapi.com/))

### Estrutura do projeto

O projeto consiste em três arquivos principais:

* `server.js`: Arquivo principal do servidor Node.js que configura o Express e define as rotas da aplicação.
* `style.css`: Arquivo de estilos CSS que define a aparência da aplicação.
* `index.html`: Arquivo principal HTML que define a estrutura da página e inclui os estilos e scripts.
* `script.js`: Arquivo JavaScript que implementa a lógica de busca de filmes e exibição dos resultados.

### server.js

Este arquivo configura o servidor Express e define as rotas da aplicação:

* **`app.use(express.static('public'))`**: Esta linha permite que o servidor sirva arquivos estáticos (como CSS e imagens) da pasta `public`.
* **`app.get('/', (req, res) => {...})`**: Esta rota lida com a requisição GET para a raiz (`/`) e serve o arquivo `index.html` da pasta `public`.
* **`app.listen(port, () => {...})`**: Esta linha inicia o servidor na porta especificada (`port`) e imprime uma mensagem de confirmação no console.

### style.css

Este arquivo define os estilos CSS da aplicação, incluindo:

* Estilos gerais para o corpo da página (fonte, cores, alinhamento).
* Estilos para elementos de formulário (input, button, select).
* Estilos para o botão de busca.
* Estilos para o container que exibe os resultados.

### index.html

Este arquivo define a estrutura da página HTML:

* Define o título da página (`MarllonFlix`).
* Inclui o arquivo `style.css` para aplicar os estilos.
* Define o formulário de busca com:
    * Um campo de texto para entrada do título/ID do filme.
    * Um campo de seleção para filtrar por ano (implementado em JavaScript).
    * Um botão para enviar a busca.
* Define uma div (`resposte`) para exibir os resultados da busca.
* Inclui o arquivo `script.js` para executar a lógica da aplicação.

### script.js

Este arquivo implementa a lógica de busca de filmes:

* **`createYearOptions(StartYear, endYear)`**: Esta função cria opções para o campo de seleção de ano, iterando entre os anos especificados como parâmetros.
* **`buscarFilme()`**: Esta função é responsável por buscar informações sobre o filme:
    * Obtém o valor do campo de texto (`input`).
    * Obtém a referência para a div de resultados (`resposteDiv`).
    * Realiza uma requisição assíncrona (`fetch`) para a API OMDb usando o título/ID do filme e a chave da API (substitua "b9a8ca09" pela sua própria chave).
    * Trata a resposta da API:
        * Em caso de sucesso (`response.ok`) converte a resposta para JSON (`json`).
        * Cria um card HTML com a imagem, título e ano do filme utilizando a resposta da API.
        * Exibe o card na div de resultados.
    * Em caso de erro, exibe uma mensagem na div de resultados.
* **Evento click no botão de busca**: Adiciona um evento de clique ao botão de busca (`searchButton`) que chama a função `buscarFilme()`.
* **Chamada inicial para criar opções de ano**: Chama a função `createYearOptions` para preencher o campo de seleção de ano com opções entre 1900 e 2024 (ajuste esses valores se desejar).

### Considerações

* Este código é um exemplo básico e pode ser expandido para incluir funcionalidades adicionais, como paginação de resultados, validação de entrada do usuário e tratamento de erros mais abrangente.
* Substitua a chave da API OMDb ("b9a8ca09") por uma chave válida obtida no site da API.

Este documento fornece uma visão geral da estrutura e funcionalidade do código MarllonFlix. Se você tiver alguma dúvida específica sobre o código, sinta-se à vontade para perguntar.
