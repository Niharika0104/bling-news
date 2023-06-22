import {React,useState} from 'react'
import './Info.css';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { Link,useNavigate } from 'react-router-dom';
import { useRef } from 'react';
function NewsInfo() {
  const [open , setopen ] = useState(true);
     
    const navigate = useNavigate();
    const ref = useRef(null);
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    // const myFunction=(event)=> {
        // document.getElementById("myDropdown").classList.toggle("show");
//         const dropdown = document.getElementById("myDropdown");

// // Retrieve the trigger element
// const trigger = document.getElementById("dropdownTrigger");

// // Add an event listener to the trigger element
// trigger.addEventListener("click", function() {
//   // Toggle the "show" class on the dropdown element
//   dropdown.classList.toggle("dropdown-content");
// });
//       //}
      
//       // Close the dropdown if the user clicks outside of it

//       let a=document.getElementById("dropbtn");
// console.log(a)
   
// document.addEventListener("DOMContentLoaded", function() {
//   const a = document.getElementById("dropbtn");
  
//   if (a) {
//     a.addEventListener("click", function(event) {
//       // Your event handling logic here
//       if (!event.target.matches('#dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         console.log("kjkjk")
//         console.log(dropdowns+"drop")
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//           }
//         }
//       } 
//     });
//   }
// });


      // a.onClick = function(event) {
      //   if (!event.target.matches('#dropbtn')) {
      //     var dropdowns = document.getElementsByClassName("dropdown-content");
      //     console.log("kjkjk")
      //     console.log(dropdowns+"drop")
      //     var i;
      //     for (i = 0; i < dropdowns.length; i++) {
      //       var openDropdown = dropdowns[i];
      //       if (openDropdown.classList.contains('show')) {
      //         openDropdown.classList.remove('show');
      //       }
      //     }
      //   } 
      // }
let toggleDropdown=()=>{
  console.log("object"+open)
  setopen(!open)
}

  return (
  // onclick={myFunction}
  // <div className="dropdown">
   // </div>
   //<button  id="dropdownTrigger" > <i className="bi bi-three-dots-vertical">Add</i></button>
    <>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  </>
 
  )
}

export default NewsInfo
