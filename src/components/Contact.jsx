import image3 from "../asset/3dObject3.png";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="relative flex items-center justify-center m-52">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={image3} alt="bg object" className="w-[30rem] h-[30rem] animate-floating" />
      </div>

      {/* Contact Card */}
      <div className="relative bg-[#153851]/70 backdrop-blur-md p-16 px-28 py-16 rounded-lg shadow-lg max-w-3xl text-center z-10">
        <h1 className="text-5xl font-bold mb-6">Let's Get in Touch</h1>
        <p className="text-lg mb-8">
          Whether you have a question, a project idea, or just <br /> want to say hi — I'd love to hear from you!
        </p>
        <div className="flex justify-center gap-8 text-4xl mt-6">
          <a
            href="mailto:mayuriok09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-500 ease-in-out text-white"
          >
            <LuMail />
          </a>
          <a
            href="https://www.linkedin.com/in/mayuri-k-a53628261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-500 ease-in-out text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/codergrl-Mayuri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-500 ease-in-out text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;