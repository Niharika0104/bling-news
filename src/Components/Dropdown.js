import React,{useState,useEffect} from 'react'


import { db } from '../firebase/firebase';


import { doc, setDoc,collection } from "firebase/firestore"; 
import { getData } from './Data';


 function Dropdown(props) {

 // console.log(title+" "+description+"hoho")
 const [islogged, setislogged] = useState(null);

 
  let data=props.props
  useEffect(() => {
    getData()
    .then(data =>{
     // setposts(data[1])
   
      setislogged(data[2])
      //setfetched(true)
     
    }
    );
   }, [])

  
  


 // const articleRef = doc(db, "articles", user.uid);


  function saveData(args){
  if(islogged==null){
    return
  }
  
  const arRef = collection(db,islogged);
  

  // addDoc(arRef,val).then((docRef)=>{
  //   console.log("hello")
  //   console.log(docRef.id)
  // })
  setDoc(doc(arRef, data.title), {
    data });



  
 }
  return (
    <div >
    <div className="dropdown">
    <button style={{width:'5rem',height:'2rem',textAlign:'left',backgroundColor:'black' ,color:'white'}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    More
  </button>
  
  
  
   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <div className="dropdown-item" onClick={ ()=>{
      if(islogged!=null){
     saveData(data)
      }
      else{
     alert("please login in order to save posts")
      

       
      }
    }
     } >Save post</div>
     <div className="dropdown-item"  >Follow Source</div>
     
   </div>
 </div>
    </div>
  )
}

export default Dropdown
