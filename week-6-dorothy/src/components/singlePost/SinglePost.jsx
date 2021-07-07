import "./singlePost.css";
import React, { useContext } from 'react';
import { GlobalContext } from '../../hooks/GlobalState';


export default function SinglePost() {
  const { courses } = useContext(GlobalContext);

  
  return (
    <React.Fragment>
      <div className="singlePost">
        
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <h1 className="singlePostTitle">
          {courses.filter(course => ( 
             <p> {course.title} </p>
          ))}  
                
          </h1>
      
          <p className="singlePostDesc">
            {courses.filter(course => ( 
             <p> {course.description} </p>
            ))} 
            </p>
            
         
            
        </div> 
        
    </div>
    </React.Fragment>
  );
}