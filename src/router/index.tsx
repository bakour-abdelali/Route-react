import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import HommePage from "../pages";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import RootLayaout from "../pages/RootLayaout";
import Layou from "../pages/learn/layou";
import StartQuck from "../pages/learn";
import Installation from "../pages/learn/Installation";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import TutorialTicTacToe from "../pages/learn/TutorialTicTacToe";


const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/"     element={<RootLayaout />}>
     <Route index element={<HommePage/>}/>
     <Route path="About"    element={<About/>}/>
     <Route path="Services" element={<Services/>}/>
     <Route path="Contact" element={<Contact/>}/>
       </Route>
       <Route path="/learn"     element={<Layou />}>
     <Route index element={<StartQuck/>}/>
     <Route path="tutorial"    element={<TutorialTicTacToe/>}/>
     <Route path="thinking" element={<ThinkingInReact/>}/>
     <Route path="Installation" element={<Installation/>}/>
     
       </Route>
       </>
        
    )
  );
  export default router;