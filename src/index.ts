import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema";

// Initialize app
const app = express();
require("./data/db");

// the graphQL endpoint at /graphql.
app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.get("*", (req: any, res: any) => {
  res.json({ message: "Welcome to the api" });
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});
