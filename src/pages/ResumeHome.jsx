import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decryptData } from "../utils/crypto";
import { clearAllResumeState, getAllResumes } from "../features/allResumeSlice";
import { useEffect } from "react";
import { BsEyeFill, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineEdit } from "react-icons/md";

const ResumeHome = () => {
  const [allResumes, setAllResumes] = useState([]);

  const { resumes, isLoading, isSuccess } = useSelector(
    (state) => state.allResumes
  );
  const dispatch = useDispatch();

  const handleAllResumes = () => {
    dispatch(clearAllResumeState());
    let token = localStorage.getItem("token");
    if (token) {
      let decodedId = decryptData(token);
      dispatch(getAllResumes(decodedId));
    }
  };

  useEffect(() => {
    handleAllResumes();
  }, []);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setAllResumes(resumes);
    }
  }, [isLoading, isSuccess]);

  return (
    <section className="h-[100vh]">
      <div className="w-5/6 mx-auto mt-8">
        <h1 className="text-3xl font-bold">Your Resumes</h1>
        <div className="container flex flex-wrap justify-start items-center mt-6">
          {allResumes.length > 0 &&
            allResumes?.map((el) => {
              return (
                <div className="block rounded-lg bg-white p-4 mr-5 w-[20rem] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <img
                    className="rounded-t-lg"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nzrelo.com%2Fwp-content%2Fuploads%2F2016%2F11%2FResume-Format.png&f=1&nofb=1&ipt=9b423920ca8cc11d7332baefadd3a9bc41b71a85d4ecb327f74c09e9da57dfbb&ipo=images"
                    width={300}
                    alt=""
                  />
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      {el?.name}
                    </h5>
                    <div className="flex justify-between mt-6">
                      <Link to={`/resume/${el?.id}`}>
                        <button>
                          <BsEyeFill className="text-gray-500 text-2xl" />
                        </button>
                      </Link>
                      <div>
                        <button type="button">
                          <MdDelete className="text-2xl text-red-500 mr-4" />
                        </button>
                        <button type="button">
                          <MdOutlineEdit className="text-2xl text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="bg-gray-100 border border-gray-500 rounded-lg p-5">
            <h3 className="text-gray-600">Add Resume</h3>
            <p className="text-center mt-2">
              <Link to="/add/resume">
                <button className="border text-gray-600 border-gray-600 rounded-full p-2">
                  <BsPlusLg className="" />
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeHome;
