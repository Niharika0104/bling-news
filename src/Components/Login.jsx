import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import {  getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import {  useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
    const [lemail, setlemail] = useState("");
    const [lpass, setlpass] = useState("");
   const [valid, setvalid] = useState(false);
   const [msg, setmsg] = useState("");
    const handlesubmit= async (e)=>{
   
      e.preventDefault();
      const auth = getAuth();
     // const user = auth.currentUser;

     
     
   
     if(!lemail || !lpass){
      setvalid(true)
      return;
        
       
     }
     

     
    //  const uid = user.uid;
     // console.log(uid+"user")
      
      await  signInWithEmailAndPassword(auth, lemail, lpass)
        .then((userCredential) => {
            // Signed in
           // const user = userCredential.user;
           
            navigate("/")
           // console.log(user+"username");
        })
        .catch((error) => {
            const errorCode = error.code;
            if(errorCode==="auth/user-not-found"){
              setmsg("User not found.Kindly create an account")
            }
            if(errorCode==="auth/wrong-password"){
              setmsg("*Incorrect password")
            }
            
            
            const errorMessage = error.message;
            console.log(errorCode, errorMessage+"inc")
        });
       
  
    }
  return (
    <div>
    <section  style={{backgroundColor: "#eee"}} >
    <div className="container h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" 
        style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={handlesubmit} method='POST'>
  
                <div className="form-outline mb-4">
                  <input type="email" id="form2Example1" value={lemail} onChange={(e)=>{setlemail(e.target.value)}} className="form-control" />
                  <label className="form-label" htmlFor="form2Example1"    id="lemail">Email address</label>
                </div>
              
               
                <div className="form-outline mb-4">
                  <input type="password" id="form2Example2" className="form-control"  value={lpass} onChange={(e)=>{setlpass(e.target.value)}} />
                  <label className="form-label" htmlFor="form2Example2"  id="lpass">Password</label>
                </div>
              
              {valid && <div style={{color:"red"}}>{msg}</div>}
              {!valid && msg.length>0 && <div style={{color:"red"}}>{msg}</div>}
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                 
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                      <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                  </div>
              
                  <div className="col">
                 
                    <a href="/forget-password">Forgot password?</a>
                  </div>
                </div>
              
             
                <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in</button>
              
               
                <div className="text-center">
                  <p>Not a member? <Link to='/register'>REGISTER</Link></p>
                  {/*<p>or sign up with:</p>*/}
                 { /*<button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>
              
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
              
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
              
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
  </button>*/}
                </div>
              </form>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 
  </div>
















  )
}

export default Login
