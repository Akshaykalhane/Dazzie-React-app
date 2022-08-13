import React from "react";
import {Link } from 'react-router-dom';

import './sass/coupen.css';

const Coupen=()=>{
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
            <button className="active"><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
            <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
        </div>
        <div className="setting-btn">
            <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
        </div>
    </div>

    <div className="coupen-container">
        <div className="coupen-container-header">
            <h2>Coupen</h2>
            <button>Create New</button>
        </div>
        <div className="coupen-table">
            <div className="table-header">
                <div className="search-bar3">
                    <img src="./images/SEARCH.svg" alt="" />
                    <input type="text" placeholder="Search Here..." />
                </div>
                <div className="filters">
                    <img src="./images/filter.svg" alt="" />
                    <img src="./images/threedots.svg" alt="" />
                </div>
            </div>
            <div className="coupen-data">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Discount</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Activate</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>20% Off Entire Order</td>
                        <td>20%</td>
                        <td>February 14 2021</td>
                        <td>February 17 2021</td>
                        <td> <label for="" className="switch">
                            <input type="checkbox" checked />
                            <span className="slider"></span>
                        </label> </td>
                        <td><img src="./images/threedots.svg" alt="" /></td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>20% Off Entire Order</td>
                        <td>20%</td>
                        <td>February 14 2021</td>
                        <td>February 17 2021</td>
                        <td> <label for="" className="switch">
                            <input type="checkbox" checked />
                            <span className="slider"></span>
                        </label> </td>
                        <td><img src="./images/threedots.svg" alt="" /></td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>20% Off Entire Order</td>
                        <td>20%</td>
                        <td>February 14 2021</td>
                        <td>February 17 2021</td>
                        <td> <label for="" className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>  </td>
                        <td><img src="./images/threedots.svg" alt="" /></td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>20% Off Entire Order</td>
                        <td>20%</td>
                        <td>February 14 2021</td>
                        <td>February 17 2021</td>
                        <td> <label for="" className="switch">
                            <input type="checkbox" checked />
                            <span className="slider"></span>
                        </label> </td>
                        <td><img src="./images/threedots.svg" alt="" /></td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>20% Off Entire Order</td>
                        <td>20%</td>
                        <td>February 14 2021</td>
                        <td>February 17 2021</td>
                        <td> <label for="" className="switch">
                            <input type="checkbox" checked />
                            <span className="slider"></span>
                        </label> </td>
                        <td><img src="./images/threedots.svg" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

        </>
    )
}

export default Coupen;