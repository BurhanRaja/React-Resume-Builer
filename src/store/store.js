import resumeSlice from "../features/resumeSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  resumeBuilt: resumeSlice,
});

export default store;
