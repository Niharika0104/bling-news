import React,{useState,useEffect} from 'react'


import { getData } from './Data';
import Spinner from './Spinner';
import PostCard from './PostCard';

function Posts() {
  const [posts, setposts] = useState([]);
  const [fetched, setfetched] = useState(false);
  useEffect(() => {
    getData()
    .then(data =>{
      setposts(data[1])
      setfetched(true)
     
    }
    );
   }, [])




  return (
    
    <div className="container my-3"> 
     {!fetched && posts.length===0 && <Spinner/>}
     {
      fetched && posts.length===0 && <div className='d-flex justify-content-center my-4'>Oops! There are no saved posts </div>
     }
  
    <div className="row">
    
  {posts.map((element,k)=>{
  
   return <div className="col-md-4" key={k}>
 
   <PostCard title={element.title} description={element.description} imageUrl={element.imageUrl} url={element.url}
   author={!element.author?"unknown":element.author} publishedAt={new Date(element.publishedAt).toGMTString()}
   source={element.source===null?"unkown":element.source}             />
   </div>
    })}
</div>
    </div>
  )
}

export default Posts;
