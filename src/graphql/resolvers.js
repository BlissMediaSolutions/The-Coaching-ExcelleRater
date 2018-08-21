import { userQuery } from "./login";
import { workflowQuery } from "./workflow";
import { PLAYER_LIST, VIDEO_LIST } from "./types";

export default {
  Mutation: {
    updateUser: (_, { user }, { cache }) => {
      const query = userQuery;

      // Get Previous State
      const previous = cache.readQuery({ query });

      const { userlevel, team } = user;

      const data = {
        user: {
          ...previous.user,
          team,
          level: userlevel
        }
      };

      cache.writeQuery({ query, data });
    },
    updateWorkflow: (_, { type, data }, { cache }) => {
      const query = workflowQuery;

      // Get Previous State
      const previous = cache.readQuery({ query });

      switch (type) {
        case PLAYER_LIST: {
          const newData = {
            workflow: {
              ...previous.workflow,
              players: data
            }
          };
          cache.writeQuery({ query, data: newData });

          return;
        }
        case VIDEO_LIST: {
          const newData = {
            workflow: {
              ...previous.workflow,
              videos: data
            }
          };
          cache.writeQuery({ query, data: newData });
          return;
        }
        default:
          return;
      }
    }
  }
};
