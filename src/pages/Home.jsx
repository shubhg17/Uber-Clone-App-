import React from "react"
import {Link} from "react-router-dom"
function Home() {
   return (
     <> 
     {/* //bg-cover as image badi hoti hai toh iss se cover hojayegi div jitni  */}
      <div className="bg-cover  bg-[url(https://imgs.search.brave.com/7-UerUF5kc0851e7ReKKLbY61zt6n0IGbcYjCUzjePU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/ODU2LzczMi9zbWFs/bC91YmVyLXllbGxv/dy10YXhpLWNhYnMt/YXQtbmlnaHQtYmx1/cnJ5LWNpdHlzY2Fw/ZS1tb3Njb3ctMjUt/bm92LTIwMjEtcGhv/dG8uanBn)] h-screen w-full pt-8 flex flex-col justify-between" >
         <img className="w-14 ml-8"  src="https://imgs.search.brave.com/mKrWVMewBreF9pQsYQb6CNwKY_QpHBtNjC6AkK_DlO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRpbmcuZGNhc3Nl/dGNkbi5jb20vYmxv/Zy8yMDE4L1NlcHRl/bWJlci9VYmVyLVdv/cmRtYXJrL0RJX1Vi/ZXItV29yZG1hcmtf/QmFubmVyXzgyOHgz/MDAuanBn" />
          <div className="py-4 px-4 bg-white">
              <h2 className="text-3xl font-bold mb-4 " >Get Started With Uber</h2>
              {/* //abh hume kya krna hain ki jabh hum button pe click kre toh tum userlogin wale page pe chle jao so hum iss button ko ek link tag bana denge but iss se styling kharab hojayegi as link tag ek inline block element ha so flex use kro aur items center krlo  */}
               <Link to="/login"  className="bg-black flex items-center justify-center text-white px-5 text-xl rounded w-full mb-4 py-5 " >Continue</Link>
          </div>
      </div>
     </>
   )
}
export default Home