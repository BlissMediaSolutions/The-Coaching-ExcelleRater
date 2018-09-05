import gql from "graphql-tag";

export const videoFlowQuery = gql`
  query {
    videoFlow @client {
      workflows
      workflowVideos
    }
  }
`;

export const updateVideoFlow = gql`
  mutation updateVideoFlow($type: String!, $data: Data!) {
    updateVideoFlow(type: $type, data: $data) @client
  }
`;
