"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var schema_1 = require("./data/schema");
// Initialize app
var app = express_1.default();
require("./data/db");
// the graphQL endpoint at /graphql.
app.use("/graphql", express_graphql_1.graphqlHTTP({ schema: schema_1.schema, graphiql: true }));
app.get("*", function (req, res) {
    res.json({ message: "Welcome to the api" });
});
var PORT = 7000;
app.listen(PORT, function () {
    console.log("api is running on port " + PORT);
});
