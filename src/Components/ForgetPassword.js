import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";


function ForgetPassword() {
 
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  
  const [profile, setprofile] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault()

    

      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("sent mail")
          setprofile(true)
          setmsg("Mail sent successfully")
        })
        .catch((error) => {
          //  const errorCode = error.code;
          //  const errorMessage = error.message;
          const errorCode = error.code;
          if (errorCode === "auth/missing-email") {
            setprofile(false)
            setmsg("*Please enter the mail-Id")
          }
          if (errorCode === "auth/user-not-found") {
            setprofile(false)
            setmsg("User not found.Kindly create an account")
          }

          const errorMessage = error.message;
          console.log(errorCode, errorMessage + "inc")
        })
          // ..
        
    
   
    
 
    }
  // useEffect(() => {
  //   sendPasswordResetEmail(email)

  // }, [profile]);

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form onSubmit={handlesubmit} method="POST">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example1"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example1"
                            id="lemail"
                          >
                            Email address
                          </label>
                       

                          {
                            !profile &&  msg.length > 0 && <div style={{ color: "red" }}>{msg}</div>
                          }
                          {
                            profile && msg.length > 0 && <div style={{ color: "green" }}>{msg}</div>
                          }
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Send mail
                        </button>
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
  );
}

export default ForgetPassword;
