import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.WaitingForDriver(false);
        }}
        className="p-1 text-center w-[93%]  absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200 font-bold"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv9REvKUcX9pB-T1aZ3H8mTMxnVllxeZCUfPOBgKK3Q_TAPDp8-gP5VfGk_0faJygw-Y&usqp=CAU"
          alt=""
        />
        <div className="text-right
        ">
          <h2 className="text-lg font-medium ">Sarthak</h2>
          <h4 className="text-xl font-bold -mt-1 -mb-1">MPO04 AB 1234</h4>
          <p className="text-md text-gray-600">Maruti Suzuki Alto</p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
