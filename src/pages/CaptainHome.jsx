//this would be captain home page when he will create his account or login his account
import React from "react"
import {Link} from "react-router-dom"
function CaptainHome() {
   return (
     <>
      <div>
            <div>

              <img className="z-10 object-cover w-20 fixed top-0 left-0" src="https://imgs.search.brave.com/pTgj08asbbPZa7mluuj8W9DLU05lUE-Sbclbtqqwxdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0yOTk2MzAu/cG5n" /> 

              <img className="fixed top-0 h-screen w-full" src="https://imgs.search.brave.com/A9FGg0apJw5tFxYaTVZR3XNGO-SbZK-IiQwKcfRzWi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzI4LzMwLzI2/LzM2MF9GXzcyODMw/MjYyMF9YZGRuZjVD/bDBLMUFDWnVyZDZ5/QnlVekhpSE1NSW9l/Ni5qcGc" />

              
          <Link to="/" className="w-10 h-10 flex items-center justify-center fixed top-3 right-2">
                 <img className="rounded-full"  src="https://imgs.search.brave.com/Yn9W1t8bPGVnS1ckmMv9EwuzKF04zF3tk4DRwdHAlPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy93aGl0/ZS1ob21lLWljb24t/cG5nL3doaXRlLWhv/bWUtaWNvbi1wbmct/MS5qcGc" />
          </Link>

              <div className="p-4 bg-white absolute bottom-0 w-full">
                  <div className="flex justify-between  border-b-2 mb-2">
                      
                      <img  className="mb-4 mr-2 w-16 bg-slate-400 rounded-full" src="https://imgs.search.brave.com/14GrzEJRCOFMRPy3SpJ3QysRSMNyD4C8lDogfyfW4lA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIyMDkxMC9vdXJt/aWQvcG5ndHJlZS1k/cml2ZXItbWFuLXBu/Zy1pbWFnZV82MTQ0/Nzk5LnBuZw" />
                      <p className="font-semibold mr-40" >Harsh Patel</p>

                        <div className="font-semibold mb-4  " >
                            <p>$340</p>
                            <p className="text-slate-500" >Earned</p>
                        </div>
                  </div>   
              <div>
 

                      <div className="flex items-center justify-center p-10 gap-10 bg-slate-100 rounded-xl" >
                            <div>
                              <img className="w-10" src="https://imgs.search.brave.com/WbRzcdwEB_3238WWO6ybcsbgjxBYpx8h-2amLx3Cb5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NjMxLzQzMy9zbWFs/bC90aW1lci1pY29u/LXN5bWJvbC1kZXNp/Z24taWxsdXN0cmF0/aW9uLXZlY3Rvci5q/cGc" />
                              <p className="font-semibold text-xl" >10.2</p>
                              <p className="text-slate-500" >Hours Online</p>
                            </div>

                            <div>
                              <img className="w-10" src="https://imgs.search.brave.com/WbRzcdwEB_3238WWO6ybcsbgjxBYpx8h-2amLx3Cb5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NjMxLzQzMy9zbWFs/bC90aW1lci1pY29u/LXN5bWJvbC1kZXNp/Z24taWxsdXN0cmF0/aW9uLXZlY3Rvci5q/cGc" />
                              <p className="font-semibold text-xl" >10.2</p>
                              <p className="text-slate-500 " >Hours Online</p>
                            </div>

                            <div>
                              <img className="w-10" src="https://imgs.search.brave.com/WbRzcdwEB_3238WWO6ybcsbgjxBYpx8h-2amLx3Cb5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NjMxLzQzMy9zbWFs/bC90aW1lci1pY29u/LXN5bWJvbC1kZXNp/Z24taWxsdXN0cmF0/aW9uLXZlY3Rvci5q/cGc" />
                              <p className="font-semibold text-xl" >10.2</p>
                              <p className="text-slate-500" >Hours Online</p>
                            </div>
                      </div>

                
                </div>
                  
         </div>

          </div>
      </div>
     </>
   )
}
export default CaptainHome