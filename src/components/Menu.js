import React, { useState, useEffect } from "react";
import Cursor from '../components/Cursor';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";

export const Menu = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  return (
    
    <>

      <div id="menuWrapper" className="menuContainer">
      <Cursor />
      <div className="menuContents" className="flex h-screen">
        <span className="text-white close"></span>

        <div id="menu-items" className="m-auto text-left ml-40">
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700">Biography</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-red-700">Case Studies</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700">Resume</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700">Contact</p>
        
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Close</p>
        </div>
      </div>
      </div>

      <div className="flex mb-20 justify-between menu">
      <div className="mr-8 text-md uppercase">
            <a href="#">
              Open Menus
            </a>
          </div>


        <div className="mr-8 text-xl">
          <TransitionLink
            to="/"
            exit={{
              length: 2,
            }}
            entry={{ length: 1 }}
            className="hover:text-gray-600"
          >
            Logo Placehold
          </TransitionLink>
        </div>
        <div className="flex">
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/about"
              exit={{
                length: 2,
              }}
              entry={{ length: 1 }}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Onee
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/contact"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Two
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/next"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Three
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/last"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Five
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
            rel="prefetch"
              to="/lastone"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Six
            </TransitionLink>
          </div>
        </div>
      </div>
    </>
  );
};
