import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("second");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setemail("");
    setpassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 font-medium">What's your name</h3>

          <div className="flex gap-4 mb-5">
            <input
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              required
              type="text"
              placeholder="First Name"
              className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2text-base placeholder:text-sm"
            />
            <input
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
              className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-xl mb-2 font-medium">What's your email</h3>

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            type="email"
            placeholder="email@exapmle.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
          />

          <h3 className="text-xl mb-2 font-medium ">Enter Password</h3>

          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Sign Up
          </button>
          <p className="text-center ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs text-gray-400">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
