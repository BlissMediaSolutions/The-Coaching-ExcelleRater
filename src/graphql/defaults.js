import { USER_TEAM, USER_LEVEL } from "../constants/storageTokens";

export default {
  user: {
    __typename: "user",
    team: sessionStorage.getItem(USER_TEAM),
    level: sessionStorage.getItem(USER_LEVEL)
  },
  workflow: {
    __typename: "workflow",
    videos: [],
    players: []
  },
  videoFlow: {
    __typename: "videoFlow",
    workflows: [],
    workflowVideos: []
  }
};
