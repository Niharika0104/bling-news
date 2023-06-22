import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [resetpass, setresetpass] = useState("");
    const [msg, setmsg] = useState("");
    
    const  handlesubmit= async (e)=>{
      e.preventDefault();

   if(!email || !name || !password || !resetpass){
     setmsg("*Please fill all the details")
     return;
   }
   else if(password !==resetpass){
     setmsg("*Password dont match")
     return;
   }
   else if(password.length<8){
     setmsg("*Password must contain atleast 8 characters");
     return;
   }
   else if(!document.getElementById('checkbox').checked){
     setmsg("*Please agree with the terms and conditions")
     return;
   }
   else{
     let n=0,c=0,s=0;
      c=password.match(/[a-z]/i)===null?0:password.match(/[a-z]/gi).length;
   
      n=password.match(/\d/g)===null?0:password.match(/\d/g).length;
    
     s=password.length-n-c;
     if(s===0 || c===0 || n===0){
       setmsg("*Password must contain digits,characters,special characters")
       return;
     }
    
     

   }
      // const authentication = getAuth();
      //if(password===resetpass && name!=="" && email!==""){
     
    

      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          navigate("/login");
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          if(errorCode==="auth/email-already-in-use"){
            setmsg("*Email-Id is already registered please login..")
          }
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
    })
   
  

  

  
  }
  return (
    <div>
    <section className="mt-4" style={{backgroundColor: "#eee"}} >
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" 
          style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4" onSubmit={handlesubmit} method='POST'>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">

                        <input type="text" placeholder='Your Name' value={name} id="name" onChange={(e)=>setname(e.target.value)} className="form-control" />
                       
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" placeholder='Your email' value={email}  id="email" onChange={(e)=>setemail(e.target.value)} className="form-control" />
                     
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" placeholder=' Password' value={password} id="pass" onChange={(e)=>setpassword(e.target.value)} className="form-control" />
                      
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" placeholder='Repeat password' value={resetpass}  id="passreset" onChange={(e)=>setresetpass(e.target.value)} className="form-control" />
                       
                      </div>
                    </div>
                    {
                      msg.length>0 && <div className='mx-3' style={{color:"red"}}>{msg}</div>
                    }
  
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-8">

                     <div className='flex-item'> <button type="submit" className="btn btn-primary btn-lg mx-4" >Register</button></div>
                    
                    </div>
                    <div className='text-center'>
                      Already have an account?{<Link  to='/login'>LOGIN</Link>}
                      </div>
  
                  </form>
  
                </div>
               { /*<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/>
  
  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


    <div>
    Already have an account?{<Link to='/login'>LOGIN</Link>}
  </div>
    </div>
  )
}

export default SignUp
