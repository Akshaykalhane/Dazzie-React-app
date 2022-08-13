import React from "react";
import './sass/style.css';
import { Link } from "react-router-dom";
const Home=()=>{

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
            <button className="active"><Link to={'/'}><i class="fa fa-square-o" style={{color:'#fff'}}></i></Link></button>
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
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Sashimi</h3>
                        <p>$22</p>
                    </div>
                </div>
            </div>
            <h2 className="drinks-heading">Drinks</h2>
            <div className="food-boxes drinks-boxes">
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Amazake</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Royal Milk Tea</h3>
                        <p>$22</p>
                    </div>
                </div>
                <div className="food-box">
                    <div className="img-box"></div>
                    <div className="text-box">
                        <h3>Flavored Soymilk Drinks</h3>
                        <p>$22</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default Home;