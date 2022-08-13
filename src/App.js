import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";

import Home from './component/home';
import Customer from './component/customer';
import Order from './component/order';
import EditProduct from './component/editproduct';
import EmployeeShift from './component/employeeshift';
import Setting from './component/setting';
import Coupen from './component/coupen';


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/customer' element={<Customer />}></Route>
          <Route path='/coupen' element={<Coupen />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/employeeshift' element={<EmployeeShift />}></Route>
          <Route path='/editproduct' element={<EditProduct />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
