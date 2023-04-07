import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "loading",
    people: [],
  },
  reducers: {
    fetchPeopleLoading: () => ({
      status: "loading",
    }),
    fetchPeopleError: () => ({
      status: "error",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      status: "success",
      people: people.results,
    }),
  },
});

export const { fetchPeopleLoading, fetchPeopleError, fetchPeopleSuccess } =
  popularPeopleSlice.actions;

export const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPopularPeopleStatus = (state) =>
  selectPopularPeopleState(state).status;
export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).people;

export default popularPeopleSlice.reducer;
