import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import { Link } from 'react-router-dom'
import { Spinner } from "../Components/Spinners";

const Prodoucts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts();
  }, [data]);
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };
  if(loading){
    return(
        <div style={{marginTop:"100px"}} className="container"><Spinner/></div>
    )
  }
  return (
    <>
        <h2 style={{marginTop:"100px"}} className="list">List of Products</h2>
        <div style={{marginTop:"70px"}} className='container'>
        <div className='row'>
            {
                data.map((x)=>{
                    return(
                        <>
                        <div  className='col-lg-3 mt-2 col-sm-12 col-md-4 '>
                            <div className='card'>
                        <center>  <img  className='image' src={x.image} alt={x.title}/></center>
                            <div    className='card-body text-center'>
                                <h5 className='card-title title'>{x.title}</h5>
                                <p className='card-text'>{x.description.slice(0,100)}...</p>
                               <p className="mt-2"> <Link to={`/detail/${x.id}`}  className='button mt-2 '>
                               Buy now
                                </Link></p>
                            </div>
                            </div>
                        </div>
                        
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  );
};

export default Prodoucts;
