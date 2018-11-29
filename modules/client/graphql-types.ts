/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum Flavor {
  salty = "salty",
  sweet = "sweet"
}

export interface AddSnackMutationVariables {
  name: string;
  flavor: Flavor;
}

export interface AddSnackMutation {
  // addSnack(name: String!): Snack
  addSnack: {
    id: number;
    name: string;
    voteCount: number;
  } | null;
}

export interface VoteForSnackMutationVariables {
  snackId: number;
}

export interface VoteForSnackMutation {
  voteFor: {
    __typename: "Vote";
    id: number;
    snack: {
      __typename: "Snack";
      id: number;
      voteCount: number;
    };
  } | null;
}

export interface DashboardSnacksQuery {
  allSnacks: Array<{
    id: number;
    name: string;
    voteCount: number;
  }> | null;
}
