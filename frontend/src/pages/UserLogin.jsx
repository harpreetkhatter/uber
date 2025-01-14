import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";


const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("second");
  

  const navigate = useNavigate();
  const { user, setuser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/login`,userData)

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("token",data.token)
      setuser(data.user);
      navigate("/home");
    }

    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-2xl mb-2 font-medium">What's your email</h3>

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            type="email"
            placeholder="email@exapmle.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />

          <h3 className="text-2xl mb-2 font-medium ">Enter Password</h3>

          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center ">
            New here?{" "}
            <Link to="/signup" className="text-blue-600 ">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#ffc35b] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
