import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    fullname: "",
    current_designation: "",
    location: "",
    phone: "",
    website: "",
  },
  about: "",
  academics: [],
  experiences: [],
  projects: [],
  skills: [],
};

// {
//     id: "",
//     title: "",
//     tenure: "",
//     url: "",
//     description: "",
//     technology_used: [],
//   },

// {
//     id: "",
//     designation: "",
//     organization: "",
//     tenure: "",
//     location: "",
//     description: "",
//   },

// {
//     id: "",
//     type: "",
//     title: "",
//     year: "",
//     description: "",
//   },

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    clearResumeState: () => {
      return initialState;
    },
    addProfile: (state, { payload }) => {
      state.profile = payload;
    },
    addAbout: (state, { payload }) => {
      state.about = payload;
    },
    addAcademics: (state, { payload }) => {
      state.academics.push(payload);
    },
    addExperiences: (state, { payload }) => {
      state.experiences.push(payload);
    },
    addProjects: (state, { payload }) => {
      state.projects.push(payload);
    },
    addSkills: (state, { payload }) => {
      state.skills.push(payload);
    },

    deleteAcademic: (state, { payload }) => {
      let aca = state.academics.filter((el) => el.id !== payload);
      state.academics = aca;
    },
    deleteExperience: (state, { payload }) => {
      let exp = state.experiences.filter((el) => el.id !== payload);
      state.experiences = exp;
    },
    deleteProject: (state, { payload }) => {
      let projects = state.projects.filter((el) => el.id !== payload);
      state.projects = projects;
    },
    deleteSkill: (state, { payload }) => {
      let skills = state.skills.filter((el) => el.id !== payload);
      state.skills = skills;
    },
  },
});

export const {
  addAbout,
  addAcademics,
  addExperiences,
  addProfile,
  addProjects,
  addSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;
