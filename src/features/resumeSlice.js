import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

// {
//    id: "",
//    name: "",
//    ratings
// }

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    clearResumeState: () => {
      return initialState;
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

    editAddAcademics: (state, { payload }) => {
      state.academics = payload;
    },
    editAddExperiences: (state, { payload }) => {
      state.experiences = payload;
    },
    editAddProjects: (state, { payload }) => {
      state.projects = payload;
    },
    editAddSkills: (state, { payload }) => {
      state.skills = payload;
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
  addAcademics,
  addExperiences,
  addProjects,
  addSkills,
  editAddAcademics,
  editAddExperiences,
  editAddProjects,
  editAddSkills,
  deleteSkill,
  deleteProject,
  deleteExperience,
  deleteAcademic,
  clearResumeState,
} = resumeSlice.actions;

export default resumeSlice.reducer;
