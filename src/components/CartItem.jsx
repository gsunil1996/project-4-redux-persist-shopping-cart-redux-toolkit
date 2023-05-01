import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../redux/feature/cartSlice";
import Button from '@mui/material/Button';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "70vw",
        maxWidth: "90rem",
        margin: "0px auto",
      }}
    >
      <div style={{ display: "flex", width: "60%", margin: "auto", justifyContent: "space-between", marginTop: "10px", borderBottom: "2px dotted black", padding: "10px" }}>
        <div>
          <img
            src={img}
            className="img-fluid"
            alt=""
            style={{ objectFit: "cover", width: "6rem", height: "6rem" }}
          />
        </div>
        <div>
          <h5>{title}</h5>
          <h5 style={{ color: "#617d98" }}>${price}</h5>

          <Button variant="contained" onClick={() => dispatch(remove(id))} color="error">Remove</Button>
        </div>
        <div>
          <Button variant="contained" onClick={() => dispatch(increase(id))}>+</Button>
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <Button variant="contained" onClick={() => dispatch(decrease(id))}>-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
