import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setconfirmedRidePanel(false);
        }}
        className="p-1 text-center w-[93%]  absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200 font-bold"></i>
      </h5>
      <h3 className="text-3xl font-semibold ">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-28"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv9REvKUcX9pB-T1aZ3H8mTMxnVllxeZCUfPOBgKK3Q_TAPDp8-gP5VfGk_0faJygw-Y&usqp=CAU"
          alt=""
        />
        <div className="w-full mt-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-xl font-medium">562,11-A</h3>
              <p className="text-md text-gray-600">Kankarliya Talaab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-xl font-medium">562,11-A</h3>
              <p className="text-md text-gray-600">Kankarliya Talaab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-fill text-lg"></i>
            <div>
              <h3 className="text-xl font-medium">&#8377; 193.20</h3>
              <p className="text-md text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          props.setvehicleFound(true)
          props.setconfirmedRidePanel(false)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold text-lg p-2 rounded-lg ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
