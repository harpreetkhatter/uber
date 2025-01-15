import React from "react";

const RidePopup = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setridePopupPanel(false)
        }}
        className="p-1 text-center w-[93%]  absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200 font-bold"></i>
      </h5>
      <h3 className="text-3xl font-semibold ">New Ride Available!</h3>

      <div className="flex items-center justify-between p-3 bg-[#f5da59] rounded-lg mt-6">
        <div className="flex items-center gap-3 ">
          <img className="h-12 rounded-full object-cover w-12" src="https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=" alt="" />
          <h2 className="text-xl font-medium">Harshika Patel</h2>
        </div>
        <h5 className="text-xl font-semibold ">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
       
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
        <div className="mt-5 w-full flex items-center justify-between">
        <button
          onClick={() => {
            props.setridePopupPanel(false)
          }}
          className="  bg-gray-300 text-gay-700 font-semibold text-lg p-3 px-10 rounded-lg "
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setconfirmRidePopupPanel(true)
          }}
          className="  bg-green-600 text-white font-semibold text-lg p-3 px-10 rounded-lg "
        >
          Accept
        </button>
      
        </div>
       
      </div>
    </div>
  );
};

export default RidePopup;
