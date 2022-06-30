import { configureStore } from "@reduxjs/toolkit";
import current_Page_Reducer from "./currentPageReducer";

export const store = configureStore({
  reducer: {
    current_Page_Reducer,
  },
});
