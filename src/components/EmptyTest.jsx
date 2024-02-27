import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Slider from "./slider/Slider";
import SliderCard from "./slider/SliderCard";

const EmptyTest = () => {
  return (
    <div>
      <div className="p-5">
        <h1>Hello</h1>
        <Slider />
        <SliderCard />
      </div>
    </div>
  );
};

export default EmptyTest;
