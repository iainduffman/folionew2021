import React, { useEffect, useRef } from 'react';
import { Menu } from '../components/Menu';
import Cursor from '../components/Cursor';
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
        delay: 0.9,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
        },
      });

      gsap.from(odd, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 1.04,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
        },
        

      });

      gsap.to(document.body, {
        duration: 0.8,
        ease: 'Power1.easeInOut',
        backgroundColor: '#000000'
      })
    }
    if (direction === -1) {
      gsap.to(even, {
        duration: 0.8,
        y: 80 * direction,
        opacity: 0,
        delay: 0,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 0.8,
        y: 80 * direction,
        opacity: 0,
        delay: 0.1,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.1,
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
      
      <main className="container mx-auto px-2 md:px-0 text-white">
        <Menu />
        <div className="w-full h-full flex justify-center items-center realizzazioni">
          <div id="categories" className="w-full md:w-1/2 text-yellow-600">
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
            >
              Omni channel
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
            >
              for the
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-extra-black relative overflow-hidden uppercase transform phrase"
            >
              discerning
            </p>
            <p
              ref={(el) => (textRefs.current[3] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-extra-black relative overflow-hidden uppercase transform phrase"
            >
              customer
            </p>
            <p
              ref={(el) => (textRefs.current[4] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-extra-black text-white relative overflow-hidden uppercase transform phrase"
            >
              archetype.
            </p>
            <p ref={(el) => (textRefs.current[5] = el)} className="overflow-hidden mt-16 text-gray-400" >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          </div>
        </div>
      </main>
      <Cursor />
    </>
  );
};
export default About;
