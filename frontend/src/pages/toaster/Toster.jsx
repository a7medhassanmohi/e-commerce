import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./toster.scss";

import { AiOutlineCloseCircle } from "react-icons/ai";
function Toster({ color, mess }) {
  const [classtoster, setclasstoster] = useState(true);
  const auth = useSelector((state) => state.auth);

  return (
    <div className={classtoster}>
      <div className="content">
        <h4 style={{ color: color }}>{mess}</h4>
        {/* <AiOutlineCloseCircle onClick={() => setopentoster(!opentoster)} /> */}
      </div>
    </div>
  );
}

export default Toster;
