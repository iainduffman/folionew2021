import React, { forwardRef } from "react";
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";

const ModalContent = forwardRef((props, ref, ) => {
    
    if (typeof document !== 'undefined') {

    var tl = gsap.timeline({delay: 0.5}), 
    mySplitText = new SplitText("#menu-items", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#menu-items", {perspective: 400});


tl.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50",  ease:"out", stagger: 0.01}, "+=0");


  return (
    
    <div className="modal-content-container m-auto" ref={ref}>

        <div id="menu-items" className="m-auto text-left ml-40">
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700">Biography</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-red-700">Case Studies</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700">Resume</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700">Contact</p>
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Close</p>
        </div>
    </div>
  );
}
});

export default ModalContent;