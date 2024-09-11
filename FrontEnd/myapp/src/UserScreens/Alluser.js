import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
const Alluser = () => {
  const [data, setData] = useState([]);
  async function getUsers() {
    try {
      let res = await axios.get("http://127.0.0.1:1214/api/User/users");
      setData(res.data.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  const Delete = async(id)=>{
    try {
        let res = await axios.delete(`http://127.0.0.1:1214/api/User/delete/${id}`)
        alert(res.data.Message)
        window.location.reload()
    } catch (error) {
        
    }

  }
  return (
    <>
    {data.length ==0 ? (<h1>No record found</h1>) : ( 
      <table cellPadding={10} className="table table-hover container mt-5 text-dark ">
        <h2 className='text-center display-4 mt-5'>List of active clients</h2>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        {data.map((x) => {
          return (
            <>
              <tr>
                
                <td>{x.Name} </td>
                <td>{x.Email} </td>
                <td>{x.Password} </td>
                <td>{x.Address} </td>
                <td>{x.Phone} </td>
                <button  className="btn btn-danger"  onClick={()=>Delete(x._id)}> Delete </button>
                <button className="btn btn-success my-2" > Edit </button>
              </tr>
            </>
          );
        })}
      </table>
  )}
  <center><Link to='/admindashboard'><button className='btn btn-dark'>Back to dashboard</button></Link></center>
    </>
  );
};

export default Alluser;
