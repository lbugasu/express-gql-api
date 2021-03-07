import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
  type User {
    name: String
    username: String
  }
  input UserInput {
    name: String
    username: String
  }
  type Query {
    getUser(username: String): User
  }
  type Mutation{
    createUser(user: UserInput): User
  }
`;
// Build the schema and export
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
