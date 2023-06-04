import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const getSingleUser = createAsyncThunk("singleUsers/get", async (id) => {
  let response = await fetch(`/users/${id}`);
  response = await response.json();
  return response;
});

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    clearSingleUserState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getSingleUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleUserState } = singleUserSlice.actions;

export default singleUserSlice.reducer;
