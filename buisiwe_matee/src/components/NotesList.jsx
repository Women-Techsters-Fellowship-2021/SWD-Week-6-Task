import React, { Component, Fragment } from 'react'
import NotesItem from '../components/NotesItem'

export default class NotesList extends Component {
    render() {
        const {
            items,
            updateNotesToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneNotes,
            handleDeleteDoneNotes,
            handleNotesDetails
        } = this.props

            /* Wrapping up similar elements */
        return (
            <Fragment>
                <h3 className="text-center">
                    My Notes
                </h3>

                <div className="row">
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateNotesToShow("all")}
                        >
                            Display My Notes
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateNotesToShow("done")}
                        >
                            Finish
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateNotesToShow("Notes")}
                        >
                            Notes
                        </button>
                    </div>
                </div>

                {
                items.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            items.map(item => {
                                return (
                                    <NotesItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneNotes={handleDoneNotes}
                                        handleNotesDetails={handleNotesDetails}
                                    />
                                )
                            })
                        }

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={handleDeleteDoneNotes}
                                >
                                    Delete Done Notes
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={clearList}
                                >
                                    Delete All Notes
                                </button>
                            </div>
                        </div>
                    </ul>
                }
            </Fragment>
        )
    }
}
