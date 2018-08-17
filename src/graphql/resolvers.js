import { userQuery } from "./login";

export default {
  Mutation: {
    updateUser: (_, { user }, { cache }) => {
      const query = userQuery;

      // Get Previous State
      const previous = cache.readQuery({ query });

      const { userlevel, team } = user;
      console.log(user);
      const data = {
        user: {
          ...previous.user,
          team,
          level: userlevel
        }
      };

      cache.writeQuery({ query, data });
      return null;
    }
  }
};
