import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount(){
        this.getNotes()
    }

    async getNotes() {
        const res = await axios.get('http://localhost:3001/api/notes')
        this.setState({ notes: res.data })
    }

    deleteNote = async (id) => {
        await axios.delete('http://localhost:3001/api/notes/' + id)
        this.getNotes()
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={ note._id }>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{ note.title }</h5>
                                    <Link className="btn btn-info" to={"/edit/" + note._id}>
                                        Editar nota
                                    </Link>
                                </div>
                                <div className="card-body">
                                    { note.content }
                                </div>
                                <div className="card-footer">
                                    <h5>Autor: { note.author }</h5>
                                    { format(note.date) }
                                    <br/> <br/>
                                    <button className="btn btn-warning" onClick={() => this.deleteNote(note._id)}>
                                        Borrar nota
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
