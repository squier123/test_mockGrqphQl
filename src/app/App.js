import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "../mocks/index.tsx";
import router from "../router/index.tsx";

export const App = () => {
  return (
    <div>
      <MockedProvider mocks={mocks}>
        <RouterProvider router={router} />
      </MockedProvider>
    </div>
  );
};
