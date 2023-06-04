import React, { useState } from "react";
import Card from "../components/resumeform/Card";
import Input from "../components/resumeform/Input";
import Textarea from "../components/resumeform/Textarea";
import Stars from "../components/resumeform/Stars";
import { useDispatch, useSelector } from "react-redux";
import {
  addAcademics,
  addExperiences,
  addProjects,
  addSkills,
  clearResumeState,
  deleteAcademic,
  deleteExperience,
  deleteProject,
  deleteSkill,
  editAddAcademics,
  editAddExperiences,
  editAddProjects,
  editAddSkills,
} from "../features/resumeSlice";
import { v4 as uuid } from "uuid";
import { BsStarFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import {
  clearSingleUserState,
  getSingleUser,
} from "../features/singleUsersSlice";
import { useEffect } from "react";
import { decryptData } from "../utils/crypto";
import ResumeTemplate from "../components/ResumeTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditResumeForm = () => {
  const { skills, projects, experiences, academics } = useSelector(
    (state) => state.resumeBuilt
  );
  const { user, isLoading, isSuccess } = useSelector(
    (state) => state.singleUser
  );
  const { id } = useParams();
  const [resume, setResume] = useState({});

  const handleUserResume = async () => {
    let response = await fetch(`/resume/${id}`);
    response = await response.json();
    setResume(response);
  };

  useEffect(() => {
    handleUserResume();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get User
  const handleSingleUser = () => {
    dispatch(clearSingleUserState());
    let token = localStorage.getItem("token");
    if (token) {
      let decodedId = decryptData(token);
      dispatch(getSingleUser(decodedId));
    }
  };

  // Name
  const [resume_name, setResume_name] = useState("");

  // Profile
  const [full_name, setFull_name] = useState("");
  const [current_designation, setCurrent_designation] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (resume) {
      dispatch(clearResumeState());
      dispatch(editAddSkills(resume?.skills));
      dispatch(editAddAcademics(resume?.academics));
      dispatch(editAddExperiences(resume?.experiences));
      dispatch(editAddProjects(resume?.projects));
      setFull_name(resume?.profile?.name);
      setEmail(resume?.profile?.email);
      setPhone(resume?.profile?.phone);
      setLocation(resume?.profile?.location);
      setWebsite(resume?.profile?.website);
      setAbout(resume?.about);
      setResume_name(resume?.name);
      setGithubLink(resume?.github);
      setLinkedinLink(resume?.linkedIn);
      setCurrent_designation(resume?.profile?.designation);
    }
  }, [resume]);

  // Set User Email
  useEffect(() => {
    handleSingleUser();
  }, []);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setUserId(user?.id);
    }
  }, [isLoading, isSuccess]);

  // Academics
  const [aca_title, setAca_title] = useState("");
  const [aca_year, setAca_year] = useState("");
  const [aca_name, setAca_name] = useState("");
  const [aca_description, setAca_description] = useState("");

  const handleAddAcademics = () => {
    if (
      aca_title === "" ||
      aca_year === "" ||
      aca_name === "" ||
      aca_description === ""
    ) {
      toast.error("Missing Field Detected. Please Check.");
      return;
    }
    let data = {
      id: uuid(),
      title: aca_title,
      year: aca_year,
      name: aca_name,
      description: aca_description,
    };
    dispatch(addAcademics(data));
    setAca_description("");
    setAca_title("");
    setAca_name("");
    setAca_year("");
  };

  const handleDeleteAcademic = (id) => {
    dispatch(deleteAcademic(id));
  };

  // Projects
  const [proj_title, setProj_title] = useState("");
  const [proj_tenure, setProj_tenure] = useState("");
  const [proj_appUrl, setProj_appUrl] = useState("");
  const [proj_codeUrl, setProj_codeUrl] = useState("");
  const [proj_technology, setProj_technology] = useState("");
  const [proj_description, setProj_description] = useState("");

  const handleAddProject = () => {
    if (
      proj_title === "" ||
      proj_tenure === "" ||
      proj_codeUrl === "" ||
      proj_technology === "" ||
      proj_description === ""
    ) {
      toast.error("Missing Field Detected. Please Check.");
      return;
    }

    let data = {
      id: uuid(),
      title: proj_title,
      tenure: proj_tenure,
      appURL: proj_appUrl,
      codeURL: proj_codeUrl,
      technology: proj_technology.split("|"),
      description: proj_description,
    };
    dispatch(addProjects(data));
    setProj_title("");
    setProj_tenure("");
    setProj_appUrl("");
    setProj_codeUrl("");
    setProj_technology("");
    setProj_description("");
  };

  const handleDeleteProject = (id) => {
    dispatch(deleteProject(id));
  };

  // Experience
  const [exp_designation, setExp_designation] = useState("");
  const [exp_organization, setExp_organization] = useState("");
  const [exp_tenure, setExp_tenure] = useState("");
  const [exp_location, setExp_location] = useState("");
  const [exp_description, setExp_description] = useState("");

  const handleAddExp = () => {
    if (
      exp_description === "" ||
      exp_organization === "" ||
      exp_tenure === "" ||
      exp_location === "" ||
      exp_designation === ""
    ) {
      toast.error("Missing Field Detected. Please Check.");
      return;
    }

    let data = {
      id: uuid(),
      designation: exp_designation,
      organization: exp_organization,
      tenure: exp_tenure,
      location: exp_location,
      description: exp_description,
    };
    dispatch(addExperiences(data));
    setExp_designation("");
    setExp_organization("");
    setExp_tenure("");
    setExp_location("");
    setExp_description("");
  };

  const handleDeleteExp = (id) => {
    dispatch(deleteExperience(id));
  };

  // Skills
  const [skill_name, setSkill_name] = useState("");
  const [stars, setStars] = useState(1);

  const handleAddSkills = () => {
    if (skill_name === "") {
      toast.error("Missing Field Detected. Please Check.");
      return;
    }

    let data = {
      id: uuid(),
      name: skill_name,
      rate: stars,
    };
    dispatch(addSkills(data));
    setSkill_name("");
    setStars(1);
  };

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id));
  };

  // Important Links
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  // Create Resume
  const handleSubmitResume = () => {
    if (
      githubLink === "" ||
      linkedinLink === "" ||
      resume_name === "" ||
      full_name === "" ||
      email === "" ||
      phone === "" ||
      location === "" ||
      current_designation === "" ||
      about === ""
    ) {
      toast.error("Missing Field Detected. Please Check.");
      return;
    }

    if (skills.length === 0) {
      toast.error("Please add Skills.");
      return;
    }
    if (experiences.length === 0) {
      toast.error("Please add Experiences.");
      return;
    }
    if (academics.length === 0) {
      toast.error("Please add Academics.");
      return;
    }
    if (projects.length === 0) {
      toast.error("Please add Projects.");
      return;
    }

    let data = {
      id,
      userId,
      name: resume_name,
      github: githubLink,
      linkedIn: linkedinLink,
      profile: {
        name: full_name,
        designation: current_designation,
        email,
        phone,
        location,
        website,
      },
      about,
      skills,
      projects,
      experiences,
      academics,
    };

    fetch(`/resume/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    dispatch(clearResumeState());
    setFull_name("");
    setEmail("");
    setPhone("");
    setLocation("");
    setWebsite("");
    setCurrent_designation("");
    setAbout("");

    toast.success("Resume Created Successfully.");
    navigate("/home");
  };

  return (
    <>
      <div className="w-[70%] mx-auto mb-8">
        <h1 className="mb-5 text-4xl font-bold">Edit Resume</h1>
        <Card title="Name of the Resume">
          <Input
            label="Name"
            value={resume_name}
            handleChange={(val) => setResume_name(val)}
          />
        </Card>
        <Card title="Profile">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Full Name"
              value={full_name}
              handleChange={(val) => setFull_name(val)}
            />
            <Input
              label="Current Designation"
              value={current_designation}
              handleChange={(val) => setCurrent_designation(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Email"
              value={email}
              handleChange={(val) => setEmail(val)}
            />
            <Input
              label="Phone No."
              value={phone}
              handleChange={(val) => setPhone(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Location"
              value={location}
              handleChange={(val) => setLocation(val)}
            />
            <Input
              label="Website"
              value={website}
              handleChange={(val) => setWebsite(val)}
            />
          </div>
        </Card>
        <Card title="About">
          <Textarea
            label="About"
            width="w-[90%] mx-auto"
            value={about}
            handleChange={(val) => setAbout(val)}
          />
        </Card>
        <Card title="Academics">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Title"
              value={aca_title}
              handleChange={(val) => setAca_title(val)}
            />
            <Input
              label="Year"
              value={aca_year}
              handleChange={(val) => setAca_year(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Name of Academics (School, College etc.)"
              value={aca_name}
              handleChange={(val) => setAca_name(val)}
            />
            <Textarea
              label="Description"
              width="w-[40%]"
              value={aca_description}
              handleChange={(val) => setAca_description(val)}
            />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleAddAcademics}
              className=" text-white bg-gray-900 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Add
            </button>
          </div>
          <div className="mt-4 w-[85%] mx-auto">
            {academics?.map((el) => {
              return (
                <div key={el?.id} className="p-4 bg-gray-200 mb-3">
                  <div className="flex justify-end mb-3">
                    <button
                      onClick={() => handleDeleteAcademic(el?.id)}
                      className="text-red-500"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">{el?.name}</h2>
                    <h3 className="text-xl">{el?.year}</h3>
                  </div>
                  <p className="text-lg mt-2">{el?.title}</p>
                  <p className="mt-2 text-gray-600">{el?.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
        <Card title="Projects">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Title"
              value={proj_title}
              handleChange={(val) => setProj_title(val)}
            />
            <Input
              label="Tenure"
              value={proj_tenure}
              handleChange={(val) => setProj_tenure(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Application URL"
              value={proj_appUrl}
              handleChange={(val) => setProj_appUrl(val)}
            />
            <Input
              label="Technologies Used"
              smallText="Seperate Technology with '|'"
              value={proj_technology}
              handleChange={(val) => setProj_technology(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Code URL"
              value={proj_codeUrl}
              handleChange={(val) => setProj_codeUrl(val)}
            />
            <Textarea
              label="Description"
              width="w-[40%]"
              value={proj_description}
              handleChange={(val) => setProj_description(val)}
            />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleAddProject}
              className=" text-white bg-gray-900 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Add
            </button>
          </div>
          <div className="mt-4 w-[85%] mx-auto">
            {projects?.map((el) => {
              return (
                <div className="p-4 bg-gray-200">
                  <div className="flex justify-end mb-3">
                    <button
                      onClick={() => handleDeleteProject(el?.id)}
                      className="text-red-500"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">{el?.title}</h2>
                    <div>{el?.technology?.join(", ")}</div>
                  </div>
                  <p className="mt-2">{el?.tenure}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-start">
                      <p className="mr-2">App URL: {el?.appURL}</p>
                      <p className="">Code URL: {el?.codeURL}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{el?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card title="Professional Experiences">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Designation"
              value={exp_designation}
              handleChange={(val) => setExp_designation(val)}
            />
            <Input
              label="Organization"
              value={exp_organization}
              handleChange={(val) => setExp_organization(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Input
              label="Tenure"
              value={exp_tenure}
              handleChange={(val) => setExp_tenure(val)}
            />
            <Input
              label="Location"
              value={exp_location}
              handleChange={(val) => setExp_location(val)}
            />
          </div>
          <div className="flex justify-evenly mt-3">
            <Textarea
              label="Description"
              width="w-[85%]"
              value={exp_description}
              handleChange={(val) => setExp_description(val)}
            />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleAddExp}
              className=" text-white bg-gray-900 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Add
            </button>
          </div>
          <div className="mt-4 w-[85%] mx-auto">
            {experiences?.map((el) => {
              return (
                <div key={el?.id} className="p-4 bg-gray-200">
                  <div className="flex justify-end mb-3">
                    <button
                      onClick={() => handleDeleteExp(el?.id)}
                      className="text-red-500"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{el?.designation}</h2>
                    <h2 className="text-xl">{el?.tenure}</h2>
                  </div>
                  <div className="flex justify-between mt-2 items-center">
                    <h2 className="text-xl">{el?.organization}</h2>
                    <h2 className="text-lg">{el?.location}</h2>
                  </div>
                  <p className="text-gray-600 mt-2">{el?.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
        <Card title="Skills">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Skill"
              value={skill_name}
              handleChange={(val) => setSkill_name(val)}
              name="skill_name"
            />
            <Stars selected={stars} handleSelected={(val) => setStars(val)} />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => handleAddSkills()}
              className=" text-white bg-gray-900 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Add
            </button>
          </div>
          <div className="w-[85%] mx-auto mt-4">
            {skills?.map((el) => {
              return (
                <div
                  key={el?.id}
                  className="p-3 px-6 bg-gray-200 rounded-md flex justify-between mb-3"
                >
                  <h2 className="text-xl font-semibold">{el?.name}</h2>
                  <div className="flex">
                    {Array.from(new Array(el?.rate)).map((el, index) => {
                      return (
                        <BsStarFill
                          key={index}
                          className="text-2xl mr-2 text-yellow-500"
                        />
                      );
                    })}
                  </div>
                  <button
                    onClick={() => handleDeleteSkill(el?.id)}
                    className="text-red-500 underline"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
        <Card title="Important Links">
          <div className="flex justify-evenly mt-3">
            <Input
              label="Github Link"
              value={githubLink}
              handleChange={(val) => setGithubLink(val)}
            />
            <Input
              label="LinkedIn Link"
              value={linkedinLink}
              handleChange={(val) => setLinkedinLink(val)}
            />
          </div>
        </Card>
        <button
          onClick={handleSubmitResume}
          className="mt-5 p-3 bg-black text-white text-xl w-[100%]"
        >
          Edit Resume
        </button>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-bold w-[80%] mx-auto">Preview Resume</h2>
        <ResumeTemplate
          githubLink={githubLink}
          linkedinLink={linkedinLink}
          resumeName={full_name}
          designation={current_designation}
          phone={phone}
          email={email}
          location={location}
          about={about}
          website={website}
          skills={skills}
          experiences={experiences}
          projects={projects}
          academics={academics}
        />
      </div>
    </>
  );
};

export default EditResumeForm;
