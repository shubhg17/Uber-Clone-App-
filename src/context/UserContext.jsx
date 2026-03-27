//hum context create krenge as data ko centralize krne ke liye ki data ek jagah pe present rahe 
//Hum krenge kya apne usercontext ko wrap krenge main.jsx me browser routeer aur app ke sath  
import React, { createContext ,useState } from "react"

export const UserDataContext = createContext()

function UserContext({children}) {

  // yeh data humne banaya hain 
    const [user , setUser] = useState({
        email:"",
        fullName: {
           firstname:"",
           lastname:""
        }
    })

   return (
     <> 
     {/* // agar hum ese likhenge toh har ek page tume sirf usercontext hi dikhega as aur kuch nhi ha abhi but hume components bhi dikhane ha toh hum isske children ko pass krdenge  */}
      {/* <div>UserContext</div> */}
       <div>
          {/* {children} */}
          {/* //with this u are providing data to its children as whenever we create context a provider is there which is use to provide context data to children or the pages/components same meaning   */}
           <UserDataContext.Provider value={[user , setUser]} >
              {children}
           </UserDataContext.Provider>
       </div>
     </>
   )
}

export default UserContext 