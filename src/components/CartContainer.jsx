import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {
  clearCart,
  getCartItems,
  getCartTotal,
} from "../redux/feature/cartSlice";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';

const CartContainer = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  if (items.length === 0) {
    return (
      <>
        <h3 style={{ marginTop: "20px" }}>
          Your Shopping
          <span style={{ marginLeft: "10px", marginRight: "10px" }} >
            <ShoppingBagIcon />
          </span>
          is Empty
        </h3>
        <Button variant="contained" style={{ marginRight: "100px" }}
          onClick={() => dispatch(getCartItems())}>Get Items</Button>
      </>
    );
  }
  return (
    <div>
      <h2>Your Shooping Cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>
        <Button variant="contained" color="secondary" onClick={() => dispatch(clearCart())}
          style={{ width: "140px", marginTop: "20px", marginBottom: "30px" }} > Clear Cart</Button>
      </footer>
    </div>
  );
};

export default CartContainer;
