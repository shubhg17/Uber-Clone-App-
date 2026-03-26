import React  from "react"
import {Link} from "react-router-dom"
const UserLogin = ()=> {
    return (
       <>
          <div className="p-7 h-screen flex flex-col justify-between ">
              <div>
                <img className="w-14 mx-2 mb-8" src="https://imgs.search.brave.com/YtWSEtm6RhzgJ5YpX-wq89QeqU7iPhfVbqpEEgQnsP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVp/ajVxZFNIRnpKMnBp/UFJ1b1RMNUYuanBn" />
             <form>
                 <h3 className="text-xl px-4 mb-4" >What's your email</h3>
                 <input
                   required
                   type="email"
                   placeholder="email@example.com"
                   className="bg-slate-200 rounded px-5 py-2 w-full text-lg placeholder:text-base"
                  />
                 <h3 className="text-xl px-4 mb-4 mt-4" >Enter Password</h3>
                 <input
                    type="password"
                    placeholder="password"
                    className="w-full border bg-slate-200 px-5 py-2 rounded mb-4"
                 />
                 <button className="bg-black text-white w-full mt-4 rounded py-2 font-bold mb-4" >Login</button>

                 <p className="text-center">New Here?<Link to="/signup" className="text-blue-600" >Create New Account</Link></p>
             </form>
              </div>
              <div>
                 <button className="bg-green-500 text-white w-full mt-4 rounded py-2 font-bold" >Sign in as Captain</button>
              </div>
          </div>
       </>
    )
}
export default UserLogin