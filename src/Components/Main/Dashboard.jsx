import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [applicantLength, setApplicantLength] = useState(null);
  const [subemailLength, setSubemailLength] = useState(null);
  useEffect(() => {
    // Fetch the length of the "applicant" collection
    fetch('https://brta-server.vercel.app/applicantLength')
      .then(response => response.json())
      .then(data => setApplicantLength(data.length))
      .catch(error => console.error('Error fetching applicant length:', error));

    // Fetch the length of the "subemail" collection
    fetch('https://brta-server.vercel.app/subemailLength')
      .then(response => response.json())
      .then(data => setSubemailLength(data.length))
      .catch(error => console.error('Error fetching subemail length:', error));
  }, []); 
  return (
    <div className='my-5'>
      <h1 className="font-semibold text-2xl text-center text-black">Dashboard</h1>
 <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Applicant Length */}
        <div className="bg-blue-500 text-white p-8 rounded-md shadow-md">
          <div className="text-2xl font-bold mb-4">Total Applicant</div>
          <div className="text-4xl">{applicantLength}</div>
          <p className="mt-4">Total number of applicants in the system.</p>
        </div>

        {/* Card 2: Subemail Length */}
        <div className="bg-green-500 text-white p-8 rounded-md shadow-md">
          <div className="text-2xl font-bold mb-4">Total Subcribed Email</div>
          <div className="text-4xl">{subemailLength}</div>
          <p className="mt-4">Number of subscribers for email notifications.</p>
        </div>

        {/* Card 3: Feature 1 - Custom Content */}
        <div className="bg-purple-500 text-white p-8 rounded-md shadow-md">
          <div className="text-2xl font-bold mb-4">Feature 1</div>
          <p className="mb-4">Details about a specific feature.</p>
          <ul className="list-disc pl-6">
            <li>Subfeature 1: Additional information about the feature.</li>
            <li>Subfeature 2: Any relevant data or statistics.</li>
          </ul>
        </div>

        {/* Card 4: Feature 2 - Custom Content */}
        <div className="bg-orange-600 text-white p-8 rounded-md shadow-md">
          <div className="text-2xl font-bold mb-4">Feature 2</div>
          <p className="mb-4">Details about another feature.</p>
          <ul className="list-disc pl-6">
            <li>Subfeature 1: Additional information about this feature.</li>
            <li>Subfeature 2: Any relevant data or statistics.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard