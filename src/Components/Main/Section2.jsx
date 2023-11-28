import React from 'react'

const Section2 = () => {
  const    vehicleFees= [
    {
      type: 'Motorcycle',
      fee: 'BDT 500',
      img: "https://img.freepik.com/free-vector/illustration-motorcycle-red-color_1308-35859.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
    {
      type: 'Car',
      fee: 'BDT 1,000',
      img:"https://img.freepik.com/free-vector/hand-drawn-muscle-car-illustration_23-2149432254.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
    {
      type: 'Truck',
      fee: 'BDT 2,000',
      img:"https://img.freepik.com/free-vector/hand-drawn-transport-truck_23-2149145940.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
    {
      type: 'Bus',
      fee: 'BDT 1,500',
      img:"https://img.freepik.com/free-vector/school-bus_1284-7400.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
    {
      type: 'Rickshaw',
      fee: 'BDT 300',
      img:"https://img.freepik.com/free-vector/flat-design-indian-man-with-vehicle_23-2149757871.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
    {
      type: 'CNG Auto Rickshaw',
      fee: 'BDT 500',
      img:"https://img.freepik.com/free-vector/flat-design-indian-man-driving-van_23-2149757883.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph"
    },
  ]
  return (
    <div className='my-5'>
        <div className="my-5 text-center font-mono">
 
        <h2 className="text-4xl font-extrabold mb-8 mt-14">Vehicle And Fees</h2>

      </div>
  <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mt-8 p-4">
      {vehicleFees.map((fee) => (
        <div
          key={fee.type}
          className="bg-white p-4 rounded-md shadow-md flex items-center justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-100"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">{fee.type}</h3>
            <p className="text-gray-600">{fee.fee}</p>
          </div>
          <div className="flex-shrink-0 ml-4 ">
            <img
              src={fee.img}
              alt={fee.type}
              className="rounded-full w-28 h-28"
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Section2