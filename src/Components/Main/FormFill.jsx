import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"


const FormFill = () => {
const {createUser}=useContext(AuthContext)

const location=useLocation();
const navigate=useNavigate();
const from=location?.state?.from?.pathname || '/'

const handleSubmit=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const pass=form.pass.value;
  const nid=parseInt(form.nid.value, 10);
  const presentAddress=form.presentAddress.value;
  const permanentAddress=form.permanentAddress.value;
  const photo=form.photo.value;
  const chess=parseInt(form.chess.value, 10);
  const vehicle=parseInt(form.vehicle.value, 10);
  const currentDate = new Date();
  const role=''


  createUser(email,pass)
  .then(result=>{
    result;
    const formInfo={name,email,nid,presentAddress,permanentAddress,photo,chess,vehicle,currentDate,role}
    fetch('https://brta-server.vercel.app/applicants',{
  method:"POST",
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify(formInfo)
})
.then(res=>res.json())
.then(data=>{
  if (data.insertedId) {
    form.reset();
    Swal.fire({
      position:'center',
      icon:"success",
      title: 'Form FilledUp',
      timer: 1000
    })
  }
  navigate(from)
})

  })
}


  return (
    <div className="my-5">
      <h1 className="font-semibold text-2xl text-center text-black">ফরম ফিলাপ করুন</h1>
     <div className="lg:w-[80%] w-[100%] mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Fill Up The Form</h2>
      <form onSubmit={handleSubmit}>
   <div className="  grid lg:grid-cols-2 grid-cols-1 gap-5">
         {/* ...other form fields */}
         <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        {/* ...other form fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        {/* ...other form fields */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="Password"
            id="pass"
            name="pass"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        {/* ...other form fields */}
        <div className="mb-4">
          <label htmlFor="nid" className="block text-sm font-medium text-gray-600">
            Nid No
          </label>
          <input
            type="text"
            id="nid"
            name="nid"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        
              {/* ... other form fields */}
              <div className="mb-4">
          <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-600">
            Present Address
          </label>
          <textarea
            id="presentAddress"
            name="presentAddress"
       
          
            rows="3"
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          ></textarea>
        </div>
        {/* ... other form fields */}
        <div className="mb-4">
          <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-600">
            Permanent Address
          </label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
       
          
            rows="3"
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          ></textarea>
        </div>
           {/* ... other form fields */}
           <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-600">
            Passport Size Photo link
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
         
       
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        {/* ...other form fields */}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
           Chess No
          </label>
          <input
            type="text"
            id="chess"
            name="chess"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>
        {/* ...other form fields */}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
           Vehicle No
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
       
          
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>

       
     
  
   </div>
        {/* ... other form fields */}
        <div className="mt-6 flex justify-center items-center">
          <button type="submit" className="w-96 bg-blue-500 text-white p-3 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div> 
    </div>
  )
}

export default FormFill