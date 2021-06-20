import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Notes.css';

const Notes = ({
  // destructured props that allows access to the set variables 
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    // .sorts the elements of sortedNotes and returns the sorted array in ascending order 
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="add-note">
        <div className="note-header">
          <h2>Notes</h2>
          <button className="add-btn" onClick={onAddNote}>Add</button>
        </div>

        <div className="app-sidebar-notes">
          {/* .map method creates a new array for the div and its content and it is access data for each with the variables set below */}
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >

              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button className="delete-btn" onClick={(e) => onDeleteNote(id)}>Delete</button>
                <Link to={`/Aboutpg`}>
                <button className="note-btn">Read more</button>
                </Link>
              </div>
  
              <p>{body && body}</p>
              <small className="note-meta">
                Last Modified{" "}
                {/* toLocaledatestring sets the date and time format */}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>

          ))}
        </div>
      </div>
  
    );
  };
export default Notes;  