# agenm-webapp-template

This repository show how build a AGENM (Angular .: GraphQL .: Express .: Node.js .: MongoDB) project. Follow the steps to create the backend and the frontend.

# Backend

Create the backend folder

```
$ mkdir backend
```

Initialize an nodejs project

```
$ npm init
```

Open the file package.json and update it

```
"main": "./src/index.js",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon ./src/index.js"
},
``` 

Install the dependencies

```
$ npm install --save apollo-server-express express express-graphql graphql mongodb mongoose nodemon
```

If you wish to keep your soul pice create the .gitignore file and fill with the content above

```
/node_modules
```

Create the folders: config, data, db, db/schema, src.

Create the files: "src/index.js", "config/config.js", "data/resolvers.js", "data/schema.js", "db/dbConnector.js", "db/schema/storeSchema.js", "db/schema/productSchema.js", "config/graphql.config.js". Eight files in total, fill these files with content as found in similar files here.

Run backend with command

```
npm start
```

# Frontend

Install angular in global packages of node.

```
$ sudo npm install -g @angular/cli
```

Create a angular project.

```
$ ng new frontend
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS
```

Install GraphQL in angular project.

```
$ ng add apollo-angular
? Url to your GraphQL endpoint http://localhost:8080/graphql
```

Run frontend with command

```
$ ng serve
```

Investigate the "src/app" folder. The file "api.service.ts" define an examplo
of apollo request query,  and "graphql.module.ts" configure the client to
access the server using apollo-angular.
