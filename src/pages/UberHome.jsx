import React from "react"

function UberHome() {
   return (
     <> 
        <div className="h-screen relative w-full flex flex-col justify-between" >
           <img className="w-12 absolute left-5 top-5 " src="https://imgs.search.brave.com/mKrWVMewBreF9pQsYQb6CNwKY_QpHBtNjC6AkK_DlO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRpbmcuZGNhc3Nl/dGNkbi5jb20vYmxv/Zy8yMDE4L1NlcHRl/bWJlci9VYmVyLVdv/cmRtYXJrL0RJX1Vi/ZXItV29yZG1hcmtf/QmFubmVyXzgyOHgz/MDAuanBn" />
            
           <div className="h-screen w-screen" >
            {/* //image for temporary use */}
              <img className="w-full object-cover h-screen" src="https://imgs.search.brave.com/5j6yiRyQPCX3_QPhLVGD9DcZIOKLTGjVQaD0Ma4ltKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDgz/MjYwOTMzL3ZlY3Rv/ci9pc29tZXRyaWMt/dHJhZmZpYy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YzBQ/MXJaTlVqRWRSY1g2/WnBoYnc4REt6N1Vp/X3dmTE9iVFViOTZF/aHZKVT0" />
           </div>

           {/* //feautre jabh hum click kre trips wale placeholder me toh voh upar ajaye */}

          <div className="flex flex-col justify-end h-screen top-0 absolute w-full " >
             <div className="h-[30%] p-5 bg-white">
                  <h4 className="text-3xl font-bold mb-2" >Find a Trip</h4>
                  <form>
                     <input
                     type="text"
                     placeholder="Add a pick-up location"
                     className="border border-black bg-slate-100 w-full text-lg placeholder:text-base  font-semibold rounded-lg px-4 py-2 mb-4 "
                  />
                     <input
                     type="text"
                     placeholder="Enter your destination"
                     className="border border-black bg-slate-100 w-full text-lg placeholder:text-base font-semibold rounded-lg px-4 py-2 "
                  />
                  </form>
             </div>
              <div className="bg-red-500 " >
              </div>
          </div>
        </div>
     </>
   )
}

export default UberHome