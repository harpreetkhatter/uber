import React ,{useRef, useState}from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";


const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)
  const [confirmRidePopupPanel, setconfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5  p-6">
        <CaptainDetail />
      </div>
      <div ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 px-3 py-6 pt-12 bg-white w-full  "
      >
        <RidePopup setridePopupPanel={setridePopupPanel} setconfirmRidePopupPanel={setconfirmRidePopupPanel}/>
      </div>
      <div ref={confirmRidePopupPanelRef}
        className="fixed z-10 bottom-0 px-3 py-6 pt-12 bg-white w-full h-screen "
      >
        <ConfirmRidePopup setconfirmRidePopupPanel={setconfirmRidePopupPanel}  setridePopupPanel={setridePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
