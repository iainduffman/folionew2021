import React, { useEffect } from 'react';
import { Menu } from '../components/Menu';
import gsap from 'gsap';

// markup
const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to('.hometex', {
      autoAlpha: 1,
      duration: 1,
    });
  }, []);
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.hometex', {
        autoAlpha: 1,
        duration: 1,
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.hometex', { autoAlpha: 0, duration: 1 });
    }
  }, [transitionStatus]);
  return (
    <>
      <main className="container mx-auto px-2 md:px-0">
        <Menu />
        <div className="text-3xl w-full mx-auto justify-center flex font-bold hometex opacity-0">
          WELCOME TO THE HOME PAGE
        </div>
      </main>
    </>
  );
};

export default IndexPage;
