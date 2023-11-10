import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header>
        <nav class="bg-white  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-4">
            <a class="logo" href="#">
              <h3 class="font-bold text-2xl">LOGO</h3>
            </a>
            <input type="checkbox" id="check" />

            <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>

              <label for="check" class="close-menu">
                <AiOutlineClose />
              </label>
            </span>

            <label for="check" class="open-menu">
              <GiHamburgerMenu size={25} />
            </label>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
