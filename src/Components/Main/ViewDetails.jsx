import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {

const data=useLoaderData()

const {name,email,nid,presentAddress,permanentAddress,photo,chess,vehicle,currentDate}=data

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
};

  return (
    <div className='my-5'>
        <div className="container mx-auto mt-10">
      <div className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded-md">
        <h2 className="text-3xl font-bold mb-4">{name}s Details</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src={photo} alt={name} className="w-full h-auto rounded-md" />
          </div>
          <div>
            <p className="text-lg mb-2"><span className="font-bold">Email:</span> {email}</p>
            <p className="text-lg mb-2"><span className="font-bold">NID:</span> {nid}</p>
            <p className="text-lg mb-2"><span className="font-bold">Present Address:</span> {presentAddress}</p>
            <p className="text-lg mb-2"><span className="font-bold">Permanent Address:</span> {permanentAddress}</p>
            <p className="text-lg mb-2"><span className="font-bold">Chess:</span> {chess}</p>
            <p className="text-lg mb-2"><span className="font-bold">Vehicle:</span> {vehicle}</p>
            <p className="text-lg mb-2"><span className="font-bold">Date:</span>{formatDate(currentDate)}</p> 
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewDetails