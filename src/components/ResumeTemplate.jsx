import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Template = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10 mx-auto">
      <header>
        <ul class="flex flex-wrap justify-end gap-2">
          <li>
            <a
              href="https://www.linkedin.com/"
              class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              target="_blank"
            >
              <BsLinkedin className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              class="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
              target="_blank"
            >
              <BsGithub className="text-xl" />
            </a>
          </li>
        </ul>
        <div class="flex justify-between items-center">
          <div class="text-start">
            <h1 class="text-5xl font-extrabold">DAHYE JI</h1>
            <p class="text-lg mt-5">Aspiring Front-End Developer</p>
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
                +82 10 2345 6789
              </a>
            </li>
            <li class="px-2 mt-1">
              <strong class="mr-1">E-mail </strong>
              <a href="mailto:" class="block">
                aspiringfe@helloworld.com
              </a>
            </li>
            <li class="px-2 mt-1">
              <strong class="mr-1">Location</strong>
              <span class="block">Seoul, South Korea</span>
            </li>
          </ul>
          <strong class="text-xl font-medium">Skills</strong>
          <ul class="mt-2 mb-10">
            <li class="px-2 mt-1">HTML</li>
            <li class="px-2 mt-1">CSS</li>
            <li class="px-2 mt-1">JavaScript</li>
            <li class="px-2 mt-1">React</li>
            <li class="px-2 mt-1">Node.js</li>
          </ul>
          <strong class="text-xl font-medium">Further Education</strong>
          <ul class="mt-2 mb-10">
            <li class="px-2 mt-1">Like Lion Frontend School</li>
            <li class="px-2 mt-1">Udemy</li>
            <li class="px-2 mt-1">Freecodecamp</li>
          </ul>
          <strong class="text-xl font-medium">Currently learning</strong>
          <ul class="mt-2 mb-10">
            <li class="px-2 mt-1">About Web Accessibility</li>
            <li class="px-2 mt-1">and User Experience</li>
          </ul>
          <strong class="text-xl font-medium">Interests & Hobbies</strong>
          <ul class="mt-2">
            <li class="px-2 mt-1">Sustainability</li>
            <li class="px-2 mt-1">New technologies</li>
            <li class="px-2 mt-1">Blogging on dev.to</li>
            <li class="px-2 mt-1">Investment</li>
            <li class="px-2 mt-1">Travel</li>
          </ul>
        </div>
        <div class="w-4/6">
          <section>
            <h2 class="text-2xl pb-1 border-b font-semibold">About</h2>
            <p class="mt-4 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              deserunt modi qui. Dolorum aliquid quasi velit cupiditate officia
              magnam impedit, sapiente hic, eaque quaerat ullam fugiat
              reprehenderit voluptates odit! Error. Tempore fuga iusto eveniet
              omnis impedit repellat ab repellendus nesciunt similique. Iure
              voluptates, enim nesciunt tempora amet earum, porro rem ad et
              sequi corrupti neque quidem? Debitis quo quibusdam nemo. Nam
              doloremque perferendis tempora asperiores, ullam praesentium et,
              voluptas pariatur illo aliquid similique, fugiat repellendus ipsa
              necessitatibus minus hic culpa quasi. Sed voluptate itaque
              accusantium earum cupiditate ipsa neque magnam!
            </p>
          </section>
          <section>
            <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
            <ul class="mt-1">
              <li class="py-2">
                <div class="flex justify-between my-1">
                  <strong>Rules of 10000 hours</strong>
                  <p class="flex">
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      HTML
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      CSS
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      JS
                    </span>
                  </p>
                </div>
                <ul class="flex mb-2">
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Live
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Code
                    </a>
                  </li>
                </ul>
                <p class="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita delectus labore enim in minus quod vero dignissimos
                  et, ratione obcaecati quis maiores? Voluptatem, natus
                  cupiditate perferendis omnis ex hic incidunt! Earum dolore
                  cupiditate sed et maxime distinctio iure fugiat aspernatur at
                  veniam laudantium eveniet corporis dicta reiciendis quod
                  consequatur, labore perferendis dolorum velit quibusdam minus
                  iste dolorem! Officiis, obcaecati maxime
                </p>
              </li>
              <li class="py-2">
                <div class="flex justify-between my-1">
                  <strong>Vending Machine</strong>
                  <p class="flex">
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      HTML
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      CSS
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      JS
                    </span>
                  </p>
                </div>
                <ul class="flex mb-2">
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Live
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Code
                    </a>
                  </li>
                </ul>
                <p class="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  expedita illum optio porro suscipit rerum labore veritatis
                  autem eum totam veniam repudiandae repellendus perspiciatis
                  eligendi sequi maiores, cum ipsa ut! Dolorum aliquid quaerat,
                  dolore nemo, vero alias non porro quam totam impedit repellat
                  voluptas, nobis harum quae dolorem accusantium consequatur.
                  Recusandae cupiditate possimus natus consequuntur aliquid,
                  molestias provident saepe nobis.
                </p>
              </li>
              <li class="py-2">
                <div class="flex justify-between my-1">
                  <strong>Landing Page</strong>
                  <p class="flex">
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      HTML
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      CSS
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      React
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      Node.js
                    </span>
                  </p>
                </div>
                <ul class="flex mb-2">
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Live
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Code
                    </a>
                  </li>
                </ul>
                <p class="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, odio autem non possimus adipisci, sed sequi culpa
                  ipsa necessitatibus repellat rerum. Obcaecati nobis modi
                  voluptate nam minus praesentium soluta voluptatibus! Minima
                  temporibus deserunt laborum, expedita ad molestiae
                  perferendis? Ipsa aut, necessitatibus expedita rem iure minus
                  sit voluptates magni, sequi eum architecto excepturi tempora
                  dolorum soluta quam odit amet nobis incidunt.
                </p>
              </li>
              <li class="py-2">
                <div class="flex justify-between my-1">
                  <strong>Gamgyul Market</strong>
                  <p class="flex">
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      HTML
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      CSS
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      React
                    </span>
                    <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                      Node.js
                    </span>
                  </p>
                </div>
                <ul class="flex mb-2">
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Live
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                    >
                      Code
                    </a>
                  </li>
                </ul>
                <p class="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus suscipit soluta at doloremque ipsa unde, doloribus
                  beatae delectus odio dolorum consequatur libero esse ratione
                  nostrum nihil quaerat alias cupiditate assumenda? Nesciunt
                  unde aliquid quam quisquam excepturi deserunt ipsa doloremque
                  culpa itaque. Esse consectetur odit est laboriosam facilis!
                  Accusamus inventore vel magni sed aliquid! Aspernatur dolores,
                  nam id fugit ad aliquam.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
              Work Experiences
            </h2>
            <ul class="mt-2">
              <li class="pt-2">
                <p class="flex justify-between text-sm">
                  <strong class="text-base">Company Name</strong>
                  2019-2021
                </p>
                <p class="flex justify-between text-base">
                  Job title<small>location</small>
                </p>
                <p class="text-justify text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, expedita exercitationem, cum quisquam laboriosam
                  voluptas aut libero officiis quae natus laborum explicabo,
                  labore nobis porro ad et soluta deleniti. Rerum? Voluptatibus
                  id officiis adipisci eligendi provident minima sed. Ullam
                  aliquid, fuga nisi modi amet quasi, quod veniam eos sit culpa
                  distinctio rem a tempora ad autem soluta rerum, doloremque
                  quas?
                </p>
              </li>
              <li class="pt-2">
                <p class="flex justify-between text-sm">
                  <strong class="text-base">Company Name</strong>
                  2014-2019
                </p>
                <p class="flex justify-between text-base">
                  Job title<small>location</small>
                </p>
                <p class="text-justify text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nemo fugiat neque tempore consectetur nihil alias
                  ullam esse corporis fugit deserunt maxime, numquam eos
                  repellendus, deleniti quae at fuga repudiandae! Perspiciatis
                  odit nobis sunt! Natus ea reiciendis enim! Itaque possimus
                  eaque perspiciatis architecto reiciendis laboriosam voluptas
                  corporis unde ducimus quis aliquid, distinctio dolorum quo
                  ullam a at, fugit veniam optio.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
            <ul class="mt-2">
              <li class="pt-2">
                <p class="flex justify-between text-sm">
                  <strong class="text-base">Hello Univerisity</strong>
                  2022-2019
                </p>
                <p class="flex justify-between text-sm">
                  Digital marketing<small>GPA 4.0</small>
                </p>
              </li>
              <li class="pt-2">
                <p class="flex justify-between text-sm">
                  <strong class="text-base">World Univerisity</strong>
                  2022-2019
                </p>
                <p class="flex justify-between text-sm">
                  Fashion Design<small>GPA 3.8</small>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
});

const ResumeTemplate = () => {
  return (
    <>
      <Template />
    </>
  );
};

export default ResumeTemplate;
