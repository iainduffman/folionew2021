import React, { forwardRef } from "react";

const ModalContent = forwardRef((props, ref, ) => {
    
  return (
      
    <div className="modal-content-container" ref={ref}>
        { console.log("Imin in to the last level!") }
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
