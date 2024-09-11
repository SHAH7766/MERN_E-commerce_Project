import axios from 'axios'
import React ,{ useState}from 'react'
export const Register = ()=>{
    const[Name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[Address,setAddress]=useState('')
    const[Phone,setPhone]=useState('')
    const RegisterHandler = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://127.0.0.1:1214/api/User/register',{Name,Email,Password,Address,Phone})
            alert(res.data.Message)
        } catch (error) {
            alert(error.response.data.Message)
        }
    }
    return(
        <>
      <div style={{marginTop:"100px"}} className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          
          <h1>
            Register Portal
          </h1>
        </div>
        {/* <br/> */}
        <br/>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input onChange={(e)=>setName(e.target.value)} value={Name} className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)} value={Email} className="form-control form-control-lg" type="text" name="company" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)} value={Password} className="form-control form-control-lg" type="password" placeholder="Enter your Password" />
                </div>
                
                <div className="form-group">
                  <label>Address</label>
                  <input onChange={(e)=>setAddress(e.target.value)} value={Address
                  } className="form-control form-control-lg" type="text" name="password" placeholder="Enter Address" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input onChange={(e)=>setPhone(e.target.value)} value={Phone} className="form-control form-control-lg" type="text" name="text" placeholder="Enter Phone number" />
                </div>
                <div className="text-center mt-3">
                  <button onClick={RegisterHandler} className="btn btn-lg btn-primary w-100">Register</button>
                  {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </>


    )
}