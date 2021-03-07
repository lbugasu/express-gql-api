import { UserType } from "./types";

// import the User from the database
import { User } from "./db";

export const resolvers = {
  Query: {
    //@ts-ignore
    getUser: (root, { username }) => {
      console.log(username);
      return User.findOne({ username: username })
        .then((user: UserType) => {
          console.log(user);
          return user;
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    },
  },
  Mutation: {
    // @ts-ignore
    createUser: async (root, { user }) => {
      const newUser = new User({ name: user.name, username: user.username });
      console.log(newUser);
      await newUser.save();
      return newUser;
    },
  },
};
