import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

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
import ProtuctedRout from "../Compenet/auth/ProtuctedRout";
import FootballMatches from "../pages/mach";
const isLogin:boolean=true
const userData:{email:string}={email:"bakour@gmail.com"}

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/"     element={<RootLayaout />} errorElement={<h1> error element</h1>}>
     <Route index element={<HommePage/>}/>
     <Route path="About"    element={<About/>}/>
     <Route path="Services" element={
      // <Services/>
      <FootballMatches />
      }/>
     <Route path="Contact" element={ <ProtuctedRout
              children={<Contact />}
              isLogin={isLogin}
              rout="/About"
              data={userData}
            /> }/>
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