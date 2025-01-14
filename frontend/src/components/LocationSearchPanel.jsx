import React from "react";

const LocationSearchPanel = (props) => {
  //sample array for location
  const location = [
    "Sector 5, Railway Station Road ,Gurugram",
    "Sector 6, MG Road Metro ,Gurugram",
    "Sector 7, HUda City Mtero ,Gurugram",
    "Sector 8, Sikandarpur Metro ,Gurugram",
  ];
  return (
    <div>
      {location.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setvehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex border-2 border-gray-50 active:border-black  p-3 rounded-xl items-center justify-start gap-4 my-2"
          >
            <h2 className="bg-[#eee] h-10 w-14 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-2-fill text-lg"></i>
            </h2>

            <h2 className="text-lg font-medium">{elem}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
