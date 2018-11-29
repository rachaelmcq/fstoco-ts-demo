import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PopularitySelector } from "./popularity-selector";
import { PopularityMode } from "client/state";
import { action } from "@storybook/addon-actions";

storiesOf("PopularitySelector", module)
  .add("Percentage", () => {
    return (
      <PopularitySelector
        selected={PopularityMode.PERCENTAGE}
        onChange={action("changed")}
      />
    );
  })
  .add("Count", () => {
    return (
      <PopularitySelector
        selected={PopularityMode.VOTE_COUNT}
        onChange={action("changed")}
      />
    );
  });
