import React from "react";
import { BsLinkedin, BsGithub, BsStarFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

const ResumeTemplate = ({
  githubLink,
  linkedinLink,
  resumeName,
  designation,
  phone,
  email,
  location,
  website,
  skills,
  projects,
  experiences,
  academics,
  about,
}) => {
  return (
    <>
      <div class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-[75%] mt-10 mb-10 mx-auto">
        <header>
          <div class="flex justify-between items-center">
            <div class="text-start">
              <h1 class="text-5xl font-extrabold">{resumeName}</h1>
              <p class="text-lg mt-5">{designation}</p>
            </div>
            <div>
              <Link
                to={website}
                class="bg-black p-2 font-semibold mr-3 text-white inline-flex items-center space-x-2 rounded"
                target="_blank"
              >
                <CgWebsite className="text-xl" />
              </Link>
              <Link
                to={linkedinLink}
                class="bg-blue-600 p-2 font-semibold mr-3 text-white inline-flex items-center space-x-2 rounded"
                target="_blank"
              >
                <BsLinkedin className="text-xl" />
              </Link>
              <Link
                to={githubLink}
                class="bg-gray-700 p-2 font-medium mr-3 text-white inline-flex items-center space-x-2 rounded"
                target="_blank"
              >
                <BsGithub className="text-xl" />
              </Link>
            </div>
          </div>
        </header>
        <div class="flex gap-x-10 mt-10">
          <div class="w-2/6">
            <strong class="text-xl font-medium">Contact Details</strong>
            <ul class="mt-2 mb-10">
              <li class="px-2 mt-1">
                <strong class="mr-1">Phone </strong>
                <a href="tel:+821023456789" class="block">
                  {phone}
                </a>
              </li>
              <li class="px-2 mt-1">
                <strong class="mr-1">E-mail </strong>
                <a href="mailto:" class="block">
                  {email}
                </a>
              </li>
              <li class="px-2 mt-1">
                <strong class="mr-1">Location</strong>
                <span class="block">{location}</span>
              </li>
            </ul>
            <strong class="text-xl font-medium">Skills</strong>
            <ul class="mt-2 mb-10">
              {skills?.map((el) => {
                return (
                  <li
                    key={el?.id}
                    className="mt-1 flex justify-between items-center w-[50%]"
                  >
                    <p>{el?.name}</p>
                    <div className="flex">
                      {Array.from(new Array(el?.rate)).map(() => {
                        return (
                          <BsStarFill className="text-yellow-500 text-lg" />
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="w-4/6">
            <section>
              <h2 class="text-2xl pb-1 border-b font-semibold">About</h2>
              <p class="mt-4">{about}</p>
            </section>
            <section>
              <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                Projects
              </h2>
              <ul class="mt-1">
                {projects?.map((el) => {
                  return (
                    <li key={el?.id} class="py-2">
                      <div class="flex justify-between my-1">
                        <strong>{el?.title}</strong>
                        <p class="flex flex-wrap w-[70%]">
                          {el?.technology?.map((el, index) => {
                            return (
                              <span
                                key={index}
                                class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded mb-2"
                              >
                                {el}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                      <ul class="flex mb-2">
                        <li>
                          <Link
                            href={el?.appURL}
                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          >
                            Live
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={el?.codeURL}
                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          >
                            Code
                          </Link>
                        </li>
                      </ul>
                      <p class="">{el?.description}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section>
              <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                Work Experiences
              </h2>
              <ul class="mt-2">
                {experiences?.map((el) => {
                  return (
                    <li class="pt-2" key={el?.id}>
                      <p class="flex justify-between text-sm">
                        <strong class="text-base">{el?.designation}</strong>
                        {el?.tenure}
                      </p>
                      <p class="flex justify-between text-base my-2">
                        {el?.organization}
                        <small>{el?.location}</small>
                      </p>
                      <p class="text-justify">{el?.description}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section>
              <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
                Education
              </h2>
              <ul class="mt-2">
                {academics?.map((el) => {
                  return (
                    <li class="pt-2" key={el?.id}>
                      <p class="flex justify-between text-sm">
                        <strong class="text-lg">{el?.title}</strong>
                        {el?.year}
                      </p>
                      <p class="flex justify-between my-2">{el?.name}</p>
                      <p class="text-justify">{el?.description}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeTemplate;
