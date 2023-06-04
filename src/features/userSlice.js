import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const getAllUsers = createAsyncThunk("allUsers/get", async () => {
  let response = await fetch("/users");
  response = await response.json();
  return response;
});

const allUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsersState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
          state.users = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearUsersState } = allUserSlice.actions;

export default allUserSlice.reducer;
