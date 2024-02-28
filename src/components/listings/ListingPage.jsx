import React, { useState } from 'react';

const ListingPage = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className='container'>
      <h1 className='font-bold text-3xl text-center'>Post your Location</h1>
      <input 
        className="block w-full border border-gray-300 focus- rounded-md p-2 mt-2"
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your location..." 
      />
    </div>
  );
}

export default ListingPage;
