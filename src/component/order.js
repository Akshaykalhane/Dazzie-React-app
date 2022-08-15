import React from "react";
import { Link } from 'react-router-dom';
import './sass/order.css';
import order_data from './data/orders.json';
import solditem from './data/solditem.json';
import stardata from './data/stat.json';
import Header from "./Header";

const Order = () => {

    return (
        <>
           
        <Header />
            <div className="side-bar">
                <div className="side-bar-btn">
                    <button ><Link to={'/'}><i className="fa fa-square-o" style={{ color: '#000' }}></i></Link></button>
                    <button className="active"> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
                    <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
                    <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
                    <button ><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
                    <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
                </div>
<<<<<<< HEAD
                <div classNameName="setting-btn">
                    <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
=======
            </div>
        </div>
    </header>

    <div className="side-bar">
        <div className="side-bar-btn">
            <button ><Link to={'/'}><i className="fa fa-square-o" style={{color:'#000'}}></i></Link></button>
            <button className="active"> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
            <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
            <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
            <button ><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
            <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
        </div>
        <div classNameName="setting-btn">
            <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
        </div>
    </div>

    <div className="order-container">
        <div className="order-info">
            <div className="order-info-box">
                <div className="stat"><p>Customer</p> <p className="loss"><i className='fa fa-arrow-down'></i></p> </div>
                <div className="stat"><p>1000</p> <p className="loss">-15%</p></div>
            </div>
            <div className="order-info-box">
                <div className="stat"><p>Orders</p> <p className="prof"><i className='fa fa-arrow-up'></i></p> </div>
                <div className="stat"><p>1050</p> <p className="prof">+20%</p></div>
            </div>
            <div className="order-info-box">
                <div className="stat"><p>Revenue</p> <p className="prof"><i className='fa fa-arrow-up'></i></p>  </div>
                <div className="stat"><p>$50.000</p> <p className="prof">+10%</p></div>
            </div>
            <div className="order-info-box">
                <div className="stat"><p>Net Profit</p> <p className="prof"><i className='fa fa-arrow-up'></i></p>  </div>
                <div className="stat"><p>$20.000</p> <p className="prof">+12%</p></div>
            </div>
        </div>
        <div className="order-data">
            <div className="order-table">
                <h3>Latest Order</h3>
                <div className="inner-table">
                    <table>
            
                        <tr>
                            <th>No.</th>
                            <th>Item</th>
                            <th>Quality</th>
                            <th>Revenue</th>
                            <th>Nett Profit</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Shamini</td>
                            <td>30</td>
                            <td>$293.00</td>
                            <td>$710.68</td>
                        </tr>
                    </table>
>>>>>>> 7edbc37bcc56c832318beeae68d250affc7e58bf
                </div>
            </div>

            <div className="order-container">
                <div className="order-info">
                    {stardata.map((item) => {
                        return (
                            <div className="order-info-box" key={item.id}>
                                <div className="stat">
                                    <p>{item.title}</p>
                                    <p classNameName={item.class}><i className={item.class}></i>
                                    </p>
                                </div>
                                <div className="stat">
                                    <p>{item.value}</p>
                                    <p className={item.class}>{item.percentage}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="order-data">
                    <div className="order-table">
                        <h3>Latest Order</h3>
                        <div className="inner-table">
                            <table>

                                <tr>
                                    <th>No.</th>
                                    <th>Item</th>
                                    <th>Quality</th>
                                    <th>Revenue</th>
                                    <th>Nett Profit</th>
                                </tr>

                                {order_data.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.no}</td>
                                            <td>{item.item}</td>
                                            <td>{item.quality}</td>
                                            <td>{item.revenue}</td>
                                            <td>{item.networth}</td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                    </div>
                    <div className="sold-item">
                        <div className="sold-item-head">
                            <h2>Item sold</h2>
                            <select name="" id="">
                                <option value="">Best Seller</option>
                            </select>
                        </div>
                        <div className="sold-item-user">
                            {solditem.map((item) => {
                                return (
                                    <div className="user-div" key={item.id}>
                                        <div className="user-info2">
                                            <div className="user-img1"></div>
                                            <div className="user-name1"><p>{item.item}</p></div>
                                        </div>
                                        <div className="item-quantity">{item.sold} Items</div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Order;
