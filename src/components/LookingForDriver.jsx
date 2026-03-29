import React from "react"

function LookingForDriver({cancelRide}) {
   return (
     <>
      <div>
          <div className="p-5 bg-white absolute bottom-0">
              <h3 className="text-2xl font-bold" >Looking for a Driver</h3>
              <img className="mb-4" src="https://imgs.search.brave.com/9HwfkV3gYqKfoIw-njfNMWB-Qf7ISptCuL-npzeIgQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY2FyLXNoYXJp/bmctdGF4aS1zZXJ2/aWNlLWNvbmNlcHQt/dmVjdG9yLWlsbHVz/dHJhdGlvbl8zNTcy/NTctNTUyLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" />

              <div className="flex mb-5 border-b-2" >
                  <img className="w-10" src="https://imgs.search.brave.com/Yjz7D13PI2N9Jif8NIMRMJO5OYM2xE42fL5P2jjoI5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzM2LzM4NC9zbWFs/bC9wcm9maWxlLXVz/ZXItaWNvbi1wbmcu/cG5n" />
                  <div>
                     <p>563/11-A</p>
                     <p>Kankariya Talab , Bhopal</p>
                  </div>
              </div>

              <div className="flex mb-5 border-b-2 items-center" >
                  <img className="w-5 h-5 ml-2 mr-3" src="https://imgs.search.brave.com/Ec0Mp7GEN_3Pr4xjOByPA4nq34W8gQM15EGSGosFnx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTEyMjA0Ni92ZWN0/b3IvdmVjdG9yLW1h/cC1waW4taWNvbi1p/c29sYXRlZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y1lu/MmJDSUxWR3Bja2Z3/MkJQUDVqcjRveko3/ODZhTTFTOEJzT0xp/MmhOOD0" />
                  <div>
                     <p>200/11-A</p>
                     <p>Kankariya Talab , Bhopal</p>
                  </div>
              </div>

              <div className="flex mb-5 items-center" >
                  <img className="w-7 h-7 mr-3 ml-1" src="https://imgs.search.brave.com/GrR2xeg61cPCESK6MRulrZ0GjcmRfT53Nl0ZNPk0O6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/NTQyLzczOC9zbWFs/bC9maWF0LW1vbmV5/LWJhbmstY2FzaC1j/dXJyZW5jeS1maW5h/bmNlLXRoZW1lLWlz/b2xhdGVkLTNkLWlj/b24taWxsdXN0cmF0/aW9uLWlzb2xhdGVk/LXBuZy5wbmc" />
                  <div>
                     <p>$300</p>
                     <p>Ride Fare</p>
                  </div>
              </div>

              <button onClick={cancelRide} className="text-lg text-white bg-red-700 w-full rounded-lg py-1 font-bold" >Cancel</button>

         </div>
      </div>
     </>
   )
}
export default LookingForDriver