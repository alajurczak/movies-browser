import { createSlice } from "@reduxjs/toolkit";

const personPageSlice = createSlice({
  name: "personPage",
  initialState: {
    status: "loading",
    person: [],
    cast: [],
    crew: [],
  },
  reducers: {
    fetchPersonPageLoading: () => ({
      status: "loading",
      person: [],
      cast: [],
      crew: [],
    }),
    fetchPersonPageError: () => ({
      status: "error",
      person: [],
      cast: [],
      crew: [],
    }),
    fetchPersonPageSuccess: (_, { payload: { person, details } }) => ({
      status: "success",
      person: [details],
      cast: person.cast,
      crew: person.crew,
    }),
  },
});

export const {
  fetchPersonPageLoading,
  fetchPersonPageError,
  fetchPersonPageSuccess,
} = personPageSlice.actions;

export const selectPersonPageState = (state) => state.personPage;

export const selectPersonPageStatus = (state) =>
  selectPersonPageState(state).status;
export const selectPerson = (state) => selectPersonPageState(state).person;
export const selectCrew = (state) => selectPersonPageState(state).crew;
export const selectCast = (state) => selectPersonPageState(state).cast;

export default personPageSlice.reducer;
