import React from "react";
import { Link } from "react-router-dom";

function TripList({ trips }) {
  return (
    <div className="px-8 py-4 flex flex-col space-y-4 rounded-custom shadow-lg">
      <h2 className="text-center text-[#FBFBEF] font-bold text-[28px] lg:text-[40px]">Your Trips</h2>
      {trips.length === 0 ? (
        <p className="text-center text-[#FBFBEF] text-[18px] lg:text-[30px] px-4">No trips planned yet. Add a new trip to get started!</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id} className="mb-2 hover:bg-[#151E41] rounded-lg text-[#FBFBEF]">
              <Link to={`/trip/${trip.id}`}>
                <h3 className="text-[24px] lg:text-[36px] pl-4 pt-2">{trip.destination}</h3>
                <p className="text-[16px] lg:text-[24px] pl-4 pb-2">
                  {trip.startDate} - {trip.endDate}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TripList;
