import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"
function UserSignUp() {
   const [firstname , setFirstName] = useState("")
   const [lastname , setLastName] = useState("")
   const [email , setEmail] = useState("")
   const [password , setPassword] = useState("")
   const [userdata , setuserdata] = useState({})

   const submitHandler = (e)=> {
       e.preventDefault()
       setuserdata({
        //  firstname:firstname,
        //  lastname:lastname,
        //u can also put this first and last name into a single object
         fullName: {
           firstname:firstname,
           lastname:lastname
         },
         email:email,
         pass:password
       })
       console.log(userdata)
       setFirstName("")
       setLastName("")
       setEmail("")
       setPassword("")
   }

   return (
     <>
         <div className="p-7 h-screen flex flex-col justify-between ">
              <div>
                     <img className="w-14 mx-2 mb-8" src="https://imgs.search.brave.com/YtWSEtm6RhzgJ5YpX-wq89QeqU7iPhfVbqpEEgQnsP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVp/ajVxZFNIRnpKMnBp/UFJ1b1RMNUYuanBn" />
               
               {/* //onsubmit on form means ki form jabh submit hoga toh kya hoga  */}
                  <form onSubmit={(e)=> {
                       submitHandler(e)
                  }} >

                   <h3 className="text-xl px-4 mb-4" >What's your name</h3>
                   <div className="flex gap-4 mb-2" >
                        <input
                        required
                        value = {firstname}
                        onChange = {(e)=>setFirstName(e.target.value)}
                        type="text"
                        placeholder="First Name"
                        className="bg-slate-200 rounded px-5 py-2 w-1/2 text-lg placeholder:text-base"
                        />

                        <input
                        required
                        value = {lastname}
                        onChange = {(e)=>setLastName(e.target.value)}
                        type="text"
                        placeholder="Last Name"
                        className="bg-slate-200 rounded px-5 py-2 w-1/2 text-lg placeholder:text-base"
                        />
                   </div>

                     <h3 className="text-xl px-4 mb-4" >What's your email</h3>
                     <input
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        placeholder="email@example.com"
                        className="bg-slate-200 rounded px-5 py-2 w-full text-lg placeholder:text-base"
                        />
                     <h3 className="text-xl px-4 mb-4 mt-4" >Enter Password</h3>
                     <input
                        type="password"
                        value={password}
                        onChange = {(e)=>setPassword(e.target.value)}
                        placeholder="password"
                        className="w-full border bg-slate-200 px-5 py-2 rounded mb-4"
                     />
                     <button className="bg-black text-white w-full mt-4 rounded py-2 font-bold mb-4" >Login</button>

                     <p className="text-center">Already have a account?<Link to="/login" className="text-blue-600" >Login Here</Link></p>
                  </form>
              </div>
              <div>
                 <p className="text-xs leading-normal" >By proceeding you consent to get calls, WhatsApp or SMS messages , including by automated means from Uber and its affiliates to the number provided</p>
              </div>
          </div>
     </>
   )
}
export default UserSignUp