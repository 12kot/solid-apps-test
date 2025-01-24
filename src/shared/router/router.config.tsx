import { ReactElement } from "react";

import { HomeLazy } from "pages";

export enum EAppRoutes {
  HOME = "/",
}

export interface IRoute {
  element: ReactElement;
}

export type TRoutes = Record<string, IRoute>;

export const routes: TRoutes = {
  [EAppRoutes.HOME]: {
    element: <HomeLazy />,
  },
};
