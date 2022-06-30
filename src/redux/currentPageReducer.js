import { createSlice } from "@reduxjs/toolkit";

export const currentPageReducer = createSlice({
  name: "currentPageReducer",
  initialState: {
    currentPage: {},
    value: {},
    values: [],
    active: false,
  },
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setValue: (state, { payload }) => {
      state.value = payload;
    },
    setValues: (state, { payload }) => {
      state.values = payload;
    },
    setActive: (state, { payload }) => {
      state.active = payload;
    },
    setDelete: (state, { payload }) => {
      let data = state.values.filter((list) => list.id !== payload?.id);
      state.values = data;
    },
    setIsOpenModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
  },
});

export const {
  setCurrentPage,
  setValue,
  setValues,
  setActive,
  setDelete,
  setIsOpenModal,
} = currentPageReducer.actions;

export default currentPageReducer.reducer;
