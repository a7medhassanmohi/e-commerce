import React, { useEffect } from "react";
import Slider from "./Slider";
import BestSeller from "./BestSeller";
import SectiontwoHome from "./SectiontwoHome";
import { useDispatch, useSelector } from "react-redux";
import { getNewproduct } from "../../redux/actions/product.action";
import MenSlider from "./menSlider";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewproduct());
  }, []);
  return (
    <div className="home">
      <Slider />
      <SectiontwoHome />
      <BestSeller />
      <MenSlider />
    </div>
  );
}

export default Home;
