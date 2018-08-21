import gql from "graphql-tag";

export const userQuery = gql`
  query {
    user @client {
      team
      level
    }
  }
`;

export const updateUser = gql`
  mutation updateUser($user: User!) {
    updateUser(user: $user) @client
  }
`;
