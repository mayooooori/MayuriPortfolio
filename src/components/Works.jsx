import React, { useRef, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../asset/seva-website.png";
import project2 from "../asset/food-recipe-generation.png";
import project3 from "../asset/purview-website.png";

const Works = () => {
  const worksRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const Projects = [
    { id: "1", title: "Seva Website", image: project1, link: "#" },
    { id: "2", title: "Purview Website", image: project3, link: "#" },
    { id: "3", title: "Food Recipe Generation", image: project2, link: "#" },
  ];

  useEffect(() => {
    const ref = worksRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div id="works" className="m-4 p-4 md:m-10 md:p-10 relative">
      <h1
        ref={worksRef}
        className={`text-4xl md:text-7xl mb-6 md:mb-10 p-4 md:p-10 transition-all duration-1000 text-center ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        Works
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-10 justify-center mt-6">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-full md:w-[370px] h-[500px] backdrop-blur-lg bg-[#387FB1]/30 rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-500 ease-in-out relative"
          >
            <div className="w-full h-[70%] rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl md:text-2xl mb-3">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 transition-colors duration-300"
              >
                Visit <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
