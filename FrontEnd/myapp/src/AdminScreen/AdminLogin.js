import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
    const navigate = useNavigate()
const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
    const AdminHandler = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://127.0.0.1:1214/api/Admin/login',{Email,Password})
            localStorage.setItem("Token",res.data.tokensign)
            alert(res.data.Message)
            setEmail('')
            setPassword('')
            navigate('/admindashboard')
        } catch (error) {
            alert(error.response.data.Message)
        }
    }
    
  return (
    <>
       <div className="limiter">
  <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
    <div className="wrap-login100 p-t-30 p-b-50">
      <span className="login100-form-title p-b-41">
        Admin Login
      </span>
      <form className="login100-form validate-form p-b-33 p-t-5">
        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input onChange={(e)=>setEmail(e.target.value)} value={Email} className="input100" type="text" name="username" placeholder="User name" />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <input onChange={(e)=>setPassword(e.target.value)} value={Password} className="input100" type="password" name="pass" placeholder="Password" />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="container-login100-form-btn m-t-32">
          <button onClick={AdminHandler} className="login100-form-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default AdminLogin
