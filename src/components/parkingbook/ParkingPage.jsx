import React, { useState } from "react";
import Dropdown from "../Dropdown";
import bg from "./newimg.jpg";
import ParkingFeatures from "./ParkingFeatures";
import DateSelector from "../DateSelector";
import { Link } from "react-router-dom";
import Bgimage from "../Bgimage";

const bg2 = "https://wallpaperaccess.com/full/4327493.jpg";
const ParkingPage = () => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const style2 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const locations = ["Kakinada", "Hyderabad", "Vijayawada", "Rajahmundry"];
  const vehicletypes = ["2 Wheeler", "4 Wheeler"];

  return (
    <div>
      <div className="h-screen w-screen relative  " style={style}>
        <div className="container flex flex-col flex-end ml-[600px] pt-[70px]">
          <h1 className="text-5xl font-bold text-white">Pick A location</h1>
          <p className="text-lg text-gray-400 mt-3">
            Book your slot in minutes
          </p>
          <p className="text-lg text-gray-400">
            Enjoy stress free booking with safe and secure parking
          </p>
          <div className="w-[700px] h-[450px] border bg-orange-100 mt-5 rounded-3xl ">
            <div className="h-[60px] bg-white font-bold text-center text-2xl">
              <h1 className="pt-2">Choose your location</h1>
            </div>
            <div className="px-10 mt-5">
              <h1 className="font-bold text-xl my-2">
                where do you wanna park at?
              </h1>
              <Dropdown heading="choose your city" elements={locations} />
              <h1 className="font-bold text-xl my-2">
                where do you wanna park at?
              </h1>

              <Dropdown heading="select vehicle type" elements={vehicletypes} />
            </div>
            <div>
              <DateSelector />
            </div>
            <button className="bg-orange-400 w-3/4 text-white font-bold text-lg mx-10 my-5">
              Book Your Slot
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[150px]">
        <ParkingFeatures />
      </div>

      <Bgimage
        Link1="hello"
        bg={bg}
        heading="Do You have a free Space?"
        text="Start earning up to 10,000/month from your unused parking space.
            Whether you’d like to rent your driveway during working hours or an
            underground space in an apartment block all month long, ParkingPal
            will help you find your perfect motorist."
        button="Rent Your Space"
      />
    </div>
  );
};

export default ParkingPage;
