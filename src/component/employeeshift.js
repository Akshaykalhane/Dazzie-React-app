import React from "react";
import {Link } from 'react-router-dom';
import shift1 from './data/employee_shift1.json';
import shift2 from './data/employee_shift2.json'; 

import Header from "./Header";
import './sass/employee.css';

const EmployeeShift=()=>{
    return(
        <>
          
        <Header />
    <div className="side-bar">
        <div className="side-bar-btn">
            <button ><Link to={'/'}><i className="fa fa-square-o" style={{color:'#000'}}></i></Link></button>
            <button> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
            <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
            <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
            <button><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
            <button className="active"><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
        </div>
        <div className="setting-btn">
            <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
        </div>
    </div>

    <div className="exployee-container">
        <div className="employee-container-header">
            <h2>Employee Shift</h2>
            <button>Create New</button>
        </div>
        <div className="employee-table">
            <div className="shift-timing">
                <div className="time"><h4>Shift 1(6AM - 12AM)</h4></div>
                <div className="add-more-icon">
                    <img src="./images/pen.svg" alt="" />
                    <img src="./images/plus.svg" alt="" />
                </div>
            </div>
            <div className="shift-detail">
                {shift1.map((item)=>{
                    return(
                    <div className="employee-box" key={item.id}>
                        <div className="employee-box-circle"></div>
                        <div className="employee-text"><h3>{item.employee_name}</h3>
                        <p className={item.class}>{item.position}</p> <button>Details</button> </div>
                        <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                    </div>
                    )
                })}
               
            </div>
        </div>
        <div className="employee-table">
            <div className="shift-timing">
                <div className="time"><h4>Shift 2(12AM - 6AM)</h4></div>
                <div className="add-more-icon">
                    <img src="./images/pen.svg" alt="" />
                    <img src="./images/plus.svg" alt="" />
                </div>
            </div>
            <div className="shift-detail">
            {shift2.map((item)=>{
                    return(
                        <div className="employee-box" key={item.id}>
                        <div className="employee-box-circle"></div>
                        <div className="employee-text"><h3>{item.employee_name}</h3>
                        <p className={item.class}>{item.position}</p> <button>Details</button> </div>
                        <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>

        </>
    )
}

export default EmployeeShift;