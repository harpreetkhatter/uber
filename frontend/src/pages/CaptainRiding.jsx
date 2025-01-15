import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false)
  
  const finishRidePanelRef = useRef(null)

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen relative">
      
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain/logout"
          className=" h-10 w-10 flex items-center justify-center rounded-full bg-white"
        >
          <i className="ri-logout-box-r-line text-2xl font-bold"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-[#f5da59] relative" onClick={()=>{
        setfinishRidePanel(true)
      }}>
      
      <h5
        onClick={() => {
          
        }}
        className="p-1 text-center w-[83%] absolute top-0 "
      >
        <i className="ri-arrow-up-wide-line text-3xl text-gray-800 font-bold "></i>
      </h5>
        <h4 className="text-xl  font-semibold">4 KM away</h4>
        <button className="  bg-green-600 text-white font-semibold text-lg p-3 px-10 rounded-lg ">Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 px-3 py-6 pt-12 bg-white w-full  "
      >
        <FinishRide setfinishRidePanel={setfinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
