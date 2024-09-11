import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecermentQuantity,
  GetTotalCart,
  IncermentQuantity,
  RemoveCart,
} from "../Redux/CartSlice";
import { Spinner } from "../Components/Spinners";

const Cart = () => {
  let dispatch = useDispatch();
  const { Cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.name
  );
  useEffect(() => {
    dispatch(GetTotalCart());
  }, [Cart]);
  return (
    <>
      <div className="container">
        <div style={{ marginTop: "100px" }} className="c row">
          <div className="col-lg-6 col-sm-12 col-md-4">
            {Cart.map((x) => {
              return (
                <>
                  <div
                    className=" card text-center mt-5"
                    style={{ width: "18rem" }}
                  >
                    <center>
                      {" "}
                      <img src={x.image} className="image" alt="..." />
                    </center>
                    <div className="card-body">
                      <p className="card-title">{x.title}</p>
                      <p>$ {x.price}</p>
                      <div className=" mt-2 ">
                        <button
                          className="increment"
                          onClick={() => dispatch(IncermentQuantity(x))}
                        >
                          +
                        </button>
                        <span className="quantity">{x.quantity}</span>
                        <button
                          className="decrement"
                          onClick={() => dispatch(DecermentQuantity(x))}
                        >
                          -
                        </button>
                        <button
                          onClick={() => dispatch(RemoveCart(x))}
                          className=" buttondelete"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="cartTotal col-lg-6 col-sm-12 col-md-4">
            
              <h3 className="total">Total Quantity:</h3>
              <span className="total"> {totalQuantity}</span>

              <h3 className="total">Total Price:</h3>
              <span className="total"> {totalPrice}</span>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
