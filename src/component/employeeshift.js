import React from "react";
import {Link } from 'react-router-dom';

import './sass/employee.css';

const EmployeeShift=()=>{
    return(
        <>
            <header className="header">
        <div className="logo">
            <div className="logo-square"></div>
            <div className="logo-text"><h2>Dazzie</h2></div>
        </div>
        <div className="user-info">
            <div className="notification-bell">
                <img src="./images/Notification Bell.svg" alt="" />
            </div>
            <div className="user-details">
                <div className="user-circle"></div>
                <div className="user-name">
                    <h3>Sumanto</h3>
                    <p>Cashier</p>
                </div>
            </div>
        </div>
    </header>

    <div className="side-bar">
        <div className="side-bar-btn">
            <button ><Link to={'/'}><i class="fa fa-square-o" style={{color:'#000'}}></i></Link></button>
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
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin">Admin</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Dianne Russell</h3>
                    <p className="admin cashier">Cashier</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin chef">Chef</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>

                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin waitress">Waitress</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin dishwasher">Dishwasher</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin chef">Chef</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
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
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin">Admin</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Dianne Russell</h3>
                    <p className="admin cashier">Cashier</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin chef">Chef</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>

                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin waitress">Waitress</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin dishwasher">Dishwasher</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" /></div>
                </div>
                <div className="employee-box">
                    <div className="employee-box-circle"></div>
                    <div className="employee-text"><h3>Brooklyn Simmons</h3>
                    <p className="admin chef">Chef</p> <button>Details</button> </div>
                    <div className="exployee-edit"><img src="./images/threedots.svg" alt="" />  </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}

export default EmployeeShift;