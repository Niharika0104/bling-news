
import React from "react";
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import NewsInfo from "./NewsInfo";
import Dropdown from "./Dropdown";
const NewsItem = (props) => {

  let { title, description, imageUrl, url, author, publishedAt, source } =
    props;
  return (
    <div id="title">
      <div className="card my-2">
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2022/11/Live-News-Blog-1011_001-2-770x403.jpg"
              : imageUrl
          }
          style={{ width: "400px", height: "300px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "85%", zIndex: "1" }}
            >
              {source}
              <span className="visually-hidden"></span>
            </span>
          </h5>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {publishedAt}
            </small>
          </p>
          <p className="card-text">{description===null?"Some info is there over here":description.substring(0,200)+"..."}</p>

          <div className="d-flex justify-content-between"></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
          
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm  btn-dark"
          >
            Read More
          </a>
     
       
         <Dropdown props={props}/>
          
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
