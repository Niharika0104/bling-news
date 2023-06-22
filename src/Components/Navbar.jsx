import React, { useState, useEffect ,} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';

import DisplayInfo from './DisplayInfo';
import { auth } from '../firebase/firebase';
const Navbar = () => {
  const [login, setlogin] = useState(false);
    useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
       setlogin(true);
      
      }
      else{
        setlogin(false);
     
      }
    })
    }, []);
  const [box, setbox] = useState("")
  const [loading, setloading] = useState(true);
 
  
        
  let navigate = useNavigate();
  const updatetheme = () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      window.localStorage.setItem("theme", "light")
      document.documentElement.setAttribute("data-bs-theme", "light")

    }
    else {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.setAttribute("data-bs-theme", "dark")
    }
  }


  const onTrigger =async  (event) => {
   
    event.preventDefault();


  
   

   navigate(`/search/${box}`)
    
  }
  const func = (event) => {
 
    setbox(event.target.value)
  
  
    setloading(!loading)
  
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/" >BlingNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

            </ul>
            <div className="nav-item">
              <div onClick={updatetheme}>
              <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  style={{backgroundColor:"rgb(90, 180, 129)"}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
              
              
              </div>
            </div>

            <form className="d-flex" role="search" onSubmit={onTrigger} method='post' >
              <input className="form-control me-2" value={box}  style={{marginLeft:"1rem",color:"rgb(90, 180, 129)",border:"rgb(90, 180, 129) 1px solid"}} type="search" placeholder="Search" name="query" aria-label="Search" onChange={func} />
              <button className="btn "  style={{color:"rgb(90, 180, 109)",border:"rgb(90, 180, 129) 1px solid"}} type="submit" id="final" disabled={!box}  >Search</button>
            </form>
            <div className="nav-item">
           { !login &&  <Link className="nav-link" to="/login" style={{color:"rgb(90, 180, 129)",marginLeft:"1rem"}} >LOGIN/REGISTER</Link>}
            {login && <DisplayInfo/>}
         {/*  { login &&   <Link className="nav-link" to="/ " onClick={()=>{setlogin(false)}}>SIGNOUT</Link>}*/}

          </div>
         
         
          </div>
        </div>
      </nav>
   </div>
  )
}


export default Navbar
