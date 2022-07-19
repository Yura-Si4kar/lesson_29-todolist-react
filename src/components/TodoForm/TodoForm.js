import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        title:'',
    }

    render() {
        return (
            <form className="input_block" onSubmit={this.formSubmit}>
                <input className="input_text" name='title' value={this.state.title} onChange={this.onInputChange} />
                <button className="input_btn">Send Task</button>
            </form>
        );
    }

    onInputChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    formSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: this.state.title,
        };

        this.setState({
            title: '',
        })

        this.props.onAdd(newTask);
    }
}