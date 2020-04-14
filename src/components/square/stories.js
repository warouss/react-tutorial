import React from "react";
import { action } from "@storybook/addon-actions";
import Square from "./index";

export default {
  title: "Square",
  component: Square,
};

export const Default = () => (
  <Square value={null} onClick={action("clicked")}></Square>
);

export const ValueX = () => (
  <Square value="X" onClick={action("clicked")}></Square>
);

export const ValueO = () => (
  <Square value="O" onClick={action("clicked")}></Square>
);
