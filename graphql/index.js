const { MODELS_SCHEMA, MODELS_TYPES } = require("./schemas/models.schema");
const { DATA_SCHEMA, DATA_TYPES } = require("./schemas/data.schema");
const { makeExecutableSchema } = require("graphql-tools");

const QUERY = `type Query { 
                    models: [Model], 
                    data: [Data] 
                }`;

const typeDefs = [QUERY, MODELS_TYPES, DATA_TYPES];
const resolvers = {
  Query: { models: () => MODELS_SCHEMA, data: () => DATA_SCHEMA },
};

// Put together a schema
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
