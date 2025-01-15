import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "./VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panleCloseRef = useRef(null);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmedRidePanel, setconfirmedRidePanel] = useState(false);
  const confirmedRidePanelRef = useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForDriver, setwaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 24,
        });
        gsap.to(panleCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
        });
        gsap.to(panleCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );
  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image temorary */}
        <img
          className="h-full w-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panleCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-1 right-6 text-3xl opacity-0"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-14 w-1 top-[50%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 "
              type="text"
              placeholder="Enter your location"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanelOpen={setvehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0  px-3 py-10 pt-12 bg-white w-full translate-y-full "
      >
        <VehiclePanel
          setconfirmedRidePanel={setconfirmedRidePanel}
          setvehiclePanelOpen={setvehiclePanelOpen}
        />
      </div>

      <div
        ref={confirmedRidePanelRef}
        className="fixed z-10 bottom-0  px-3 py-6 pt-12 bg-white w-full translate-y-full "
      >
        <ConfirmedRide
          setconfirmedRidePanel={setconfirmedRidePanel}
          setvehicleFound={setvehicleFound}
        />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0  px-3 py-6 pt-12 bg-white w-full translate-y-full ">
        <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0  px-3 py-6 pt-12 bg-white w-full translate-y-full ">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
