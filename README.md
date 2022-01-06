# agenm-webapp-template

Angular .: GraphQL .: Express .: Node.js .: MongoDB - Webapp Template

# install

# backend

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

If you wish to keep your soul pice create the .gitignore file and add the follow content

```
/node_modules
```

Create the folders: config, data, db, db/schema, src.

Create the files: "src/index.js", "config/config.js", "data/resolvers.js", "data/schema.js", "db/dbConnector.js", "db/schema/storeSchema.js", "db/schema/productSchema.js", "config/graphql.config.js". Eight files in total. 

...

Run backend with command

```
npm start
```

# frontend
