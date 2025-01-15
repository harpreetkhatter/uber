import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
  const [otp, setotp] = useState("")
  const submitHandler= (e)=>{
    e.preventDeault()
  }
  return (
    <div >
      <h5
        onClick={() => {
          props.setconfirmRidePopupPanel(false)
        }}
        className="p-1 text-center w-[93%]  absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200 font-bold"></i>
      </h5>
      <h3 className="text-3xl font-semibold ">Confirm this ride to start</h3>

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
        
        <div className='mt-4 w-full '>
        <form action="" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input value={otp}
          onChange={()=>{
            setotp(e.target.value)
          }} type="Number" placeholder='Enter OTP' className="bg-[#eee] px-6 py-4 text-xl rounded-lg w-full mt-3 font-mono"/>
          <Link to="/captain-riding"
          onClick={() => {
            
          }}
          className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold text-lg p-3 rounded-lg "
        >
          Confirm
        </Link>
        <button
          onClick={() => {
            props.setconfirmRidePopupPanel(false)
            props.setridePopupPanel(false)
          }}
          className="w-full mt-2 bg-red-500 text-white font-semibold text-lg p-3 rounded-lg  "
        >
          Cancel
        </button>
        </form>
        
        </div>
       
      </div>
    </div>
  )
}

export default ConfirmRidePopup