import React from "react";
import { Link } from 'react-router-dom';
import coupenData from './data/coupen.json';
import Header from "./Header";

import './sass/coupen.css';

const Coupen = () => {
    return (
        <>
         
         <Header />
            <div className="side-bar">
                <div className="side-bar-btn">
                    <button ><Link to={'/'}><i className="fa fa-square-o" style={{ color: '#000' }}></i></Link></button>
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
                            {coupenData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.code}</td>
                                        <td>{item.discount}</td>
                                        <td>{item.start_date}</td>
                                        <td>{item.end_date}</td>
                                        <td> <label className="switch">
                                            <input type="checkbox" checked={item.activate} />
                                            <span className="slider"></span>
                                        </label> </td>
                                        <td><img src="./images/threedots.svg" alt="" /></td>
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

export default Coupen;