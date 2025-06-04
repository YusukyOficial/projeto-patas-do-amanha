import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAutheticated } from "../../utils/storage";
 
function PrivateRoute({children}) {
    //const [logado,] = useState(false)

    return(
        isAutheticated() ? children : <Navigate to='/login'/>
    )
 
}
 
 
export default PrivateRoute;