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
          WELCOME TO THE HOME PAGee
          <div class="hide-images">
          {/* Last one */}
          <StaticImage src="../images/DSC02018-2.jpg" alt="A dinosaur" />
          <section className="default double mt-16 mb-16"><StaticImage src="../images/DSC02014-3.jpg" alt="A dinosaur" /></section>
          <section className="default double mt-16 mb-16"><StaticImage src="../images/DSC02024.jpg" alt="A dinosaur" /></section>
          <section className="default double mt-16 mb-16"><StaticImage src="../images/DSC02029.jpg" alt="A dinosaur" /></section>

          {/* Sikka */}
          <StaticImage src="../images/DSC01883.jpg" alt="A dinosaur" />

          <StaticImage src="../images/DSC01856-4.jpg" alt="A dinosaur" />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
