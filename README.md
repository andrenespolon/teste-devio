# Teste Devio

Simulando um *real time* (*polling*), para solucionar as dores de uma empresa de fast food.

### Arquitetura

A arquitetura, foi dividida e modulada com um client (browser) e um server (API). Com isso, é possível, posteriormente, ser extendida, como a conexão a um banco de dados, p. ex., ou outros serviços.

### Frontend

No frontend, foram utilizadas bibliotecas como [React](https://pt-br.reactjs.org/), [Redux](https://redux.js.org/), [Antd](https://ant.design/) e [Socketio](https://socket.io/docs/v4/server-api/) (para o lado do cliente). Com o intuito de acelerar o desenvolvimento, o boileplate utilizado foi o [Create React App](https://create-react-app.dev/).

Pouca estilização foi adicionada ao projeto porque o design já contempla boas soluções para sistemas web. Entretanto, é possível customizar os componentes alterandos as variáveis less, como cores, fontes, etc. (necessário addcionado o craco.js).

> O Antd, é uma biblioteca UI, desenvolvida para React, utilizando processador LESS.

Com o Socketio, nada impede de cliente e servidor estarem no mesmo domínio. Entretanto, segundo a [documentação](https://socket.io/docs/v4/#What-Socket-IO-is), é recomendado a divisão entre ambos, definindo claramente seus diferentes papéis.

### Back-end

O back-end foi desenvolvido em [Node.js](https://nodejs.org/en/), utilizando a bliblioteca [Socketio](https://socket.io/docs/v4/client-api/) (para o lado do servidor).

### Rodando

Para rodar o projeto, basta seguir 2 passos:

**1. Rodar o servidor**

Na pasta `./server`, rodar o servidor com o comando:

```shell
npm run server
```

**2. Rodar o cliente**

Abra uma nova aba no terminal, navegue até a pasta `./client`, e rode o seguinte comando para inicializar a aplicação:

```shell
npm start
```

### Agradecimentos

Agradeço ao time Devio pela oportunidade de realizar o desafio e pelo aprendizado adquirido.

Até mais! 👋