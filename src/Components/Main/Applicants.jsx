import  { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Applicants = () => {
  const [data,setData]=useState([])
const {user}=useContext(AuthContext)
    useEffect(() => {
      
        fetch(`https://brta-server.vercel.app/applicants`)
          .then(res => res.json())
          .then(data => setData(data))
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      
    }, []);
    const [Udata,setUData]=useState('')

    useEffect(() => {
      if (user && user.email) {
        fetch(`https://brta-server.vercel.app/applicants/${user?.email}`)
          .then(res => res.json())
          .then(data => setUData(data))
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }
    }, [user]);
    const {role}=Udata
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US');
    };

  return (
<div className='my-5 '>
<div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center p-4 '>
    {data.filter(applicant => applicant.role !== 'admin').map(applicant => (
      <div key={applicant._id} className='w-[100%] lg:h-36 flex lg:flex-row flex-col justify-between my-8 p-4 bg-white rounded overflow-hidden shadow-lg '>
        <div>
        <img className='w-24 h-24 rounded-full object-cover' src={applicant.photo} alt={applicant.name} />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-lg mb-2'>Name: {applicant.name}</div>
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-lg mb-2'>Vehi No: {applicant.vehicle}</div>
        </div>
         <div className='px-6 py-4'>
         <div className='font-bold text-gray-700 text-lg mb-2'>Date: {formatDate(applicant.currentDate)}</div>
         </div>
      
         {user && role === 'admin' ? 
              <div className='px-6 py-4'>
                <Link to={`/viewdetail/${applicant._id}`}>
                  <div className='font-bold text-lg mb-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512" fill='red'>
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                  </div>
                </Link>
              </div>
             : ''}
        
      </div>
    ))}
  </div>
</div>
  )
}

export default Applicants