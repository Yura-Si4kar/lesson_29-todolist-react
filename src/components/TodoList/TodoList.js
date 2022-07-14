import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default class TaskList extends Component {
    render() {
        return (
            <ol className="input_blocks">
                {this.props.list.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        onDelete={this.props.onDelete}
                        onToggle={this.props.onToggle}
                    />
                ))}
            </ol>
        );
    }
}   