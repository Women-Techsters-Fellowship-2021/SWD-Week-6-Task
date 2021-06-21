import React from 'react';
import ReactMarkdown from "react-markdown";


const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (field, value) => {
      onUpdateNote({
        ...activeNote,
        [field]: value, 
        lastModified: Date.now(),
      });
    };
  
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  
    return (
      <div className="main">
        <div className="main-note-edit">
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
          <textarea rows="5"
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
          />
        </div>
        <div className="main-note-preview">
          <h3 className="preview-title">{activeNote.title}</h3>
          <ReactMarkdown className="markdown-preview">
            {activeNote.body}
          </ReactMarkdown>
        </div>
      </div>
    );
  };
  
  export default Main;