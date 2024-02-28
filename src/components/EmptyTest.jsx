import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Slider from "./slider/Slider";
import SliderCard from "./slider/SliderCard";
import DateSelector from "./DateSelector";

const EmptyTest = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md relative">
        {/* Top cuts */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 w-4 h-4 rounded-full"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 w-4 h-4 rounded-full"></div>

        <h1 className="text-3xl font-semibold mb-4">Parking Slot Ticket</h1>
        <div className="border-b-2 border-gray-300 pb-2 mb-4">
          <p className="text-lg">Date: February 28, 2024</p>
          <p className="text-lg">Time Slot: 2:00 PM - 4:00 PM</p>
          <p className="text-lg">Location: Parking Lot A</p>
          <p className="text-lg">Slot Number: A-05</p>
        </div>
        <div>
          <p className="text-lg mb-2">Total Price: $5</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Confirm Booking
          </button>
        </div>

        {/* Bottom cuts */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-400 w-4 h-4 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-400 w-4 h-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default EmptyTest;
