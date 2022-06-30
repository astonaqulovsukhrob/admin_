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
    setEdit: (state, { payload }) => {
      let is_edit = state?.values.find((list) => list.id === payload?.id);
      state.values = is_edit;
    },
    setDelete: (state, { payload }) => {
      let is_delete = state.values.filter((list) => list.id !== payload?.id);
      state.values = is_delete;
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
  setEdit,
  setDelete,
  setIsOpenModal,
} = currentPageReducer.actions;

export default currentPageReducer.reducer;
