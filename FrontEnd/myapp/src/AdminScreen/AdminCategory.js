import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminCategory = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Category, setCategory] = useState('');
  const [Image, setImage] = useState(null);
  const [Instock, setStock] = useState('');

  const ProductHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:1214/api/products/register',{Name,Price,Category,Instock,Image});
      alert(res.data.Message);
      setCategory('');
      setName('');
      setPrice('');
      setStock('');
      navigate('/adminproducts');
    } catch (error) {
      alert(error.response.data.Message);
    }
  };

  function ImageHandler(e) {
    setImage(e.target.files[0]);
  }

  return (
    <section className='mt-3'>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Upload Product</p>
                    <form className="mx-1 mx-md-4" onSubmit={ProductHandler}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input onChange={(e) => setName(e.target.value)} value={Name} type="text" id="form3Example1c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1c">Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input onChange={(e) => setPrice(e.target.value)} value={Price} type="number" id="form3Example3c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example3c">Price</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input onChange={ImageHandler} type="file" accept='image/*' id="form3Example4c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4c">Image</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input onChange={(e) => setCategory(e.target.value)} value={Category} type="text" id="form3Example4cd" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4cd">Category</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input onChange={(e) => setStock(e.target.value)} value={Instock} type="text" id="form3Example4cd" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4cd">InStock</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Upload</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCategory;
