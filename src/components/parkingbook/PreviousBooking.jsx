import { useContext } from "react";
import UserContext from "../../Context/UserContext";

const PreviousBooking = () => {
  const { user } = useContext(UserContext);

  if (!user || !Array.isArray(user)) {
    return <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
    <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <p className="text-3xl font-semibold text-gray-800 mb-4">No previous bookings available</p>
        <p className="text-lg text-gray-600">Please check back later or make a new booking.</p>
    </div>
</div>

  }

  // Reverse the user array
  const reversedBookings = [...user].reverse();

  return (
    <div className="flex container flex-col justify-center items-center mx-20 mt-10 mb-20">
      <h2 className="text-3xl font-bold mb-10">
        Previous <span></span> Bookings
      </h2>
      {reversedBookings.map((booking, index) => (
        <div className="w-[700px] px-5 bg-orange-300 bg-opacity-50 shadow-lg rounded-md mb-4 py-5" key={index}>
          <div className="flex justify-between">
            <p>From: {booking.start}</p>
            <p>To: {booking.end}</p>
          </div>
          <p>
            Location: {booking.location},{booking.sublocation}
          </p>
          <p>Vehicle Type: {booking.vehicle}</p>
          <p>Amount Paid: {booking.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PreviousBooking;
