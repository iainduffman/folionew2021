import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import ModalContent from "./ModalContent";


const Modal = props => {
    let modalVeil = null;
    let modalDialog = null;
    let modalContent = null;
  
    const [modalTween] = useState(gsap.timeline({ paused: true }));
  
    useEffect(() => {
      modalTween
        .to(modalDialog, 1, { width: '100%' })
        .from(modalContent.children, 0.35, { opacity: 1, stagger: 0.1 }, "-=0.15")
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
        <div
          className="modal-veil"
          ref={e => (modalVeil = e)}
          onClick={closeModal, console.log('Im in the dom...')}
          
        />
        <div onClick={closeModal} className="modal-dialog" ref={e => (modalDialog = e)}>
          <ModalContent ref={e => (modalContent = e)} />
          <p onClick={closeModal} className="closethis">CLOSE THIS</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
  