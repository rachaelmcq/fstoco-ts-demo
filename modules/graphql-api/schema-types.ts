/* tslint:disable */

export interface Query {
  allSnacks: Array<Snack>;
}

export interface Snack {
  id: number;
  name: string;
  voteCount: number;
  flavor: Flavor;
}

export type Flavor = "salty" | "sweet";

export interface Mutation {
  addSnack: Snack | null;
  voteFor: Vote | null;
}

export interface AddSnackMutationArgs {
  name: string;
  flavor: Flavor;
}

export interface VoteForMutationArgs {
  snackId: number;
}

export interface Vote {
  id: number;
  snack: Snack;
}
