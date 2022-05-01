import React from "react";
import { Logo } from "./components/logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Deail from "./components/pages/Deail";
import { NavBar } from "./components/NavBar";
import Favs from "./components/pages/Favs";
import User from "./components/pages/User";
import NotRegisteredUser from "./components/pages/NotRegisteredUser";
import Context from "./Context";


const App = () => {
 



  return (
   

   <Context.Consumer> 
     {
      ({isAuth})=> (
        <> 
         <Logo />
       <GlobalStyle />
 
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pet/:id" element={<Home />} />
         <Route path="/detail/:detailId" element={<Deail />} />
         <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />    
         <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
         <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
 
       <NavBar />
       </>
       )
      


     }

      </Context.Consumer>
  
  );
};

export default App;
