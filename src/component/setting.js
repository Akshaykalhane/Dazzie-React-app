import React from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";

import './sass/setting.css';

const Setting = () => {
    return (
        <>
            <Header />

            <div className="side-bar">
                <div className="side-bar-btn">
                    <button ><Link to={'/'}><i className="fa fa-square-o" style={{ color: '#000' }}></i></Link></button>
                    <button> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
                    <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
                    <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
                    <button ><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
                    <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
                </div>
                <div className="setting-btn">
                    <button className="active"><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
                </div>
            </div>

            <div className="setting-slider">
                <div className="heading"><h2>Settings</h2></div>
                <div className="setting-btn-div">
                    <button>Account</button>
                    <button className="setactive">Bussiness Information</button>
                    <button>Preferences</button>
                    <button>Version</button>
                    <button>Integration</button>
                    <button>Database</button>
                    <button>Privacy</button>
                </div>
            </div>

            <div className="setting-container">
                <h2>Bussiness Information</h2>
                <div className="bussiness-div">
                    <div className="bussiness-edit-form">
                        <form action="">
                            <div className="set-img">
                                <div className="edit-img"></div>
                                <div className="edit-img-text"><label for="img">Select your product image</label>
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="bussinessname-box">
                                <label for="id">Bussiness Name</label>
                                <input type="text" value="Cappucino" />
                            </div>
                            <div className="bussinessname-box">
                                <label for="id">Phone Number</label>
                                <input type="text" value="(208) 555-0112" />
                            </div>
                            <div className="bussinessname-box">
                                <label for="id">Email</label>
                                <input type="text" value="capcyin@hello.com" />
                            </div>
                            <div className="category-option">
                                <label for="">Country</label>
                                <select name="" id="">
                                    <option value="">India</option>
                                    <option value="">America</option>
                                </select>
                            </div>

                            <div className="address-box">
                                <div className="province">
                                    <label for="">Province</label>
                                    <input type="text" value="Liyue" />
                                </div>
                                <div className="city-box">
                                    <label for="">City</label>
                                    <input type="text" value="Wangsu In " />
                                </div>
                                <div className="pincode-box">
                                    <label for="">Postal Code</label>
                                    <input type="text" value="612211" />
                                </div>
                            </div>

                            <div className="bussinessname-box">
                                <label for="">Address</label>
                                <input type="text" value="Wangsu In Village No. 221" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Setting;