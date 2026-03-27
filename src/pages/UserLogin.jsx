import React  from "react"
import {Link} from "react-router-dom"
import {useState} from "react"
const UserLogin = ()=> {

 // abh hum perform krenge two way binding as joh hum data de rhe ha usse kahi nah kahi toh save karake dena hi hoga as object joh data hum email aur pass me de rhe hain as react ko pta chle ki hum kya kr rhe hain isliye abh hum hooks ka use krenge 

   const [email , setEmail] = useState("")
   const [password , setPassword] = useState("")
 // we created this state to store our userdata
   const [userdata , setuserdata] = useState({})

   const submitHandler =  (e)=> {
      //agar prevent default nhi kroge toh page reload hojayega aur pta nhi chlega ki kaha gya so preventdefault ka use krenge 
       e.preventDefault()
      //  console.log(email , password)
       setuserdata({
         //keys me kuch bhi askta ha yeh bas naam hain 
          email:email,
          password:password
       })
      //  console.log(userdata)
       //jabh from submit hogya toh email aur password wale input ko khali kardo
       setEmail("")
       setPassword("")
   }

    return (
       <>
       {/* //to apply justify-between add h-screen for vertical and for horizontal use w-full  */}
          <div className="p-7 h-screen flex flex-col justify-between ">
              <div>
                     <img className="w-14 mx-2 mb-8" src="https://imgs.search.brave.com/YtWSEtm6RhzgJ5YpX-wq89QeqU7iPhfVbqpEEgQnsP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVp/ajVxZFNIRnpKMnBp/UFJ1b1RMNUYuanBn" />
               
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

                     <p className="text-center">New Here?<Link to="/signup" className="text-blue-600" >Create New Account</Link></p>
                  </form>
              </div>
              <div>
                 <Link to="/captainlogin" className="bg-green-500 flex items-center justify-center text-white w-full mt-4 rounded py-2 font-bold" >Sign in as Captain</Link>
              </div>
          </div>
       </>
    )
}
export default UserLogin