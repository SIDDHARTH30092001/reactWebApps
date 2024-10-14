import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        // here wrapping will happen, since wrapping is providing
<>
<UserContext.Provider value={{user,setUser}}>{/*prop/Value which we need to provide as access, if others than provide here*/}
    {children}
</UserContext.Provider>
        </>
    )
}

export default UserContextProvider

// now to get this store access can take in main or app.jsx whereever