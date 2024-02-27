import React, { useState } from 'react';

const Dropdown = (props) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle the change in selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div >
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
      >
        <option value="">{props.heading}</option>
        {props.elements.map((element,index) => (
            <option key={index} value={element}>{element}</option>
        ))}
      </select>
      {selectedOption && (
        <p className="mt-2">Selected option: {selectedOption}</p>
      )}
    </div>
  );
};

export default Dropdown;