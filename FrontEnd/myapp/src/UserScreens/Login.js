import axios from 'axios'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  const LoginHandler = async(e)=>{
    e.preventDefault()
    try {
        const res = await axios.post('http://127.0.0.1:1214/api/User/login',{Email,Password})
        toast.success(res.data.Message)
        localStorage.setItem("UserToken",res.data.tokensign)
        navigate('/pro')
        // navigate('/pro')
    } catch (error) {
        toast.error(error.response.data.Message)
    }
}
  return (
    <>
  <div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1 className='text-center'>Login Portal</h1>
              
              <div className="input-group mb-5 mt-4   ">
                <span className="input-group-addon"><i className="fa fa-user" /></span>
                <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                <input onChange={(e)=>setPassword(e.target.value)} value={Password} type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                 <button onClick={LoginHandler}  className="buttonLogin">Login</button>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Link className='text-decoration-none' to='/register'>Dont have an account ? <span className='text-primary'>Click here</span> </Link> 
                <Link className='text-decoration-none' to='/adminlogin'> <p className='text-danger'>Admin Login</p></Link>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
<Toaster />
  </div>
</div>

    </>
  )
}

export default Login
