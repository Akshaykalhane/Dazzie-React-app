import React from "react";

import {Link} from 'react-router-dom';
 import './sass/customer.css';
 import customerdata from './data/customer.json';
 import Header from "./Header";

const Customer=()=>{

    return(
        <>
   <Header />

    <div className="side-bar">
        <div className="side-bar-btn">
            <button ><Link to={'/'}><i className="fa fa-square-o" style={{color:'#000'}}></i></Link></button>
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
                    {customerdata.map((item)=>{
                        return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.join_date}</td>
                            <td>{item.total_visit}</td>
                            <td className="order-history">{item.purchased_item} <button className="see-detail-btn">See Details</button></td>
                            <td>{item.total_spend}</td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    </div>
        </>
    )
}

export default Customer;