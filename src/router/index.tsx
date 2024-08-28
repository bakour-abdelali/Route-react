import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import HommePage from "../pages";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import RootLayaout from "../pages/RootLayaout";


const router = createBrowserRouter(
    createRoutesFromElements(
        
       <Route path="/"     element={<RootLayaout />}>
     <Route index element={<HommePage/>}/>
     <Route path="About"    element={<About/>}/>
     <Route path="Services" element={<Services/>}/>
     <Route path="Contact" element={<Contact/>}/>
       </Route>
        
    )
  );
  export default router;