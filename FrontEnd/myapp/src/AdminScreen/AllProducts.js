import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [data, setData] = useState([]);
    async function getallpro() {
        try {
          let res = await axios.get("http://127.0.0.1:1214/api/products/users");
            setData(res.data.users)
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        getallpro();
      }, [data]);
      async function Delete(id){
        try {
          await axios.delete(`http://127.0.0.1:1214/api/products/del/${id}`)
          window.location.reload();
        } catch (error) {
            alert(error.response.data.Message)
        }

      }
  return (
    <>
       
    <div className="container">
    <table cellPadding={10} className="table table-hover text-dark container mt-5 ">
           <h2 className='text-center display-4 mt-5'>List of active products</h2>
        <tr>
          
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Instock</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {data.map((x) => {
          return (
            <>
              <tr>
                
                <td>{x.Name} </td>
                <td>{x.Price} </td>
                <td>{x.Category} </td>
                <td>{x.Instock} </td>
                <td>{x.Image} </td>
                <button  className="btn btn-danger mx-2"  onClick={()=>Delete(x._id)}> Delete </button>
                <button className="btn btn-success my-2" > Edit </button>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  <center><Link to='/admindashboard'><button className='btn btn-dark'>Back to dashboard</button></Link></center>
    </>
  )
}

export default AllProducts
