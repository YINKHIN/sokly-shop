import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Master = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Master
