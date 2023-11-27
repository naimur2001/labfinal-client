import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  const { signIn } = useContext(AuthContext)
  
  const location=useLocation();
  const navigate=useNavigate();
  const from=location?.state?.from?.pathname || '/'
  const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result=>{
      const loggedUser =result.user;
        Swal.fire({
          position:'center',
          icon:"success",
          title: 'Login successful',
          timer: 1000
        })
    

form.reset();
      navigate(from)
    })
    .catch(error=>{
     
console.log(error)
    })

  }

  return (
    <div className="my-5">
       <h1 className="font-semibold text-2xl text-center text-black">লগ ইন করুন</h1>
      <div className="container mx-auto mt-8 p-6 bg-white rounded shadow-md max-w-md">
      <h2 className="text-2xl text-black font-semibold mb-6">Please Log In</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
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

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
           
           
            className="mt-1 p-2 w-full border border-black rounded-md"
            required
          />
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">
            Log In
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
