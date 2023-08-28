# EnternessChat

<h3 align="center">
:chat: O EnternessChat é um projeto desenvolvido utilizando as tecnologias TypeScript, Node, React com ViteJS e Socket.io.
</h3>

![Banner](https://asset.cloudinary.com/technical-intelligence/2be605080310ebab6d67613964fcd2b5)

</br>

![Banner](https://asset.cloudinary.com/technical-intelligence/afed6bbb4d8f2007a5d9010ce91d3546)

## **:rocket: OBJETIVO**

O objetivo do projeto é criar uma plataforma de comunicação interativa e instantânea, onde os usuários possam trocar mensagens e informações de maneira imediata. Através da integração do Node.js para o lado do servidor e do React para a construção da interface do usuário, uma aplicação robusta e responsiva que permita aos usuários se conectarem em tempo real, trocar mensagens em grupos, e acompanhar a presença online dos outros participantes. Além disso, o projeto visa implementar recursos de notificações em tempo real, proporcionando uma experiência de chat completa e dinâmica para os usuários envolvidos.

</br>

## **:computer: TECNOLOGIAS**

#### **Website** ([React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://reactrouter.com/en/6.15.0)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[ViteJS](https://vitejs.dev/)**
- **[I18Next](https://react.i18next.com/)**
- **[Emoji Mart](https://github.com/missive/emoji-mart)**
- **[Socket.io Client](https://www.npmjs.com/package/socket.io-client)**

\* Veja o arquivo <kbd>[package.json](./client/package.json)</kbd>

#### **Server** ([NodeJS](https://nodejs.org/en) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/pt-br/)**
- **[CORS](https://www.npmjs.com/package/cors)**
- **[Socket.io](https://socket.io/pt-br/)**

\* Veja o arquivo <kbd>[package.json](./server/package.json)</kbd>

## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link](https://yarnpkg.com/)</kbd>.

### Executando o Server (Backend)

Este é o backend da aplicação. Ele utiliza tecnologias como Node.js, Express e Socket.IO para fornecer a funcionalidade de chat em tempo real.

1. Clone este repositório para o seu sistema local.
2. Navegue até o diretório raiz do projeto `cd server`.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn install
```

</br>

####Scripts Disponíveis

##### Compilação TypeScript (Build):

```bash
npm run build
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn build
```

Este comando irá compilar o código TypeScript localizado na pasta src/ para JavaScript na pasta `dist/`. Ele também utiliza tsc-alias para manter os caminhos de importação mais organizados.

##### Iniciar o Servidor

```bash
npm run dev
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn dev
```

Isso iniciará o servidor Express e o servidor Socket.IO, permitindo que o aplicativo de chat funcione.

##### Modo de Desenvolvimento

```bash
npm start
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn start
```

Este comando é utilizado durante o desenvolvimento. Ele usa o nodemon para monitorar alterações nos arquivos na pasta src/ e reiniciar automaticamente o servidor sempre que houver alterações.

##### Disponibilidade

Após executar o servidor em modo desenvolvimento ou após a build a aplicação ficará disponível em na porta local `4000`.

### Executando o Client (Frontend)

Este é o cliente da aplicação. Ele é construído utilizando tecnologias como React, Vite e Socket.IO para fornecer uma interface de usuário interativa para o aplicativo de chat em tempo real.

1. Clone este repositório para o seu sistema local.
2. Navegue até o diretório raiz do projeto `cd server`.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn install
```

</br>

####Scripts Disponíveis

##### Modo de Desenvolvimento:

```bash
npm run dev
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn dev
```

Este comando inicia o servidor de desenvolvimento usando o Vite. Ele compila e carrega automaticamente as alterações à medida que você edita os arquivos do cliente. Acesse http://localhost:5173 em seu navegador para ver o aplicativo em execução.

##### Compilar para Produção:

```bash
npm run build
```

ou caso estiver utilizando [yarn](https://yarnpkg.com/):

```bash
yarn build
```

Este comando compila o aplicativo para produção. Os arquivos compilados serão armazenados na pasta `dist/`.

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.

<h3 align="center">
Feito por [Daniel Luiz Alves](https://github.com/danielalves96)
<br><br>
</h3>
