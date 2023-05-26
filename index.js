const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const path = require("path");
const { schema, rootValue } = require("./graphql/index");

// Initialize the app
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

// The GraphQL endpoint

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);

app.use("/public", express.static(__dirname + "/public/"));

// Start the server
var server = app.listen(PORT, () => {
  console.log(
    `Go to http://${server.address().address}:${PORT}/graphql to run queries!`
  );
});
