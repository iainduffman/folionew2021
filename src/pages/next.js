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
        backgroundColor: '#000000'
      })


      gsap.to('.description___', {
        duration: 0.8,
        delay: 1,
        ease: 'Power1.easeInOut',
        fontSize: '13px'
      })

      gsap.to('.description___', {
        duration: 0.8,
        delay: 1.2,
        ease: 'Power1.easeInOut',
        marginTop: '113px'
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
      <main className="container mx-auto px-2 md:px-0 text-white">
        <Menu className="text-white" />
        <div className="w-full h-full flex justify-center items-center realizzazioni">
          <div id="categories" className="w-full md:w-1/2 text-red-600">
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
              Creating
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
              new ways 
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
             of working
            </p>
            <p
              ref={(el) => (textRefs.current[3] = el)}
              className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase"
            >
              in a world
            </p>
            <p
              ref={(el) => (textRefs.current[4] = el)}
              className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
            >
              post covid.
            </p>
            <p ref={(el) => (textRefs.current[5] = el)} className="overflow-hidden description mt-8" >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
