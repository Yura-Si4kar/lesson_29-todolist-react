import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (<>
        <li className={this.props.task.isDone ? 'done' : null}
            onClick={this.onItemClick}>
            {this.props.task.title}
                <span
                className="delete-btn"
                onClick={this.onDeleteBtnClick}
                >
                    &#10006;
                </span>
            </li>
        </>
    )
    }
    
    onItemClick = () => {
        this.props.onToggle(this.props.task.id);
    }

    onDeleteBtnClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.task.id);
    }
}
