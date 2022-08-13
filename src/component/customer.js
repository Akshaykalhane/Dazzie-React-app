import React from "react";

import {Link} from 'react-router-dom';
 import './sass/customer.css';

const Customer=()=>{

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
            <button className="active"> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
            <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
            <button><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
            <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
        </div>
        <div className="setting-btn">
            <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
        </div>
    </div>

    <div className="customer-container">
        <h2>Customer</h2>
        <div className="customer-table">
            <div className="table-header">
                <div className="search-bar2">
                    <img src="./images/SEARCH.svg" alt="" /> 
                    <input type="text" placeholder="Search Here...." />
                </div>
                <div className="filters">
                    <img src="./images/filter.svg" alt="" />
                    <img src="./images/threedots.svg" alt="" />
                </div>
            </div>
            <div className="customer-data">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Join Date</th>
                        <th>Total Visit</th>
                        <th>Purchased Items</th>
                        <th>Total Spend</th>
                    </tr>
                    <tr>
                        <td>XXX1</td>
                        <td>Arlene McCoy</td>
                        <td>1 February 2021</td>
                        <td>2</td>
                        <td className="order-history">americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5); <button className="see-detail-btn">See Details</button></td>
                        <td>$490.51</td>
                    </tr>
                    <tr>
                        <td>XXX1</td>
                        <td>Arlene McCoy</td>
                        <td>1 February 2021</td>
                        <td>2</td>
                        <td className="order-history">americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5); <button className="see-detail-btn">See Details</button></td>
                        <td>$490.51</td>
                    </tr>
                    <tr>
                        <td>XXX1</td>
                        <td>Arlene McCoy</td>
                        <td>1 February 2021</td>
                        <td>2</td>
                        <td className="order-history">americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5); <button className="see-detail-btn">See Details</button></td>
                        <td>$490.51</td>
                    </tr>
                    <tr>
                        <td>XXX1</td>
                        <td>Arlene McCoy</td>
                        <td>1 February 2021</td>
                        <td>2</td>
                        <td className="order-history">americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5); <button className="see-detail-btn">See Details</button></td>
                        <td>$490.51</td>
                    </tr>
                    <tr>
                        <td>XXX1</td>
                        <td>Arlene McCoy</td>
                        <td>1 February 2021</td>
                        <td>2</td>
                        <td className="order-history">americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5); <button className="see-detail-btn">See Details</button></td>
                        <td>$490.51</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
        </>
    )
}

export default Customer;