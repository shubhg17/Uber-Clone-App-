import React from "react"
//we are using react router dom to introduce routing in our project 
// use npm install react-router-dom after doing this then go into main.jsx and wrap ur app component with browserrouter to perform routing in ur project 

import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
function App() {
   return(
     <>
        <Routes>
          {/* //mtlb jabh path / hoga then konsa element render hoga iska mtlb yeh hota hain */}
            <Route path="/" element={<Home/>} />
            <Route path="/login" element = {<UserLogin/>} />
            <Route path="/signup" element = {<UserSignUp/>} />
            <Route path="/captainlogin" element = {<CaptainLogin/>} />
          <Route path="/captainsignup" element = {<CaptainSignup/>} />  
        </Routes>
     </>
   )
}

export default App

