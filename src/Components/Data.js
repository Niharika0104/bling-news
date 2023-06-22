import { collection, getDocs } from "firebase/firestore";

import { db } from '../firebase/firebase';

import { getAuth ,onAuthStateChanged} from 'firebase/auth';


let val=[]
let newval=[]
let sources=[]
let userId

let querySnapshot
  let auth = getAuth();
  // const u=getAuth().currentUser
  // if(u){
   
  //  // console.log(u.id)
  // }
  // const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
  
    userId=uid
    // ...
  
   querySnapshot =  getDocs(collection(db, userId));


   
querySnapshot.then((result)=>{
  result.forEach((item)=>{
 // console.log(item)
 
val.push(item.data().data)


  }
  
  
  
  
  )
  for(let i in val){
    newval.push(val[i].source)
  }
  //console.log(newval+"data")
  
  
   sources = newval.filter((c, index) => {

      return newval.indexOf(c) === index;
  });
  
  
  
}



)
}
}






);






 export function getData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( [sources,val,userId])
    },1500)
 
  })
 }
  
 

 