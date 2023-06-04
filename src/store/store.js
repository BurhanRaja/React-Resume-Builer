import resumeSlice from "../features/resumeSlice";
import singleUsersSlice from "../features/singleUsersSlice";
import allUserSlice from "../features/userSlice";
const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const reducer = combineReducers({
  resumeBuilt: resumeSlice,
  allUsers: allUserSlice,
  singleUser: singleUsersSlice,
});

const store = configureStore({
  reducer,
});

export default store;
