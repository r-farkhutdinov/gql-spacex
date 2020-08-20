import React from "react";
import { Switch, Route } from "react-router";
import { routes } from "../../modules/routes";

export const MainLayout: React.FC = () => (
  <Switch>
    {routes.map((r, key) => (
      <Route exact key={key} path={r.path}>
        <r.layout>
          <r.component />
        </r.layout>
      </Route>
    ))}
  </Switch>
);
