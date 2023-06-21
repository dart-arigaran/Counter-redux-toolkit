//import CounterReducer from "./CounterReducer";

import CounterReducer from "../Slices/rcount";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
