import { createSlice } from "@reduxjs/toolkit";

export const currentPageReducer = createSlice({
  name: "currentPageReducer",
  initialState: {
    currentPage: {},
  },
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setIsOpenModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
  },
});

export const { setCurrentPage, setIsOpenModal } = currentPageReducer.actions;

export default currentPageReducer.reducer;
