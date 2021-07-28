import React, { Component } from 'react'

export default class NotesInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a notes here..."
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                    >
                        {editItem ? 'Edit notes' : 'Add notes to list'}
                    </button>
                </form>
            </div>
        )
    }
}
