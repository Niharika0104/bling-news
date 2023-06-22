//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import SearchComponent from './Components/SearchComponent';
import ForgetPassword from './Components/ForgetPassword';
import Posts from './Components/Posts';
import Following from './Components/Following';

//import NewsItem from './NewsItem';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const App  =()=> {
  //  const [query, setquery] = useState("")
  // const [isSearched, setisSearched] = useState(false)
  
  //  const handleCallback = (e) =>{
  //   setquery(e)

        
  //       console.log("Appmain"+query)
  //       console.log(window.location.href)
     
  //   }
    
   
        
        return ( 
          <>
       
            <BrowserRouter>
             
             <Navbar  />
            
            
            <Routes>
       
           <Route exact path='/login' element={<Login/>}></Route>
           <Route exact path='/register' element={<SignUp/>}></Route>
           <Route exact path='/your-articles' element={<Posts/>}></Route>
           <Route exact path='/following' element={<Following/>}></Route>
          
           <Route exact path='/forget-password' element={<ForgetPassword/>}></Route>

          <Route exact path='/' element={<News category="general" key='general' pageSize={10} country="in" />}></Route>
       
         <Route exact path='/search/:query'  element={<SearchComponent />}></Route>
         
              
              
           <Route exact path='/general' element={<News category="general" key='general' pageSize={10} country="in"/>} ></Route>
          <Route exact path='/health' element={<News category="health" key='health' pageSize={10} country="in"/>}></Route>
          <Route exact path='/sports' element={<News category="sports"  key='sports' pageSize={10} country="in"/>} ></Route>
           <Route exact path='/entertainment' element={<News category="entertainment" key='entertainment' pageSize={10} country="in"/>} ></Route>
           <Route exact path='/business'  element={<News category="business"  key='business' pageSize={10} country="in"/>}></Route>
           <Route exact path='/science'   element={<News category="science"  key='science' pageSize={10} country="in"/>} ></Route>
          <Route exact path='/technology'  element={<News category="technology" key='technology'  pageSize={10} country="in"/>}></Route>
         

            </Routes>
        
           
           </BrowserRouter>
      
         </>
         
   
        )
    
}
export default App;
App.defaultProps = {
   query:"",
   isSearched:false,
  }