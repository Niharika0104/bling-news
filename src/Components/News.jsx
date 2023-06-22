import React, { useState,useEffect } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
 const [articles, setarticles] = useState([])
 const [loading, setloading] = useState(false)
 const [page, setpage] = useState(0)
 const [totalResults, settotalResults] = useState(0)

 

    const updatenews= async ()=>{
     

   
      let url =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${process.env.REACT_APP_API_KEY} &page=${page}&pageSize=${props.pageSize}`);
      setloading(true)
     
     
      
       let parsedJson=await url.json();
      
     
       setarticles(parsedJson.articles)
   settotalResults(parsedJson.totalResults)
   //parsedJson.articles=clean(parsedJson.articles,titles,cleaned) 
    
     setloading(false)
      
     }
    
     useEffect(()=>{updatenews();
   },[])
 
    
    //  const handlePrevClick= async ()=>{
     
    //   let url =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${process.env.REACT_APP_API_KEY} &page=${page-1}&pageSize=${props.pageSize}`);
    
    //   setloading(true)
    //   let parsedJson=await url.json();
    //   setpage(page-1)
    //   setarticles(parsedJson.articles)
    //   setloading(false)
     
    // }
    // const handleNextClick= async ()=>{
    //   let url =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${process.env.REACT_APP_API_KEY} &page=${page+1}&pageSize=${props.pageSize}`);
    //   setloading(true)
     
    //   let parsedJson=await url.json();
    
       
    //   setpage(page+1)
    //   setarticles(parsedJson.articles)
    //   setloading(false)
     
      
    // }
    const fetchMoreData= async ()=>{
      setpage(page+1);
    
     // if(props.isSearched)
     //url=await fetch(`https://newsapi.org/v2/everything?q=${props.query}&from=2023-03-27&sortBy=publishedAt&apikey=${process.env.REACT_APP_API_KEY} &page==${page}&pageSize=${props.pageSize}`)
      let url =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${process.env.REACT_APP_API_KEY} &page=${page}&pageSize=${props.pageSize}`);
      setloading(true);
      let parsedJson=await url.json();
    
     
     setarticles(articles.concat(parsedJson.articles))
      //settotalResults(parsedJson.articles.length);
      setloading(false);
    
    
    
      
   
      
    }
    
  
 
    
   
    
    return (
      <>
    
        
        <div className='my-3'>
            {loading && <Spinner/>}
            <InfiniteScroll
         dataLength={articles.length}
         style={{overflowX:"hidden"}}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
        loader={ <Spinner/> }
      
        >
         {/*!loading &&*/} 
          <div className="container" > 
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
           
     
            
                
                
                 {/*<div className="container d-flex justify-content-between">
            <button disabled={page<=1} className="btn btn-sm  btn-dark my-3" onClick={handlePrevClick}>&larr;Previous</button>
            <button disabled={page+1>Math.ceil(totalResults/10)} className="btn btn-sm  btn-dark my-3"onClick={handleNextClick}>Next&rarr; </button>
          </div>*/}
                
          
            </InfiniteScroll>
            </div>    
      </>
      
    )
 
}

 News.defaultProps = {
  category: 'general',
  country:'in',
  pageSize:20,
 val:""
}
 News.propTypes={
 category:PropTypes.string,
 country:PropTypes.string,
 pageSize:PropTypes.number,
 
}
export default News
