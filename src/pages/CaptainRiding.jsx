import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"
import FinishRiding from "./FinishRiding"
function CaptainRiding() {

   const [completeRide , setCompleteRide] = useState(true)
   const [finishRiding , setFinishRiding] = useState(false)
   
    function handleComplete() {
         setCompleteRide(false)
         setFinishRiding(true)
    }

   return (
     <>
    <div>

            <img className="z-10 object-cover w-20 fixed top-0 left-0" src="https://imgs.search.brave.com/pTgj08asbbPZa7mluuj8W9DLU05lUE-Sbclbtqqwxdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0yOTk2MzAu/cG5n" />

            <img className="fixed top-0 h-screen w-full" src="https://imgs.search.brave.com/A9FGg0apJw5tFxYaTVZR3XNGO-SbZK-IiQwKcfRzWi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzI4LzMwLzI2/LzM2MF9GXzcyODMw/MjYyMF9YZGRuZjVD/bDBLMUFDWnVyZDZ5/QnlVekhpSE1NSW9l/Ni5qcGc" />


            <Link to="/" className="w-10 h-10 flex items-center justify-center fixed top-3 right-2">
              <img className="rounded-full" src="https://imgs.search.brave.com/Yn9W1t8bPGVnS1ckmMv9EwuzKF04zF3tk4DRwdHAlPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy93aGl0/ZS1ob21lLWljb24t/cG5nL3doaXRlLWhv/bWUtaWNvbi1wbmct/MS5qcGc" />
            </Link>


            <div className={`${completeRide ? "block" : "hidden"}`} >
                <div className="absolute bottom-0 bg-yellow-400 w-full p-5" >
                
                  <div className="flex gap-4 items-center justify-between" >
                    <p className="text-xl font-semibold" >4km Away</p>
                    <button onClick={handleComplete}   className="text-lg text-white bg-green-600 rounded-lg py-3  px-3 font-bold" >Complete Ride</button>
                  </div>
               
                </div>
            </div>


            <div className={`${finishRiding ? "block" : "hidden"}`} >
              <FinishRiding/>
            </div>

     </div>
      
     </>
   )
}
export default CaptainRiding