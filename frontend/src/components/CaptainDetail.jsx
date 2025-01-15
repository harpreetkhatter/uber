import React from 'react'

const CaptainDetail = () => {
  return (
    <div>  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start gap-3">
      <img className="h-10 w-10 rounded-full obejct-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRWrKekNd1jIzEO5T0f6waTicZyEazCIAww&s" alt="" />
      <h4 className="text-lg font-medium">Harsh Patel</h4>
    </div>
    <div>
      <h4 className="text-xl font-bold">&#8377; 295.20</h4>
      <p className="text-sm  text-gray-600">Earned</p>
    </div>
  </div>
  <div className="flex p-5 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start">
    <div className="text-center">
    <i className=" text-3xl font-normal ri-time-line mb-2"></i>
    <h5 className="text-lg font-medium">10.2</h5>
    <p className="text-sm text-gray-600">Hours Online</p>
    </div>
    <div className="text-center">
    <i className="ri-speed-up-line text-3xl font-normal mb-2"></i>
    <h5 className="text-lg font-medium">10.2</h5>
    <p className="text-sm text-gray-600">Hours Online</p>
    </div>
    <div className="text-center">
    <i className="ri-booklet-line text-3xl font-normal mb-2"></i>
    <h5 className="text-lg font-medium">10.2</h5>
    <p className="text-sm text-gray-600">Hours Online</p>
    </div>
  </div></div>
  )
}

export default CaptainDetail