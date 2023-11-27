import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'


const Nav = () => {
const {user,logOut}=useContext(AuthContext)

// getting data from database
const [data,setData]=useState('')

useEffect(() => {
  if (user && user.email) {
    fetch(`http://localhost:5000/applicants/${user?.email}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
}, [user]);

const {role}=data
// console.log(role)

// signout function
const handleSignOut = ()=>{
  // logout from authprovider
logOut()
.then(result=>{
console.log(result)
    })
    .catch(error=>{
      console.log(error);
    })
}
  const navElement=[
    //links for routing 
    <>
    <li>
      <Link  to={'/'} >Home</Link>
    </li>
    {
      !user ? <li>
      <Link  to={'/formfill'} >Form</Link>
    </li> : ''
    }
    <li>
      <Link  to={'/law'} >Transport Law</Link>
    </li>
    <li>
      <Link  to={'/about'} >About Us</Link>
    </li>
    
    {user && role=='admin' ?
   <>
    <li>
      <Link to={"/dashboard"}>Dashboard</Link>
      </li>
       </> : '' }
 
    {user ?
   <>
    <li>
      <Link to={"/applicant"}>Applicants</Link>
      </li>
      <li onClick={handleSignOut} >
        <Link>LogOut</Link>
      </li> </> : <li>
      <Link  to={'/login'} >LogIn</Link>
    </li> }
 
   
    </>
  ]

  return (
    <div>
  <div className="navbar font-semibold font-fancy">
  <div className="justify-center w-[50%]">
    {/* this element is for responsive menu */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navElement}
      </ul>
    </div>
    <Link to={'/'} ><span className='font-mono font-extrabold text-2xl text-slate-800' >BRTA</span></Link>
    
   
  </div>   
   {/* this element is for web view  */}

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navElement}
    </ul>
  </div>

</div>
    </div>
  )
}

export default Nav