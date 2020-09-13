import React from 'react'

export default function Task(props) {
    return (
        <div className="task" id={props.index}>
            <div className="task__left">
                <p><input type="checkbox" /></p>
                <div className="task-text">{props.title}</div>
            </div>
            <div className="task__right">
                <div className="task-date">{props.date}</div>
                <a onClick={props.removeTodo.bind(null, props.index-1)}><div className="task-del"></div></a>
            </div>
        </div>
    )
}
