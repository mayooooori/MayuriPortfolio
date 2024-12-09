import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";
import image1 from "../asset/3dObject1.png";
import image2 from "../asset/3dObject2.png";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTranslateY = (factor) => {
    const maxTranslateY = 150;
    return Math.min(scrollY / factor, maxTranslateY);
  };

  return (
    <div id="home" className=" pt-5 relative top-[150px]">
      <div className="flex flex-col gap-28">
        <div
          className="relative"
          style={{
            transform: `translateY(-${getTranslateY(5)}px)`,
          }}
        >
          <img
            src={image1}
            alt="bg object"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-floating"
          />
        </div>
        <div
          className="relative"
          style={{
            transform: `translateY(-${getTranslateY(7)}px)`,
          }}
        >
          <img
            src={image2}
            alt="bg object"
            className="absolute right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-floating"
          />
        </div>
      </div>

      <div
        className="absolute inset-6 flex items-center justify-center"
        style={{ top: "-175px" }}
      >
        <div className="px-4 sm:px-7 md:px-14 lg:px-32 backdrop-blur-md bg-[#153851]/70 p-6 sm:p-10 rounded-md text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-4">
            Shaping Ideas into
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-7">
            Functional Art
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 sm:mt-20 mb-5 sm:mb-10">
            Frontend Developer | React Specialist | <br /> UI/UX Enthusiast
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 justify-center">
            <Link
              to="works"
              smooth={true}
              duration={500}
              className="bg-[#265A7F] px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#387FB1] hover:scale-105 transform transition-transform duration-300 ease-in-out"
            >
              Go to Works
              <FaLongArrowAltRight />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[#265A7F] px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#387FB1] hover:scale-105 transform transition-transform duration-300 ease-in-out"
            >
              Contact Me
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
