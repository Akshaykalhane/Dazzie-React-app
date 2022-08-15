import React from "react";
import './sass/style.css';
import { Link } from "react-router-dom";
import Category_data from './data/food.json';
import drink_Data from './data/drinks.json';
import Header from "./Header";
const Home = () => {
    console.log(Category_data)
    return (
        <>
            <Header />
            <div className="side-bar">
                <div className="side-bar-btn">
                    <button className="active"><Link to={'/'}><i className="fa fa-square-o" style={{ color: '#fff' }}></i></Link></button>
                    <button> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
                    <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
                    <button> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
                    <button><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
                    <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
                </div>
                <div className="setting-btn">
                    <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
                </div>
            </div>

            <div className="category-container">
                <div className="search-bar">
                    <img src="./images/SEARCH.svg" alt="" />
                    <input type="text" placeholder="Search Here...." />
                </div>
                <div className="category-navbar">
                    <button className="category-active">All</button>
                    <button>Food</button>
                    <button>Drinks</button>
                    <button>Snacks</button>
                    <button>Packages</button>
                </div>
                <div className="food-category">
                    <h2>Food</h2>
                    <div className="food-boxes">
                        {Category_data.map((item) => {
                            return (
                                <div className="food-box" key={item.id}>
                                    <div className="img-box"></div>
                                    <div className="text-box">
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h2 className="drinks-heading">Drinks</h2>
                    <div className="food-boxes drinks-boxes">
                        {drink_Data.map((item) => {
                            return (
                                <div className="food-box" key={item.id}>
                                    <div className="img-box"></div>
                                    <div className="text-box">
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;