import React, { useState } from "react";
import ResumeTemplate from "../components/ResumeTemplate";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function ViewResume() {
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

  console.log(resume);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="w-[75%] mt-10 pb-10 flex justify-between mx-auto">
        <h2 className="text-3xl font-bold">{resume.name}</h2>
        <button className="bg-black text-white p-2" onClick={handlePrint}>
          Download Resume
        </button>
      </div>
      <div ref={componentRef}>
        <ResumeTemplate
          resumeName={resume?.profile?.name}
          designation={resume?.profile?.designation}
          email={resume?.profile?.email}
          phone={resume?.profile?.phone}
          location={resume?.profile?.location}
          skills={resume?.skills}
          about={resume?.about}
          academics={resume?.academics}
          experiences={resume?.experiences}
          projects={resume?.projects}
          githubLink={resume?.github}
          linkedinLink={resume?.linkedIn}
        />
      </div>
    </>
  );
}

export default ViewResume;
