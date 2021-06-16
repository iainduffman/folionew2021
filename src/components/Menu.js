import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

export const Menu = () => {
  return (
    <>
      <div className="flex mb-20 justify-between menu">
        <div className="mr-8 text-xl">
          <TransitionLink
            to="/"
            exit={{
              length: 1,
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
                length: 1,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              One
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/contact"
              exit={{
                length: 1,
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
                length: 1,
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
              to="/nextone"
              exit={{
                length: 1,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Four
            </TransitionLink>
          </div>
        </div>
      </div>
    </>
  );
};