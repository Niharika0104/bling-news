import React from 'react'
import '../App.css'


import { useState,useEffect } from 'react';

import { getData } from './Data';
function Following() {
const [posts, setposts] = useState([]);
  useEffect(() => {
    getData()
    .then(data =>
      setposts(data[0])
    );
   }, [])




  return (
    <>
    <div className='sourceTitle'>Sources following</div>
    <div className='topicbox'>
      {posts.length===0 && <div style={{color:"green"}}>
        You are not following any sources
      </div>}
      <div>
     { posts.map((item,k)=>{
     return <div style={{boxSizing:"content-box",backgroundColor:"transparent",color:"rgb(90, 180, 129)",margin:"25px",textAlign:"center"}} key={k}>{item}</div>
      })
    }
      </div>
    </div>
    </>
  )
}

export default Following
