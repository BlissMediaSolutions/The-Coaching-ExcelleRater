import gql from "graphql-tag";

export const resultsQuery = gql`
  query {
    results @client {
      individualResults
    }
  }
`;

export const updateResults = gql`
  mutation updateResults($type: String!, $data: Data!) {
    updateResults(type: $type, data: $data) @client
  }
`;
