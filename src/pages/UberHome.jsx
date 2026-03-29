import React from "react"
import {useState , useRef} from "react"
//useGSAP basically its a hook joh hume gsap provide krta hain gsap ek animation ki library hain jiski maddat se aap thode bhot moving animations perform kr skte hain hum panel ko upar lane ke liye iska hi use krne wale hain and aur bhi cheezo mein 
import {useGSAP} from "@gsap/react" 
import gsap from "gsap"
import LocationSearchPanel from "../components/LocationSearchPanel"
import ConfirmRide from "../components/ConfirmRide"
function UberHome() {
    const [pickup , setPickup] = useState("")
    const [destination , setDestination] = useState("")
    //state for panel opening or closing
    const [panelOpen , setPanelOpen] = useState(false)
    //created this state to get reference of that div which will come when panelisopen so thats why we created this
     const panelRef = useRef(null)
     //created this ref to take reference of image of close icon as we need to manage its opacity and with some animations 
     const panelCloseRef = useRef(null)

     const vehiclePanelRef = useRef(null)
 

     // state for choose a vehicle div
     const [vehiclePanelOpen , setVehiclePanelOpen] = useState(false);

     //state for choose a find a trip div
     const [findtrip , setFindTrip] = useState(true);

     //state for confirm ride div
     const [confirmRide , setConfirmRide] = useState(false)

    const submitHandler = (e)=> {
       e.preventDefault();
    }
 
    //isme bhi ek callback function dena hota hain u can also arrow function also aur dusra tume isme dena hota hain dependency array 
    useGSAP(function() {
         if(panelOpen) {
            //this is syntax to select on which u need to apply 
             gsap.to(panelRef.current , {
             height:"70%"
             })
             gsap.to(panelCloseRef.current , {
                opacity:1
             })
         }
         else {
             gsap.to(panelRef.current , {
                height:"0%"
             })
             gsap.to(panelCloseRef.current , {
                opacity:0
             })
         }
    } , [panelOpen]) // yeh dependent ha ki panelOpen hain ya close hain uspe dependent hain yeh tabh chlega 


   //   useGSAP(function() {

   //       if(vehiclePanelOpen) {
   //             gsap.to(vehiclePanelRef.current , {
                   
   //             })
   //       }
   //       else {
   //             gsap.to(vehiclePanelRef.current , {
             
   //              })
   //       }
           
   //   } ,[vehiclePanelOpen])


     const handleLocationSelect = ()=> {
          setPanelOpen(false);
          setVehiclePanelOpen(true);
          setFindTrip(false)
     }

     const handleCloseVehicle = ()=> {
           setVehiclePanelOpen(false);
           setFindTrip(true)
     }

     const handleConfirmRide = ()=> {
          setVehiclePanelOpen(false);
          setConfirmRide(true);
     }


   return (
     <> 
 {/* relative (parent hota hai) 👉 absolute (child hota hai) ->  Absolute hamesha apne nearest relative parent ke hisaab se position leta hai 
 Agar kisi element ko:kisi ke upar chipkana hai exact corner me rakhna hai toh:parent → relative  child → absolute
 */}

        <div className="h-screen relative w-full flex flex-col justify-between" >
           <img className="w-12 absolute left-5 top-5 " src="https://imgs.search.brave.com/mKrWVMewBreF9pQsYQb6CNwKY_QpHBtNjC6AkK_DlO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRpbmcuZGNhc3Nl/dGNkbi5jb20vYmxv/Zy8yMDE4L1NlcHRl/bWJlci9VYmVyLVdv/cmRtYXJrL0RJX1Vi/ZXItV29yZG1hcmtf/QmFubmVyXzgyOHgz/MDAuanBn" />
            
           <div className="h-screen w-screen" >
            {/* //image for temporary use */}
              <img className="w-full object-cover h-screen" src="https://imgs.search.brave.com/5j6yiRyQPCX3_QPhLVGD9DcZIOKLTGjVQaD0Ma4ltKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDgz/MjYwOTMzL3ZlY3Rv/ci9pc29tZXRyaWMt/dHJhZmZpYy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YzBQ/MXJaTlVqRWRSY1g2/WnBoYnc4REt6N1Vp/X3dmTE9iVFViOTZF/aHZKVT0" />
           </div>

           {/* //feautre jabh hum click kre trips wale placeholder me toh voh upar ajaye */}

          <div className="flex flex-col justify-end h-screen top-0 absolute w-full " >
             <div className={`h-[30%] p-5 bg-white relative ${findtrip? "block":"hidden"}`}>
                  <img ref={panelCloseRef} onClick={()=>setPanelOpen(false)} className="w-8 absolute right-3 top-7" src="https://imgs.search.brave.com/p_hdfw6nNGokVc2eVoq_xhtSveK03jg4PsElqkkrkO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/MTg5LzExMS9zbWFs/bC9kb3duLXJvdW5k/LWFycm93LWljb24t/dmVjdG9yLmpwZw" />
                  <h4 className="text-3xl font-bold mb-2" >Find a Trip</h4>
                  <form onSubmit={(e)=> {
                      submitHandler(e)
                  }}  >
                     <div className="line h-16 w-1 absolute left-10 top-[45%] rounded-full bg-slate-900" ></div>
                     <input
                     onClick={()=>setPanelOpen(true)}
                     value={pickup}
                     onChange={(e)=>setPickup(e.target.value)}
                     type="text"
                     placeholder="Add a pick-up location"
                     className="border border-black bg-slate-100 w-full text-lg placeholder:text-base  font-semibold rounded-lg px-8 py-2 mb-4 "
                  />
                     <input
                     onClick = {()=>setPanelOpen(true)}
                     value = {destination}
                     onChange={(e)=>setDestination(e.target.value)}
                     type="text"
                     placeholder="Enter your destination"
                     className="border border-black bg-slate-100 w-full text-lg placeholder:text-base font-semibold rounded-lg px-8 py-2 "
                  />
                  </form>
             </div>
              <div ref={panelRef} className="bg-white h-0 overflow-hidden " >
                    <div className="p-8">
                    <LocationSearchPanel onSelect = {handleLocationSelect} />  
                    </div>
              </div>
          </div>




          <div ref={vehiclePanelRef}  className={`p-2   absolute bottom-0 w-full bg-white ${vehiclePanelOpen?"block":"hidden"}`} >
                <img onClick={handleCloseVehicle}  className="w-10 mb-2 absolute right-0 " src="https://imgs.search.brave.com/p_hdfw6nNGokVc2eVoq_xhtSveK03jg4PsElqkkrkO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/MTg5LzExMS9zbWFs/bC9kb3duLXJvdW5k/LWFycm93LWljb24t/dmVjdG9yLmpwZw" />
              <h3 className="text-3xl font-bold mb-4" >Choose a Vehicle</h3>


               <div onClick={handleConfirmRide} className=" flex  items-center border-2 border-slate-50 active:border-black mb-4 rounded-xl" >
                   <img className="w-20" src="https://imgs.search.brave.com/r-iBeHnYhTsjk0klDyrvMGv4rNVAyPpr5qMOUZg0mT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/MzExLzk2Mi9zbWFs/bC93aGl0ZS1zdXYt/b24tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC0zZC1yZW5kZXJp/bmctaWxsdXN0cmF0/aW9uLWZyZWUtcG5n/LnBuZw" />
                   <div className="flex flex-col" >
                      <div className="flex  items-center "> 
                      <h4 className="text-sm font-medium">UberGo</h4>
                      <img className="w-10" src="https://imgs.search.brave.com/ZuH3sOA2DVAdrxexDiHjeKythN4lRBXHMQ-xZ0jvoh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzM2LzM2OC9zbWFs/bC9wcm9maWxlLXVz/ZXItaWNvbi1wbmcu/cG5n" />
                      </div> 
                      <p className="text-sm font-medium -mt-2" >2 mins away</p>
                      <p className="text-sm text-slate-700" >Affordable , compact rides</p>
                   </div>
                  <h4 className="text-lg font-semibold ml-8 px-4" >₹193.05</h4>
               </div>


               <div onClick={handleConfirmRide} className=" flex  items-center border-2 border-slate-50 active:border-black mb-4 rounded-xl" >
                   <img className="w-12 ml-4 rounded mr-4  " src="https://imgs.search.brave.com/mDAJkTzxBp1PBEe8weuikDE-CE_vqcmeG3ZKWtNS_L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHNkLXByZW1pdW0v/cGVzc29hbC1kZS1l/bnRyZWdhcy1hLWFu/ZGFyLWRlLW1vdG9j/aWNsZXRhLWlsdXN0/cmFjYW8tcG5nLWlz/b2xhZGEtZW0tZnVu/ZG8tdHJhbnNwYXJl/bnRlXzEzMTE4MjIt/MzUzMy5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw" />
                   <div className="flex flex-col " >
                      <div className="flex  items-center "> 
                      <h4 className="text-sm font-medium">Moto</h4>
                      <img className="w-10" src="https://imgs.search.brave.com/ZuH3sOA2DVAdrxexDiHjeKythN4lRBXHMQ-xZ0jvoh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzM2LzM2OC9zbWFs/bC9wcm9maWxlLXVz/ZXItaWNvbi1wbmcu/cG5n" />
                      </div> 
                      <p className="text-sm font-medium -mt-2" >3 mins away</p>
                      <p className="text-sm text-slate-700 w-full" >Affordable , motorcycle rides</p>
                   </div>
                  <h4 className="text-lg font-semibold ml-8 px-4" >₹65.19</h4>
               </div>


               <div onClick={handleConfirmRide} className=" flex  items-center border-2 border-slate-50 active:border-black mb-4 rounded-xl" >
                   <img className="w-12 ml-4 mr-4" src="https://imgs.search.brave.com/I6DkEsy3E9Yj5CnKninXhi3bfJRRaJbogGGxs2Svcz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8xMi8yMS85/L3RocmVlLXdoZWVs/ZWQtbW90b3ItdmVo/aWNsZS15ZWxsb3ct/YXV0by1yaWNrc2hh/dy1mb3ItY2l0eS10/cmFuc3BvcnQtSGJV/TUxrVVRfdC5qcGc" />
                   <div className="flex flex-col" >
                      <div className="flex  items-center "> 
                      <h4 className="text-sm font-medium">UberAuto</h4>
                      <img className="w-10" src="https://imgs.search.brave.com/ZuH3sOA2DVAdrxexDiHjeKythN4lRBXHMQ-xZ0jvoh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzM2LzM2OC9zbWFs/bC9wcm9maWxlLXVz/ZXItaWNvbi1wbmcu/cG5n" />
                      </div> 
                      <p className="text-sm font-medium -mt-2" >3 mins away</p>
                      <p className="text-sm text-slate-700" >Affordable , auto  rides</p>
                   </div>
                  <h4 className="text-lg font-semibold ml-20 px-4" >₹120.05</h4>
               </div>
          </div>

{/* //yeh confirm ride bhi ek panel hi hone wala hain */}
              <div className={`${confirmRide ? "block" : "hidden"}`} >
                <ConfirmRide/>
              </div>

        </div>
     </>
   )
}

export default UberHome