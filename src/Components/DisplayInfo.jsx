import React from 'react'
import './Info.css';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { Link,useNavigate } from 'react-router-dom';

function DisplayInfo() {
     
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    const myFunction=()=> {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onClick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
const style={width:"6.55rem",height:"2.2rem",backgroundColor:"transparent",textAlign:"center",color:"rgb(90, 180, 129)",
padding:"0.2rem",
borderRadius:"0.4rem",marginTop:"0.2rem" ,border:"rgb(90, 180, 129) 1px solid", marginLeft:"1.2rem"


}

  return (
  
    <div className="dropdown">
    <button onClick={myFunction} className="dropbtn" style={style}>My account</button>
    <div id="myDropdown" className="dropdown-content">
     <Link to='/your-articles'>SAVED POSTS</Link>
     <Link to='/following'>FOLLOWING</Link>
     <Link onClick={handleLogout}>SIGNOUT</Link>
    </div>
  </div>
 
  )
}

export default DisplayInfo
