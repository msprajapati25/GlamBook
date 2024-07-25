import React, { useState } from 'react'
import './Css/loginsignup.css'

const Loginsignup1 = () => {
  const [state,setState] = useState("Login");
  const [formdata,setFormdata] = useState({
    username:"",
    email:"",
    password:"",
  })

  const changeHandler = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
    
  }

  const login = async()=>{
    console.log("Login function executed",formdata);
    let responseData;
    await fetch('http://localhost:4003/signup',{
      method:'POST',
      headers:{
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),


    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth_token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }
  const Signup = async()=>{
    console.log("Signup function executed",formdata);
    let responseData;
    await fetch('http://localhost:4003/signup',{
      method:'POST',
      headers:{
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),


    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth_token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-feilds">
          {state==="Sign Up"? <input name='username' value={formdata.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>} 
            <input name='email' value={formdata.email} onChange={changeHandler} type="email" placeholder='Your Email Address'/>
            <input name='password' value={formdata.password} onChange={changeHandler} type="password" placeholder=' Password'/>
          </div>
          <button onClick={()=>{state==="Login"?login():Signup()}}>Continue</button>
          {state==="Sign Up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>: <p className='loginsignup-login'>Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
          
         
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          </div>      
    </div>
  )
}

export default Loginsignup1
