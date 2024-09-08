import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/assets/global.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myforgetpage from './modules/auth/Myforgetpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Myeditreord from './modules/dashboard/Myeditreord';
import Myshopping from './modules/shopping/Myshopping';
import Adminshoppage from './modules/shopping/Adminshoppage';
import Fruitesedit from './modules/shopping/Fruitesedit';
import Fruitadd from './modules/shopping/Fruitadd';
import Fruitdetails from './modules/shopping/Fruitdetails';
import Aboutpage from './modules/shopping/Aboutpage';
import Myreduxpage from './../src/modules/shopping/reducers/Myreduxpage';
import Myactions from './modules/shopping/reducers/Myactions';
import {mystore} from './modules/shopping/reducers/Mystore';
import { Provider } from "react-redux";
import Carousel from './shares/Carousel';
import Graphanual from './modules/shopping/Graphanual';
import Userloginpage from './modules/shopping/Useroginpage'
import Userstatuspage from './modules/shopping/Userstatuspage';
import Alluserlist from '../src/modules/shopping/Alluserlist'
import ContactUs from './modules/shopping/Mycontactpage';
import Mytexteditor from './modules/shopping/Mytexteditor';
import FeedbackList from './modules/shopping/Feedbacklist';
import Logoutpage from '../src/modules/shopping/Logoutpage';
import Usergetinfo from '../src/modules/shopping/Usergetinfo';
import Myerrorpage from './shares/Myerrorpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={mystore}>
    <BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}

theme="colored"

/>

      <Routes>
      

        <Route path='' element={<Myloginpage />}></Route>
        <Route path='*' element={<Myerrorpage/>}/>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='Myforgetpage' element={<Myforgetpage/>}/>
        <Route path='dashboard' element={<Mylandingpage/>}>
        <Route path='Aboutpage' element={<Aboutpage/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Userloginpage' element={<Userloginpage/>}/>
        <Route path='Userstatuspage' element={<Userstatuspage/>}/>
        <Route path='Alluserlist' element={<Alluserlist/>}/>
        <Route path='FeedbackList' element={<FeedbackList/>}/>
        <Route path='Logoutpage' element={<Logoutpage/>}/>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='Carousel' element={<Carousel/>}/>
        <Route path='Graphanual' element={<Graphanual/>}/>
        <Route path='Mytexteditor' element={<Mytexteditor/>}/>
        <Route path='' element={<Myshopping/>}/>
        <Route path='Adminshoppage' element={<Adminshoppage/>}/>
        <Route path='Fruitadd' element={<Fruitadd/>}/>
        <Route path='fruitedit/:id' element={<Fruitesedit/>}/>
        <Route path='Fruitdetails/:id' element={<Fruitdetails/>}/>
        <Route path='Usergetinfo' element={<Usergetinfo/>}/>
        <Route path="redux" element={<Myreduxpage />} />
        <Route path='Myaction' element={<Myactions/>}/>
          <Route path='Users' element={<Myhomepage/>}/>
          <Route path='view/:id' element={<Profilepage/>}/>
          <Route path='edit/:id' element={<Myeditreord/>}/>
        </Route>
        
      </Routes>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
