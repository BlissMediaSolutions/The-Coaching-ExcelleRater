import gql from "graphql-tag";

export const workflowQuery = gql`
  query {
    workflow @client {
      players
      videos
    }
  }
`;

export const updateWorkflow = gql`
  mutation updateWorkflow($type: String!, $data: Data!) {
    updateWorkflow(type: $type, data: $data) @client
  }
`;
