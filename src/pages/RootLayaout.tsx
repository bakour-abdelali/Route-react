import { Outlet } from "react-router-dom"
import Navbar from "../Compenet/Navbar"

interface IProms{}
const RootLayaout=({}:IProms)=>{
    return (
<>
<Navbar/>
<h1>hello </h1>
<Outlet/>
</>
    )
}
export default RootLayaout
 