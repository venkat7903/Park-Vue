import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
const DateSelector = () => {
    const [selectedDate,setSelectedDate] = useState(null)
    const [selectedendDate,setSelectedendDate] = useState(null)
    const handleDateChange =(date) =>{
        setSelectedDate(date)
    }
    const handleEndDate = (date) =>{
        setSelectedendDate(date)
    }
  return (
    <div className='flex px-9 space-x-3 mt-3'>
        <div className='flex flex-col'>
        <h1 className='font-bold text-lg'>Arriving on</h1>
        
        <DatePicker selected={selectedDate} 
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy; hh:mm"
            showTimeSelect
            timeIntervals={30}
            timeFormat='hh:mm'
            className='w-[300px] h-[40px] bg-gray-100 border border-gray-300'
        />

        </div>
        <div className='flex flex-col'>
        <h1 className='font-bold text-lg'>Leaving on</h1>
        <DatePicker selected={selectedendDate} 
            onChange={handleEndDate}
            dateFormat="MM/dd/yyyy; hh:mm"
            showTimeSelect
            timeIntervals={30}
            timeFormat='hh:mm'
            className='w-[300px] h-[40px] bg-gray-100 border border-gray-300'
        />

        </div>
        
      
    </div>
  )
}

export default DateSelector
