"use client";

import { Provider } from "react-redux";
import store from ".";

export function ProvidersStore({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
