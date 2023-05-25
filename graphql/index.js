const { MODELS_SCHEMA, MODELS_TYPES } = require("./schemas/models.schema");

var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  ${MODELS_TYPES}

  type Query {
    models: [Model]
  }
`);

// // The rootValue provides a resolver function for each API endpoint
var rootValue = {
  models: () => {
    return MODELS_SCHEMA;
  },
};

module.exports = { schema, rootValue };
