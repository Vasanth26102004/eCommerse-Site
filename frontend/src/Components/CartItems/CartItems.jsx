import React from "react";
import "./CartItems.css";
import all_product from "./../Assets/all_product";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import RemoveIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div key={[e.id]}>
                  <div className="cartitems-format-main">
                    <img src={e.image} className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">
                     {cartItems[e.id]}
                    </button>
                    <p>{e.new_price * cartItems[e.id]}</p>
                    <img
                      src={RemoveIcon}
                      onClick={()=>removeFromCart([e.id])}
                      className="cartitems-remove-icon"
                    />
                  </div>
                  <hr />
                </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter your promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
