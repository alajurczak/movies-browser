import { createSlice } from "@reduxjs/toolkit";

const personDataSlice = createSlice({
  name: "personData",
  initialState: {
    status: "loading",
    personData: [],
    personPhoto: [],
  },
  reducers: {
    fetchPersonDataLoading: (state) => {
      state.status = "loading";
    },
    fetchPersonDataSuccess: (state, { payload: personData }) => {
      state.status = "success";
      state.personData = personData;
    },
    fetchPersonPhotoSuccess: (state, { payload: personPhoto }) => {
      state.status = "success";
      state.personPhoto = personPhoto;
    },
    fetchPersonDataError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPersonDataLoading,
  fetchPersonDataSuccess,
  fetchPersonDataError,
  fetchPersonPhotoSuccess,
} = personDataSlice.actions;

const selectPersonDataState = (state) => state.personData;

export const selectPersonDataStatus = (state) =>
  selectPersonDataState(state).status;
export const selectPersonData = (state) =>
  selectPersonDataState(state).personData;
export const selectPersonPhoto = (state) =>
  selectPersonDataState(state).personPhoto;

export default personDataSlice.reducer;
