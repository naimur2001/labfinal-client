import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/Main/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='' >
   <AuthProvider>
   <React.StrictMode>
<RouterProvider router={router}>

</RouterProvider>
</React.StrictMode>
   </AuthProvider>
 </div>
 
  ,
)
