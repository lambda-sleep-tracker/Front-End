import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './deleteForm.css'

class DeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                id: "",
            }
        };
    }
    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.delete()
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="DeleteFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Sleep Date ID:
            <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteForm;