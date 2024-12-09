// About.js
import React, { useRef, useEffect, useState } from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaDocker } from "react-icons/fa";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const skillCard = [
    { id: '1', title: 'React', image: <FaReact /> },
    { id: '2', title: 'JavaScript', image: <IoLogoJavascript /> },
    { id: '3', title: 'Tailwind', image: <RiTailwindCssFill /> },
    { id: '4', title: 'TypeScript', image: <SiTypescript /> },
    { id: '5', title: 'Next.js', image: <TbBrandNextjs /> },
    { id: '6', title: 'Redux', image: <SiRedux /> },
    { id: '7', title: 'Node.js', image: <FaNodeJs /> },
    { id: '8', title: 'Docker', image: <FaDocker /> },
  ];

  useEffect(() => {
    const ref = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div id="about" className="m-10 mb-2 relative pt-[9rem]">
      <h1
        ref={aboutRef}
        className={`text-7xl mb-10 transition-all duration-1000 text-center ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        About
      </h1>

      <p
        className={`text-xl max-w-4xl mx-auto mt-12 mb-12 leading-relaxed text-center tracking-wide transition-all duration-1000 ${
          isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        With expertise in Web Development, I specialize in building robust, user-focused applications. 
        I have hands-on experience working in a startup, contributing to a successful product launch, 
        delivering impactful solutions. I also integrate machine learning to enhance functionality 
        and create innovative user experiences.
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 transition-all duration-1000 ${
          isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {skillCard.map((eachCard) => (
          <div key={eachCard.id} className="flex flex-col items-center p-5">
            <div className="backdrop-blur-lg bg-[#387FB1]/30 p-6 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="text-6xl mb-3">{eachCard.image}</div>
            </div>
            <h3 className="text-xl p-2 mt-4 text-center">{eachCard.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
