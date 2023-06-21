import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   value: 1,
// };
// export function Increment() {
//   return {
//     type: "INCREMENT",
//   };
// }
// export function Decrement() {
//   return {
//     type: "DECREMENT",
//   };
// }

const CountSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    // CounterReducer(state, action) {
    //   switch (action.type) {
    //     case "INCREMENT":
    //     // return (state.value += 1);

    //     case "DECREMENT":
    //       return (state.value -= 1);
    //     default:
    //       return state.value;
    //   }
    // },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = CountSlice.actions;
export default CountSlice.reducer;
export const selectCount = (state) => state.counter.value;
