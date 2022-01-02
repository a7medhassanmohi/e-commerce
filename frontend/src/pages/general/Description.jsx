import React from "react";
import { useState, useRef } from "react";

function Description({ productItem }) {
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
    <div className="description" onClick={openAcordion}>
      <h5>Descripton</h5>
      <div className="wrap" ref={accordionwrap}>
        <div className="content" ref={accordioncontent}>
          <p>{productItem?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
