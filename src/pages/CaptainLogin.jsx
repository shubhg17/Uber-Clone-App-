import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"

function CaptainLogin() {

     // abh hum perform krenge two way binding as joh hum data de rhe ha usse kahi nah kahi toh save karake dena hi hoga as object joh data hum email aur pass me de rhe hain as react ko pta chle ki hum kya kr rhe hain isliye abh hum hooks ka use krenge 
    
       const [email , setEmail] = useState("")
       const [password , setPassword] = useState("")
     // we created this state to store our userdata
       const [captaindata , setcaptaindata] = useState({})
    
       const submitHandler =  (e)=> {
           e.preventDefault()
          //  console.log(email , password)
           //jabh from submit hogya toh email aur password wale input ko khali kardo
           setuserdata({
              email:email,
              password:password
           })
           console.log(captaindata)
           setEmail("")
           setPassword("")
       }

   return (
     <>
        {/* //to apply justify-between add h-screen for vertical and for horizontal use w-full  */}
          <div className="p-7 h-screen flex flex-col justify-between ">
              <div>
                     <img className="w-20  mb-8" src="https://imgs.search.brave.com/5qOrxTo-36NuK1RIyaWDLXjOoamQarfvHGwGx8NhyYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0FW/U251azRFZ0VhWjJr/bXBnaVMyU2ouanBn" />
               
               {/* //onsubmit on form means ki form jabh submit hoga toh kya hoga  */}
                  <form onSubmit={(e)=> {
                       submitHandler(e)
                  }} >
                     <h3 className="text-xl px-4 mb-4" >What's your email</h3>
                     <input
                        required
                        value={email}
                        onChange = {(e)=>setEmail(e.target.value)}
                        type="email"
                        placeholder="email@example.com"
                        className="bg-slate-200 rounded px-5 py-2 w-full text-lg placeholder:text-base"
                        />
                     <h3 className="text-xl px-4 mb-4 mt-4" >Enter Password</h3>
                     <input
                        type="password"
                        value = {password}
                        onChange = {(e)=>setPassword(e.target.value)}
                        placeholder="password"
                        className="w-full border bg-slate-200 px-5 py-2 rounded mb-4"
                     />
                     <button className="bg-black text-white w-full mt-4 rounded py-2 font-bold mb-4" >Login</button>

                     <p className="text-center">Join a Fleet?<Link to="/captainsignup" className="text-blue-600" >Register as a Captain</Link></p>
                  </form>
              </div>
              <div>
                 <Link to="/login" className="bg-red-500 flex items-center justify-center text-white w-full mt-4 rounded py-2 font-bold" >Sign in as User</Link>
              </div>
          </div>
     </>
   )
}
export default CaptainLogin