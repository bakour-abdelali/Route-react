import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import Navbar from "../Compenet/Navbar";


const router = createBrowserRouter(
    createRoutesFromElements(

        <>
       <Route path="/" element={<div className="text-red-600 text-center">
        <Navbar/>
        <Outlet/>
       </div>}>
       <Route path="Homme" element={<div className="text-red-600 text-center">Homm page</div>}/>
     
     <Route path="About" element={<div className="text-red-600 text-center">About page</div>}/>
     <Route path="Services" element={<div className="text-red-600 text-center">Services</div>}/>
       </Route>
        
        
      
        </>
      
    )
  );
  export default router;