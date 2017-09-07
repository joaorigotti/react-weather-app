# Projeto de aprendizado
## Weather app

Projeto desenvolvido há algum tempo para o aprendizado do framework React.js.

O app é bem simples no quesito de funcionalidades. É consumido uma api [do Open Weather](https://openweathermap.org/forecast5) para trazer a previsão dos próximos cinco dias de três cidades. Há a possibilidade de filtrar as cidades e exibir um gráfico das temperaturas por cidade.

Para testar a aplicação faça o download ou clone o projeto. É necessário ter o Node.js instalado, caso não tenha acesse: [https://nodejs.org/](https://nodejs.org/en/), e instale a versão 4.x.

Com o Node.js instalado, no terminal digite:
```
npm install http-server -g
```
Ou, se necessário
```
sudo npm install http-server -g
```
Este é um simples servidor http para servir o conteúdo estático.

Caso queira realizar alguma modificação no código fonte:
```
npm install webpack -g
```
Ou, se necessário
```
sudo npm install webpack -g
```

Ainda no terminal, acesse o diretório da aplicação e digite:
```
npm install
```

O npm se encarregará de baixar todas as dependências do projeto.

Para executar os testes unitários digite:
```
npm test
```

Para criar a build de produção digite:
```
npm run build
```
Esse comando irá criar um diretório chamado "build" na raiz do projeto.
