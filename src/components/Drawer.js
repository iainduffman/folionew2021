import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import Cursor from '../components/Cursor';
import ModalContent from "./ModalContent";


const Modal = props => {
    let modalVeil = null;
    let modalDialog = null;
    let modalContent = null;
  
    const [modalTween] = useState(gsap.timeline({ paused: true }));
  
    useEffect(() => {
      modalTween
        .to(modalVeil, 1, { width: '100%', ease: "power2.inOut" })
        .to(modalDialog, 1, { opacity: 1, delay: 0 }, "-=0.15")
        .reverse();
    }, []);
  
    useEffect(() => {
      modalTween.reversed(!props.visible);
    }, [props.visible]);
  
    const closeModal = () => {
      modalTween.reverse();
      gsap.delayedCall(modalTween.duration(), props.close);
    };

  
    return (

      <div className={`modal-container${props.visible ? " show" : ""}`}>
        <div onClick={closeModal}
          className="modal-veil flex h-screen"
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
  