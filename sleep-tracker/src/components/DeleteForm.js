import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './deleteForm.css'

class DeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,

        };
    }
    deleteId = (event, id) => {

        // event.preventDefault();
        axios.delete(`https://lambda-sleep-tracker.herokuapp.com/api/users/sleeps/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log("SLEEP ENTRY HAS BEEN SUCCESSFULY DELETED")
            })

    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }



    render() {
        return (
            <div className="DeleteFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Sleep ID:
            <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button onClick={() => this.deleteId(this.state.id)} type="button">Delete Entry</button>
                </form>
            </div>
        )
    }
}

export default DeleteForm;