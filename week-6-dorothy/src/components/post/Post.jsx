import { Link } from "react-router-dom";
import "./post.css";
import React, { useContext } from "react";
import { GlobalContext } from '../../hooks/GlobalState';

export default function Post({img}) {
  const { courses } = useContext(GlobalContext);


  return (
    <React.Fragment>
    {courses.length > 0 ? (
      <React.Fragment>
      {courses.map((course) => (

      
    
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts">
              Javascript
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts">
              React
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post" className="link"> 
            {course.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      
      <p className="postDesc">
        {course.description}
      </p> 
    </div>
    ))}
    </React.Fragment>
    ) : (
      <p>No Data </p>
    )}
    </React.Fragment>
  );
}