import React, { useEffect } from 'react';
import { Menu } from '../components/Menu';
import gsap from 'gsap';
import { StaticImage } from "gatsby-plugin-image";

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
          Placeholder Landing page. Click on one of the test case study links above... (Nav also placeholder to test content loading / display)
          <div class="hide-images">

          {/* First one */}
          <StaticImage src="../images/u2-op.jpg" alt="A dinosaur" />

          {/* Last one */}
          <StaticImage src="../images/DSC02018-2.jpg" alt="A dinosaur" />

          {/* Sikka */}
          <StaticImage src="../images/DSC01883.jpg" alt="A dinosaur" />

          {/* Beauty */}
          <StaticImage src="../images/bottle.jpg" alt="A dinosaur" />

          {/* UI */}
          <StaticImage src="../images/ui.jpg" alt="A dinosaur" />
          
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
