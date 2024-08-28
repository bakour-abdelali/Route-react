import { Outlet } from "react-router-dom"
import AsideNavbar from "../../Compenet/AsideNavbar"
import Navbar from "../../Compenet/Navbar"

interface IProms{}
const Layou=({}:IProms)=>{
    return (
<>
    <Navbar/>
<AsideNavbar />
<Outlet/>


</>
    )
}
export default Layou
