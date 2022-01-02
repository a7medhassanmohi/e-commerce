import React from "react";
import { useState, useRef } from "react";

function AddtionInfo({ productItem }) {
  const [isOpen, setisOpen] = useState(true);
  const accordioncontent = useRef(null);
  const accordionwrap = useRef(null);
  const openAcordion = (e) => {
    let height = accordioncontent.current.getBoundingClientRect().height;
    if (isOpen) {
      accordionwrap.current.style.height = `${height}px`;
      setisOpen(false);
    } else {
      accordionwrap.current.style.height = `0`;
      setisOpen(true);
    }
  };
  return (
    <div className="addtion_info" onClick={openAcordion}>
      <h5>ADDITIONAL INFORMATION</h5>
      <div className="wrap" ref={accordionwrap}>
        <div className="content" ref={accordioncontent}>
          <div className="item">
            <h6>Color:</h6>
            <p> {productItem?.color}</p>
          </div>
          <div className="item">
            <h6>Size:</h6>
            <p>{productItem?.size}</p>
          </div>
          <div className="item">
            <h6>Material:</h6>
            <p> 100% Polyester</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddtionInfo;
