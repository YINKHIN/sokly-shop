import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";

const FrontendRout = ()=>{
    return(
        <Routes>
            <Route path="/" element= {<Master/> }>
                
            </Route>
        </Routes>
    )
}
export default FrontendRout;