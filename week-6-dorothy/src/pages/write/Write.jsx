 //import useContextGetter from '../../hooks/useContextGetter';
 import { useHistory } from "react-router-dom";
 import React, { useState, useContext } from 'react';
 import { GlobalContext } from '../../hooks/GlobalState';

import "./write.css";

export default function Write() {
  let history = useHistory();
  const { addCourse, courses } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: courses.length + 1,
      title,
      description,
    };
    addCourse(newCourse);
    history.push("/posts");
  };
  
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form onSubmit={onSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
          id="fileInput" 
          type="file" 
          style={{ display: "none" }} />
          <input
            className="writeInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            id="title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell your story..."
            type="text"
            id="desc"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}