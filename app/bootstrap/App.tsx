import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { ApolloProvider } from "@apollo/client";
import { client } from "../core/apolloClient";

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </ApolloProvider>
);
