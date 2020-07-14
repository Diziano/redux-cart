<h1 align="center">
  <img alt="redux-cart" title="redux-cart" src=".github/logo.svg" width="300px" />
  <br/>
  <br/>
</h1>

<p align="center">
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-como-configurar-e-executar">Como configurar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br/>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Diziano/redux-cart?style=flat-square">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Diziano/redux-cart?style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Diziano/redux-cart?style=flat-square">

  <a href="https://github.com/Diziano/redux-cart/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Diziano/redux-cart?style=flat-square">
  </a>

  <a href="https://github.com/Diziano/redux-cart/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Diziano/redux-cart?style=flat-square">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/Diziano/redux-cart?style=flat-square">

</p>

<br/>

<h3>
  <img alt="redux-cart" title="redux-cart" src=".github/web.gif" width="100%" />
</h3>

<br/>


## :computer: Projeto
O REDUXCART é um projeto didático no qual aplico meus primeiros conhecimentos adquiridos com Redux e Redux Saga no ReactJS. A aplicação apresenta um conceito de marketplace, que na minha opinião é um dos modelos de aplicação mais simples para aprender estas tecnologias, uma vez que é fácil existirem vários componentes observando e manipulando os mesmos dados.
Na página inicial é possível visualizar os produtos e adicioná-los ao carrinho. No carrinho é possível alterar as quantidades dos produtos, bem como removê-los. Além disso é possível visualizar os subtotais e o valor total dos produtos adicionados. O cabeçalho da aplicação exibe a quantidade de produtos adicionados ao carrinho.

O Redux implementa a Arquitetura Flux, que é uma forma de fluxo unidirecional de dados entre eventos e ouvintes. É interessante utilizar o Redux quando precisamos ter dados sendo manipulados por múltiplos componentes da aplicação. Esses componentes podem ter acesso a esses dados através de estados globais.

<br/>

## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://github.com/facebook/react)
- [React Redux](https://github.com/reduxjs/react-redux)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

<br />

## :thinking: Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

<br/>

## :gear: Como configurar e executar

#### Web

```bash

    # Clonar o repositório
    $ git clone https://github.com/diziano/redux-cart.git

    # Navegar para o diretório
    $ cd redux-cart

    # Instalar as dependências
    $ yarn install

    # Iniciar o projeto
    $ yarn start

    # Executar build
    $ yarn build
```

#### API

```bash

    # Executar fake API
    $ yarn server

    # Executar fake API com reload automático
    $ yarn dev:server

```

<br/>

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Made with :black_heart: by Diziano
