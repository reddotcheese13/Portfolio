"use client";
import React, { useState } from "react";
import Pagination from "./Pagination"; // Adjust the path based on your project structure

function Projects() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projectsList = [
    {
      title: "Portfolio",
      description:
        "This serves as my portfolio, providing a showcase of my skills and the projects I've undertaken",
      modalDescription:
        "This portfolio serves as a showcase of my skills and projects, highlighting my work developed with Next.js, React, and Tailwind CSS.",
      image: "/images/hero-image.png",
      projectUrl: "https://quiet-frangipane-396d15.netlify.app/",
    },
    {
      title: "ToDo Application",
      description:
        "This Project is for Planning out tasks by adding tasks in todo",
      modalDescription: "This Todo uses React and bootstrap",
      image: "/images/todo.png",
      projectUrl: "https://resonant-mousse-4498d1.netlify.app/",
    },
    {
      title: "Portfolio",
      description:
        "This serves as my portfolio, providing a showcase of my skills and the projects I've undertaken",
      modalDescription:
        "This portfolio serves as a showcase of my skills and projects, highlighting my work developed with Next.js, React, and Tailwind CSS.",
      image: "/images/hero-image.png",
      projectUrl: "https://quiet-frangipane-396d15.netlify.app/",
    },
    {
      title: "ToDo Application",
      description:
        "This Project is for Planning out tasks by adding tasks in todo",
      modalDescription: "This Todo uses React and bootstrap",
      image: "/images/todo.png",
      projectUrl: "https://resonant-mousse-4498d1.netlify.app/",
    },
    // Add more projects as needed
  ];

  const [currentProject, setCurrentProject] = useState(null);

  const toggleModal = (project) => {
    setCurrentProject(project);
    setModalVisible(!isModalVisible);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalProjects = projectsList.length;
  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProjects = projectsList.slice(
    firstProjectIndex,
    lastProjectIndex
  );

  return (
    <div className="flex flex-wrap gap-6">
      <h2 className="mt-8 text-4xl text-white font-bold">Projects</h2>
      <div className="flex flex-wrap w-full">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8 ml-20"
          >
            <a href="#">
              <img className="rounded-t-lg" src={project.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              {/* Modal toggle */}
              <button
                onClick={() => toggleModal(project)}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Read more..
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalProjects / projectsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      {/* Main modal */}
      {isModalVisible && currentProject && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full"
        >
          <div className="relative p-4 max-w-full max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentProject.title}
                </h3>
                <button
                  onClick={() => toggleModal(null)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {currentProject.modalDescription}
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => {
                    toggleModal(null);
                    window.open(currentProject.projectUrl, "_blank"); // '_blank' opens the link in a new tab
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Open
                </button>

                <button
                  onClick={() => toggleModal(null)}
                  type="button"
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
