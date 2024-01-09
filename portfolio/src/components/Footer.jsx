import React from "react";
import { footerLinks } from "../constants/footconsts";

const Footer = () => {
  return (
    <footer className="p-10 static bottom-0 bg-black">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-start-2 col-3 w-64">
          <h1 className="text-3xl font-bold text-left">Contact Me</h1>
        </div>
        <div className="col-start-7 mx-3">
          <ul>
            <li className="text-2xl mx-4 text-left">Social</li>
            {footerLinks.map((foot, index) => (
              <li key={`${foot.id}`} className="flex items-center m-4 w-32">
                <a className="text-white" href={`${foot.url}`}>
                  {foot.title}
                </a>
                <img
                  className="object-contain h-8 ml-auto"
                  src={foot.src}
                  alt={foot.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="grid grid-cols-9 mt-5 text-left">
        <div className="col-start-2 col-span-2">
          <p>
            © 2024 Kevin Xiao <br /> Made with &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
