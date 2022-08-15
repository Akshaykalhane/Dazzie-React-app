import React from "react";
import {Link } from 'react-router-dom';
import Header from "./Header";

import './sass/editorder.css';

const EditProduct=()=>{
    return(
        <>
    <Header />

    <div className="side-bar">
        <div className="side-bar-btn">
            <button ><Link to={'/'}><i className="fa fa-square-o" style={{color:'#000'}}></i></Link></button>
            <button> <Link to={'/order'}> <img src="./images/orders.svg" alt="" /></Link> </button>
            <button> <Link to={'/customer'}> <img src="./images/customer.svg" alt="" /></Link> </button>
            <button className="active"> <Link to={'/editproduct'}> <img src="./images/Package.svg" alt="" /></Link></button>
            <button ><Link to={'/coupen'}><img src="./images/Coupon Discount.svg" alt="" /></Link></button>
            <button><Link to={'/employeeshift'}><img src="./images/user.svg" alt="" /></Link></button>
        </div>
        <div className="setting-btn">
            <button><Link to={'/setting'}><img src="./images/seettings.svg" alt="" /></Link></button>
        </div>
    </div>

    <div className="edit-product-container">
        <h2>Edit Product</h2>
        <div className="product-div">
            <div className="product-edit-form">
                <form action="">
                    <div className="id-box">
                        <label for="id">ID</label>
                        <input type="text" value="AAA1" />
                    </div>
                    <div className="set-img">
                        <div className="edit-img"></div>
                        <div className="edit-img-text"><label for="img">Select your product image</label>
                        <input type="file" />
                        </div>
                    </div>
                    <div className="product-name-edit">
                        <label for="">Product Name</label>
                        <input type="text" value="Cappucino" />
                    </div>
                    <div className="category-option">
                        <label for="">Category</label>
                        <select name="" id="">
                            <option value="">Drink</option>
                        </select>
                    </div>
                    <div className="price-div">
                        <label for="price">Price</label>
                        <input type="text" value="$3" />
                    </div>
                    <div className="description">
                        <label for="">Description</label>
                        <textarea name="" id="" cols="20" rows="8">A Cappucino is an espresso-based coffee drink that originated in italy, andis traditionally prepared with steamed milk foam(microfoam)</textarea>
                    </div>
                </form>
            </div>
        </div>
        <div className="edit-btn-div">
            <button>Save</button>
            <button className="cancel-btn">Cancel</button>
        </div>
    </div>

        </>
    )
}

export default EditProduct;