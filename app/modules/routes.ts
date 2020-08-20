import { Space } from "./Space/Space.component";
import * as React from "react";
import { SpaceLayout } from "../layout/SpaceLayout";

export type RouteType = {
  name: string;
  path: string;
  component: React.FunctionComponent;
  layout: React.FunctionComponent;
};

export const routes: RouteType[] = [
  {
    name: "Space",
    path: "/",
    component: Space,
    layout: SpaceLayout,
  },
];
