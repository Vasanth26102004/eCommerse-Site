import React from "react";
import "./ProductDisplay.css";
import { useContext } from 'react'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from './../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div
      className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Eu anim nulla cupidatat ullamco amet nostrud ea commodo. Est laborum excepteur cillum aliquip 
                id non commodo est aliqua qui sint non commodo. Laborum amet occaecat ad laborum occaecat. Mollit quis
                 eu quis sunt qui. Minim ullamco esse esse sint magna. Velit cillum adipisicing ipsum commodo id in 
                 consequat ipsum aliqua.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="productdisplay-right-size-item">S</div>
                    <div className="productdisplay-right-size-item">M</div>
                    <div className="productdisplay-right-size-item">L</div>
                    <div className="productdisplay-right-size-item">XL</div>
                    <div className="productdisplay-right-size-item">XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
        </div>
      </div>
  );
};

export default ProductDisplay;
