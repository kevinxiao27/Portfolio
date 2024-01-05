import React from "react";
import { footerLinks } from "../constants/footconsts";

const Footer = () => {
  return (
    <footer class="mt-12 p-10 static bottom-0 bg-black">
      <div class="grid grid-cols-9 gap-4">
        <div class="col-start-2 col-3 w-64">
          <h1 class="text-3xl font-bold text-left">Contact Me</h1>
        </div>
        <div class="col-start-7 mx-3">
          <ul>
            <li class="text-2xl mx-4 text-left">Social</li>
            {footerLinks.map((foot, index) => (
              <li key={`${foot.id}`} class="flex items-center m-4 w-32">
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
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="grid grid-cols-9 mt-5 text-left">
        <div class="col-start-2 col-span-2">
          <p>© 2024 Kevin Xiao.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
