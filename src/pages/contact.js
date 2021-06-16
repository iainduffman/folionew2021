import React, { useEffect, useRef } from 'react';
import { Menu } from '../components/Menu';
import gsap from 'gsap';

const About = ({ transitionStatus }) => {
  let textRefs = useRef([]);
  const textfly = (textRefs, direction) => {
    let even = [];
    let odd = [];
    textRefs.forEach((idx, i) => {
      if (i % 2 === 0) {
        even.push(idx);
      } else {
        odd.push(idx);
      }
    });
    if (direction === 1) {
      gsap.from(even, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 0.05,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
        },
      });

      gsap.from(odd, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 0.09,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
        },
      });

      gsap.to(document.body, {
        duration: 0.8,
        ease: 'Power1.easeInOut',
        backgroundColor: '#ffffff'
      })
    }
    if (direction === -1) {
      gsap.to(even, {
        duration: 0.3,
        y: -100 * direction,
        opacity: 0,
        delay: 0,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 0.3,
        y: -100 * direction,
        opacity: 0,
        delay: 0,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.5,
        },
      });
    }
  };

  useEffect(() => {
    textfly(textRefs.current, 1);
  }, []);
  useEffect(() => {
    if (transitionStatus === 'exiting') {
      textfly(textRefs.current, -1);
    }
  }, [transitionStatus]);
  return (
    <>
      <main className="container mx-auto px-2 md:px-0">
        <Menu />
        <div className="w-full h-full flex justify-center items-center realizzazioni">
          <div id="categories" className="w-full md:w-1/2">
          <p
              ref={(el) => (textRefs.current[0] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
              Finding
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
              A new
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="text-red-600 font-black list-none text-6xl md:text-6xl lg:text-8xl relative overflow-hidden uppercase transform phrase"
            >
              juncture
            </p>
            <p
              ref={(el) => (textRefs.current[3] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
            >
              at
            </p>
            <p
              ref={(el) => (textRefs.current[4] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
            >
              Vogue UK
            </p>
            <p ref={(el) => (textRefs.current[5] = el)} className="overflow-hidden mt-8" >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            <br></br><br></br>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            <br></br><br></br>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam</p>

            
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
