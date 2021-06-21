import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import Cursor from '../components/Cursor';
import ModalContent from "./ModalContent";
import {AnimateMenu} from "./ModalContent";
import {Playhim} from "./ModalContent";





const Modal = props => {
    let modalVeil = null;
    let modalDialog = null;
    let modalContent = null;
  
    const [modalTween] = useState(gsap.timeline({ paused: true }));
  
    useEffect(() => {
      modalTween
        .to(modalVeil, 1, { width: '100%', ease: "power2.inOut", onComplete: Playhim })
        .to(modalDialog, 1, { opacity: 1, delay: 0 }, "-=0.15")
        .reverse()
        modalTween.eventCallback("onUpdate", Playhim);

    },
    
    []);
  
    useEffect(() => {
      modalTween.reversed(!props.visible);
    }, [props.visible]);
  
    const closeModal = () => {
      modalTween.reverse();
      gsap.delayedCall(modalTween.duration(), props.close);
      console.log('I was triggered...to clsoe...');
      Playhim()
    };

  
    return (

      <div className={`modal-container${props.visible ? " show" : ""}`}>
        <div onClick={closeModal}
          className="modal-veil"
          ref={e => (modalVeil = e)}
          
        />
        <Cursor />
        <div onClick={closeModal} className="modal-dialog" ref={e => (modalDialog = e)}>
          <ModalContent ref={e => (modalContent = e)} />
        </div>
      </div>
    );
  };
  
  export default Modal;
  