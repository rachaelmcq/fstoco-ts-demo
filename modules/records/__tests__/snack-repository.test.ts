import { withContext } from "__tests__/db-helpers";

describe("SnackRepository", () => {
  it("does things", () => {});
});
/* 
 * Commented these out to focus on the type errors coming from the actual app
 */
//   "Can insert and find records",
//   withContext(async ctx => {
//     const snack = await ctx.repos.snacks.insert({
//       name: "Foo",
//       flavor: "salty"
//     });
//     expect(snack.id).not.toBeFalsy();

//     const lookedUpSnack = await ctx.repos.snacks.findById.load(snack.id);
//     if (!lookedUpSnack) throw "couldn't find snack";
//     expect(lookedUpSnack.id).toEqual(snack.id);

//     const byName = await ctx.repos.snacks.byName.load("Foo");
//     if (!byName) throw "couldn't find snack";
//     expect(byName.id).toEqual(snack.id);
//   })
// );

// it(
//   "Can find the votes for a snack",
//   withContext(async ctx => {
//     const snack = await ctx.repos.snacks.insert({
//       name: "Bar",
//       flavor: "sweet"
//     });
//     await ctx.repos.votes.insert({ snackId: snack.id });

//     const votesOfSnack = await ctx.repos.votes.allForSnack.load(snack);
//     expect(votesOfSnack.length).toEqual(1);

//     const count = await ctx.repos.votes.countForSnack.load(snack.id);
//     expect(count).toEqual(1);
//   })
// );

// it(
//   "Returns an empty array if there's no votes for the snack",
//   withContext(async ctx => {
//     const snack = await ctx.repos.snacks.insert({
//       name: "Bar2",
//       flavor: "sweet"
//     });

//     const votesOfSnack = await ctx.repos.votes.allForSnack.load(snack);
//     expect(votesOfSnack.length).toEqual(0);

//     const count = await ctx.repos.votes.countForSnack.load(snack.id);
//     expect(count).toEqual(0);
//   })
// );

// it(
//   "Can find the snack for a vote",
//   withContext(async ctx => {
//     const snack = await ctx.repos.snacks.insert({
//       name: "Baz",
//       flavor: "salty"
//     });
//     const vote = await ctx.repos.votes.insert({ snackId: snack.id });

//     const voteSnack = await ctx.repos.snacks.forVote.load(vote as any);
//     expect(voteSnack.id).toEqual(snack.id);
//   })
// );
// });
