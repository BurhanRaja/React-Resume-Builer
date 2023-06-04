import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumes: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const getAllResumes = createAsyncThunk(
  "allResume/get",
  async (userId) => {
    let response = await fetch(`/resume?userId=${userId}`);
    response = await response.json();
    return response;
  }
);

const allResumeSlice = createSlice({
  name: "allResume",
  initialState,
  reducers: {
    clearAllResumeState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllResumes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllResumes.fulfilled, (state, { payload }) => {
        state.resumes = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllResumes.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllResumeState } = allResumeSlice.actions;

export default allResumeSlice.reducer;
