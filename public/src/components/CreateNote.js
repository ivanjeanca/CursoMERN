import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        date: new Date(),
        title: '',
        content: '',
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        console.log(this.props.match.params.id)

        const res = await axios.get('http://localhost:3001/api/users')
        this.setState({ 
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        })

        if(this.props.match.params.id) {
            const res = await axios.get('http://localhost:3001/api/notes/' + this.props.match.params.id)
            this.setState({
                editing: true,
                _id: this.props.match.params.id,
                title: res.data.title,
                content: res.data.content,
                userSelected: res.data.author,
                date: new Date(res.data.date)
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()

        const note = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }

        if(this.state.editing) {
            await axios.put('http://localhost:3001/api/notes/' + this.state._id, note)
        } else {
            await axios.post('http://localhost:3001/api/notes', note)
        }
        
        window.location.href = '/'
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeDate = date => {
        this.setState({ date })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Nueva nota</h4>
                    
                    {/* select user*/}

                    <div className="form-group">
                        <select className="form-control" name="userSelected" onChange={ this.onInputChange } value={this.state.userSelected}> 
                            {
                                this.state.users.map(user => 
                                    <option key={ user } value={ user }>
                                        { user }
                                    </option>
                                )
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Titulo" name="title" onChange={ this.onInputChange } value={this.state.title} required/>
                    </div>

                    <div className="form-group">
                        <textarea className="form-control" placeholder="Contenido" name="content" onChange={ this.onInputChange } value={this.state.content} required></textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker className="form-control" selected={ this.state.date } onChange={ this.onChangeDate }/>
                    </div>


                    <form onSubmit={ this.onSubmit }>
                        <button type="submit" className="btn btn-info">
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
