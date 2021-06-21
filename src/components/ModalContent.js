import React, { forwardRef } from "react";
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";

const ModalContent = forwardRef((props, ref, ) => {
    
    var tl = gsap.timeline({delay: 4}), 
    mySplitText = new SplitText("#quote-e", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote-e", {perspective: 400});


tl.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50",  ease:"out", stagger: 0.01}, "+=0");


  return (
      
    <div className="modal-content-container" ref={ref}>
        <p id="quote-e" className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase">
          Telling the story of home in a place of __ambience
          </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p>
      <br></br>
    </div>
  );
});

export default ModalContent;
