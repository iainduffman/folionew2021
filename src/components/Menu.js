import React from 'react';
import Cursor from '../components/Cursor';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';

export const Menu = () => {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked!!!!');
    gsap.to(".menuContainer", {width: 0, duration: 0.5});
    gsap.to(".overlay", {opacity: '0', duration: 0.3});
    gsap.to(".menuContents", {opacity: '0', duration: 0.3});
    gsap.set(".menuContainer", {opacity: '0', delay: 0.6});
    gsap.set(".menuContainer", {zIndex: '999'});
  }

  
  function handleClickOpen(e) {
    e.preventDefault();
    console.log('The link was clicked!!!!');
    gsap.set(".menuContainer", {opacity: '1'});
    gsap.to(".menuContainer", {width: '100%', duration: 0.8});
    gsap.to(".overlay", {opacity: '0.8', duration: 0.3});
    gsap.to(".menuContents", {opacity: '0.8', duration: 0.3});
    gsap.set(".menuContainer", {zIndex: '99999'});
  }

  return (
    <>

      <div className="menuContainer">
      <Cursor />
      <div className="menuContents">
        <span className="text-white" onClick={handleClick}>Items here XYZ</span>
      </div>
      </div>

      <div className="flex mb-20 justify-between menu">
      <div className="mr-8 text-md uppercase">
            <a href="#" onClick={handleClickOpen}>
              Open Menu
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
