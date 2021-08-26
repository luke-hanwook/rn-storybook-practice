import LoadingButton from "./LoadingButton";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("LoadingButton", module)
  .add("default", () => <LoadingButton />)
  .add("loading", () => <LoadingButton loading />);
