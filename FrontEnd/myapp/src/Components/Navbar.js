import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetTotalCart } from "../Redux/CartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { Cart } = useSelector(state => state.name);
  const navigate = useNavigate();

  const LogoutAdmin = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  const LogoutUser = () => {
    localStorage.removeItem("UserToken");
    navigate("/login");
  };

  useEffect(() => {
    dispatch(GetTotalCart());
  }, [dispatch]);

  return (
    <>
      {localStorage.getItem("Token") ? (
        <nav
          style={{ backgroundColor: "#192a56" }}
          className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <h2 className="text-warning">Admin Panel</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/adminproducts">
                    AllProducts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/users">
                    Active users
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link to="/admincategory">
                  <button className="btn btn-warning mx-2">
                    Add a category
                  </button>
                </Link>
                <button onClick={LogoutAdmin} className="btn btn-danger">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h2 className="text-danger">Ghazi Fabrics</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/pro">
                    Products
                  </Link>
                </li>
              </ul>
              {localStorage.getItem("UserToken") ? (
                <form className="d-flex" role="search">
                  <Link to="/cart">
                    <button className="btn btn-warning mx-3">
                      <i className="fa-solid fa-cart-shopping">
                        <span className="mx-2">{Cart.length}</span>
                      </i>
                    </button>
                  </Link>
                  <button onClick={LogoutUser} className="btn btn-danger">
                    Logout
                  </button>
                </form>
              ) : (
                <form className="d-flex" role="search">
                  <Link to="/login">
                    <button className="btn btn-info btn-lg">Login</button>
                  </Link>
                </form>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
