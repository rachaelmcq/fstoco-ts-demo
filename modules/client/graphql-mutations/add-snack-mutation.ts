import { ApolloClient } from "apollo-client";
import {
  AddSnackMutation,
  AddSnackMutationVariables
} from "client/graphql-types";

const MUTATION = require("./AddSnack.graphql");

export function addSnackMutation(
  apolloClient: ApolloClient<any>,
  snack: AddSnackMutationVariables
) {
  return apolloClient.mutate<AddSnackMutation>({
    mutation: MUTATION,

    variables: snack,

    optimisticResponse: {
      addSnack: {
        __typename: "Snack",
        id: -1,
        name: snack.name,
        voteCount: 0
      }
    },

    refetchQueries: ["DashboardSnacks"]
  });
}
