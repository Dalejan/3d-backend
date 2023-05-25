const express = require("express");
var { graphqlHTTP } = require("express-graphql");
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

// Serve static 3d files
app.use("/static", express.static("./assets"));

// Start the server
var server = app.listen(PORT, () => {
  console.log(
    `Go to http://${server.address().address}:${PORT}/graphiql to run queries!`
  );
});
