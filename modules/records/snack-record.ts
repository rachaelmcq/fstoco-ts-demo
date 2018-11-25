import { RepositoryBase, loaderOf } from "@atomic-object/records";
import * as DataLoader from "dataloader";

import { SnackRecord, VoteRecord } from "records";
import { Flavor } from "helpers";
import { Snack } from "graphql-api/schema-types";

export type SnackId = Flavor<number, "snacks">;

export type UnsavedSnack = Pick<
  Snack,
  Exclude<keyof Snack, "voteCount" | "id">
>;
export type SavedSnack = Snack;

export class SnackRepository extends RepositoryBase(SnackRecord) {
  forVote = loaderOf(this).owning(VoteRecord, "snackId") as DataLoader<
    UnsavedSnack,
    SavedSnack
  >;
  byName = loaderOf(this).findOneBy("name") as DataLoader<
    SavedSnack["name"],
    SavedSnack
  >;
}
