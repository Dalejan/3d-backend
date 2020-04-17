const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./graphql/index");

// Initialize the app
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Serve static files
app.use("/static", express.static("./assets"));

// Start the server
var server = app.listen(PORT, () => {
  console.log(
    `Go to http://${server.address().address}:${PORT}/graphiql to run queries!`
  );
});
