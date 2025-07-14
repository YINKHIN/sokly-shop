import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontendRout from "../fonts/router/FrontendRout";
// import FrontendRout from ""
 const MasterRouter = ()=>{
    return (
        <BrowserRouter >
          <Routes >
             <Route path="/" element={< FrontendRout/>} />
          </Routes>
        </BrowserRouter>
    )
}
export default MasterRouter;