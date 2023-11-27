import React from 'react'

const About = () => {
  return (
    <div className='my-5 text-black'>
      <h1 className="font-semibold text-2xl text-center text-black">বিস্তারিত জানুন</h1>
      <div className="container mx-auto mt-8 p-6 ">
      <h2 className="text-2xl font-semibold mb-6">About Bangladesh Road Transport Authority (BRTA)</h2>

      <p className="text-gray-700 mb-6">
        The Bangladesh Road Transport Authority (BRTA) is committed to ensuring safe and efficient transportation for
        all citizens. Established with a mission to regulate and streamline the transport sector, our vision is to create
        a modern and sustainable transportation system that meets the needs of the growing population.
      </p>

      <p className="text-gray-700 mb-6">
        Key Functions:
      </p>

      <ul className="list-disc pl-8 mb-6">
        <li>Issuance and renewal of drivers licenses</li>
        <li>Vehicle registration and inspection</li>
        <li>Enforcement of traffic rules and regulations</li>
        <li>Public awareness campaigns for road safety</li>
      </ul>

      <p className="text-gray-700 mb-6">
        Contact Information:
      </p>

      <div className="flex flex-col md:flex-row mb-6">
        <div className="md:w-1/2 pr-4">
          <p className="text-gray-700 mb-2">Hotline: <span className="font-semibold">12345</span></p>
          <p className="text-gray-700 mb-2">Helpline: <span className="font-semibold">info@brta.gov.bd</span></p>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-2">Address:</p>
          <p className="text-gray-700 mb-2">Bangladesh Road Transport Authority</p>
          <p className="text-gray-700">Dhaka, Bangladesh</p>
        </div>
      </div>

    
      
    </div>
    </div>
  )
}

export default About