import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes,Route, useNavigate } from 'react-router-dom';
import Admin from "./pages/Admin";
import Designs from "./pages/Designs";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { Actions } from "./redux/Store";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./database/firebase";
import AdminHome from "./pages/AdminHome";
import Construction from "./pages/Construction";
import Contents from "./pages/Contents";
import ImagePreView from "./pages/ImagePreview";

const App = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AdminLogged = useSelector(state=>state.AdminLogged);
  const ConfigureView = () =>{
    if(window.innerWidth<=500){
      dispatch(Actions.setMobileView(true));
    }else{  
      dispatch(Actions.setMobileView(false));
    }
  }
  useEffect(()=>{
    ConfigureView();
  });
  window.addEventListener('resize',()=>{
    ConfigureView();
  });
  onAuthStateChanged(auth,(user)=>{
    if(user){
      dispatch(Actions.setAdminLogged(true));
      navigate('/adminHome');
    }
  })

  return(
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/designs" element={<Designs/>}/>
        <Route path="/construction" element={<Construction/>}/>
        <Route path="/admin" element={<Admin/>}/>
        {AdminLogged && <Route path="/adminHome" element={<AdminHome/>}/>}
        <Route path="/kitchen" element={<Contents/>}/>
        <Route path="/bedroom" element={<Contents/>}/>
        <Route path="/tv" element={<Contents/>}/>
        <Route path="/wall" element={<Contents/>}/>
        <Route path="/crockery" element={<Contents/>}/>
        <Route path="/preview" element={<ImagePreView/>}/>
        <Route path="/kitchen" element={<Contents/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;