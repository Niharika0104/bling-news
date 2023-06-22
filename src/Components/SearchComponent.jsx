import React,{useEffect,useState} from 'react';

 import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';
import NotFound from './NotFound';




function SearchComponent() {
  let date1=new Date();
let date=new Date( date1.setDate(date1.getDate() - 15));

const d= date.toISOString().split("T0")[0]



   let {query}=useParams();
   const [articles, setarticles] = useState([])
 
  
  


 
   const updatenews= async ()=>{

   
    
    let  url=await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${d}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
    
 
  
   
   
    
     let parsedJson=await url.json();
     setarticles(parsedJson.articles)
    //  settotalResults(parsedJson.totalResults)
   
    
 
 
    
   }
   useEffect(()=>{updatenews();
  },[query])
  return (
  
    <div className="container"> 
    {articles.length===0 && <NotFound/>}
     {articles.length>0 && <h1 className='text-center'>{`Showing results for ${query}`}</h1>}
    <div className="row">
  {articles.map((element,k)=>{
   return <div className="col-md-4" key={k}>
   <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}
   author={!element.author?"unknown":element.author} publishedAt={new Date(element.publishedAt).toGMTString()}
   source={element.source.name}             />
   </div>
    })}
</div>
</div>
  )
  }

export default  SearchComponent; 
