import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import HomePage from "../pages/HomePage";
// import SpecialOffer from "../Components/SpecialOffer";

const FrontendRout = ()=>{
    return(
        <Routes>
            <Route path="/" element= {<Master/> }>
                <Route path="/"  element={<HomePage/>} />
                {/* <Route path="/special" element={<SpecialOffer/>} /> */}
            </Route>
        </Routes>
    )
}
export default FrontendRout;