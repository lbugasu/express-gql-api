"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var resolvers_1 = require("./resolvers");
var graphql_tools_1 = require("graphql-tools");
var typeDefs = "\n  type User {\n    name: String\n    username: String\n  }\n  input UserInput {\n    name: String\n    username: String\n  }\n  type Query {\n    getUser(username: String): User\n  }\n  type Mutation{\n    createUser(user: UserInput): User\n  }\n";
// Build the schema and export
var schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers_1.resolvers });
exports.schema = schema;
