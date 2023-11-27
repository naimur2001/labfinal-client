import React from 'react'

const Law = () => {
  const LawCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
  return (
    <div className='my-5'>
      <h1 className="font-semibold text-2xl text-center text-black">যানবাহন সংক্রান্ত আইন</h1>
      <div className="container mx-auto mt-8 p-6 ">
      <h2 className="text-2xl font-semibold mb-6 text-black">Transport Laws</h2>

      <LawCard
        title="Seat Belt Regulations"
        description="It is mandatory for all occupants of a vehicle to fasten their seat belts while the vehicle is in motion. Failure to comply with this regulation may result in fines and penalties."
      />

      <LawCard
        title="Speed Limits"
        description="Adhere to posted speed limits on roads and highways. Exceeding the speed limit is a violation that can lead to fines, license points, and potential legal consequences."
      />

      <LawCard
        title="Drunk Driving Laws"
        description="Driving under the influence of alcohol or drugs is strictly prohibited. Offenders may face severe penalties, including license suspension, fines, and imprisonment."
      />

      <LawCard
        title="Traffic Signal Violations"
        description="Disregarding traffic signals, such as running red lights or ignoring stop signs, is a serious offense. Penalties may include fines, points on your license, and mandatory traffic school."
      />

      <LawCard
        title="Cell Phone Use While Driving"
        description="Using a mobile phone without a hands-free device while driving may result in fines and points on your license. It's crucial to prioritize safety and avoid distractions while operating a vehicle."
      />

      <LawCard
        title="Vehicle Registration Violations"
        description="Ensure your vehicle is properly registered and displays a valid license plate. Failure to comply may lead to fines, vehicle impoundment, and other legal consequences."
      />

     
      
    </div>
    </div>
  )
}

export default Law