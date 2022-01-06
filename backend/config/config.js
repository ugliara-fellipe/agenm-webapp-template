const PORT = 8080;
const environment = {
  development: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://localhost:27017/graphql-webapp",
  },
  production: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://localhost:27017/graphql-webapp-prod",
  },
};

module.exports = { PORT, environment };
