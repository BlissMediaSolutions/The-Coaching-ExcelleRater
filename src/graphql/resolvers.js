import { userQuery } from "./login";
import { workflowQuery } from "./workflow";
import { videoFlowQuery } from "./videoFlow";
import { resultsQuery } from "./results";
import * as types from "./types";

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
        case types.PLAYER_LIST: {
          const newData = {
            workflow: {
              ...previous.workflow,
              players: data
            }
          };
          cache.writeQuery({ query, data: newData });

          return;
        }
        case types.VIDEO_LIST: {
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
    },
    updateVideoFlow: (_, { type, data }, { cache }) => {
      const query = videoFlowQuery;

      // Get Previous State
      const previous = cache.readQuery({ query });

      switch (type) {
        case types.WORKFLOW_LIST: {
          const newData = {
            videoFlow: {
              ...previous.videoFlow,
              workflows: data
            }
          };
          cache.writeQuery({ query, data: newData });

          return;
        }
        case types.WORKFLOW_VIDEO_LIST: {
          const newData = {
            videoFlow: {
              ...previous.videoFlow,
              workflowVideos: data
            }
          };
          cache.writeQuery({ query, data: newData });
          return;
        }
        default:
          return;
      }
    },
    updateResults: (_, { type, data }, { cache }) => {
      const query = resultsQuery;

      // Get Previous State
      const previous = cache.readQuery({ query });

      switch (type) {
        case types.INDIVIDUAL_RESULTS: {
          const newData = {
            results: {
              ...previous.results,
              individualResults: data
            }
          };
          cache.writeQuery({ query, data: newData });
          return;
        }
        case types.TEAM_RESULTS: {
          const newData = {
            results: {
              ...previous.results,
              teamResults: data
            }
          };
          newData.results.teamResults.sort((a, b) => {
            const dateA = new Date(a.wfdate);
            const dateB = new Date(b.wfdate);

            return dateB.getTime() - dateA.getTime();
          });
          cache.writeQuery({ query, data: newData });
          return;
        }
        default:
          return;
      }
    }
  }
};
