import Paper from '@mui/material/Paper'
import {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Login() {
   
   
    const [Email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[EmailErr,setEmailErr]=useState('')
    const[passwordErr,setPasswordErr]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()
    return (
      
        <div style={{position:"relative",left:900,top:200}}>
        
        <div style={{postion:"absolute"}}>
        <>
    
    

    
        <div class="Login">
  <h1> Login Page </h1>
  <label >Enter EmailId</label><br/>
 
  
     <input type='text' placeholder='EmailId'  onChange={(e)=>{
         let cemail=e.target.value
        var con=String(cemail).toLowerCase().match("^[a-zA-Z0-9][a-zA-Z0-9_.]+@[a-zA-Z0-9]+([.][a-z]+)+$")
        if(con || cemail.length<=0)
        {
            setEmail(e.target.value)
            setEmailErr('')
        }
        else{
            setEmailErr("invalid EmailId")
        }
     }} />
     <div><span style={{color:"darkred"}}>{EmailErr}</span></div><br/>
     <label>Enter Password</label><br/>
     <input type='password' placeholder='password' onChange={(e)=>{
         if(e.target.value.length>=8 && e.target.value.length<15)
         {
             setPassword(e.target.value)
             setPasswordErr('')
         }
         else{
             setPasswordErr("password should contain 8 characters")
         }
         }}/>
         <div><span style={{color:"darkred"}}>{passwordErr}</span></div><br/>
     <input  type='button' value='Login' onClick={()=>{

       axios.get(`http://localhost:9091/findcredentials/${Email}`)
            .then((res)=>{
                var data=res.data
                if(data.role==="admin")
                {
                        if(data.adminEmail===Email && data.password===password )
                        {
                            sessionStorage.setItem("Email",data.adminEmail)  
                    navigate("/home")        
                        }
                        else
                        {
                            setStatus("invalid details")
                        }
                }

                
                
                else if(data.role==="user")
                {

                    if(data.userEmail===Email && data.password===password )
                    {
                        sessionStorage.setItem("username",data.adminEmail)
                navigate("/user")        
                    }
                    else
                    {
                        setStatus("invalid details")
                    }

            
                }
            })
            



     }} /><br/>
     <Link to="/forgotpage"><b>forgot password?</b></Link><br/>
     
    <p class="text"><b>New User?</b> <Link to="/register"><b>Register</b></Link>  </p> 
     {status}
    </div>
 
  
    
    </>
    </div>
     </div>
    )
   
}

export default Login