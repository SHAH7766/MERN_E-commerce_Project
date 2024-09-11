import axios from "axios";
import {Spinner} from '../Components/Spinners'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddToCart } from "../Redux/CartSlice";
const DetailPage = () => {
    const dispatch = useDispatch()
  const params = useParams();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getPRoducts() {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setdata(res.data);
    setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPRoducts();
  }, [data]);
  if(loading){
    return(
        <div style={{marginTop:"100px"}} className="container"><Spinner/></div>
    )
  }
  return (
    <>
    <h2 style={{marginTop:"100px"}} className="list">Single Product Page</h2>
      <div style={{ marginTop: "100px" }} className="container">
      <div >
        <div className="row">
          <div className="col-lg-6">
        <center>  <img src={data.image} className="image" /></center>  
          </div>
          <div className="col-lg-6 text-center">
            <h5 className="title">{data.title}</h5>
            <p className="description">{data.description}</p>
            <p className="fs-4">$ {data.price}</p>
            <>
                   <center> <button onClick={()=>dispatch(AddToCart(data))} className="buttonCart">Add to Cart</button></center>
            </>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DetailPage;
