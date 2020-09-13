import React from 'react';
import Task from './Task';

export default function Main() {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState();
    const [date, setDate] = React.useState();

    function addTodo(title, date) {
        setTodos(todos.concat([{
            title,
            completed: false,
            date: date
        }]));
    }

    function removeTodo(id) {
        setTodos(todos.filter((eleme, index) => index !== id));
    }

    function submitHandler(event) {
        event.preventDefault();

        if (input.trim()) {
            addTodo(input, date);
            setInput("");
            setDate("");
        }
    }

    function delHandler(event) {
        event.preventDefault();
        setTodos([]);
    }

    function inputChange(e) {
        setInput(e.target.value);
    }

    function dateChange(e) {
        setDate(e.target.value);
    }

    return (
        <div className="main">
            <div className="task-input">
                <p><input type="text" size="40" placeholder="Новое задание" id="task_input" value={input || ''} onChange={inputChange} /></p>
                <p><input type="date" placeholder="Дата" id="task_date" value={date || ''} onChange={dateChange} /></p>
                <p><input type="submit" onClick={submitHandler} name="commit" value="Добавить" /></p>
                <p><input type="button" onClick={delHandler} name="commit" value="Удалить все" /></p>
            </div>
            <div className="task-list">
                {todos.length ? (todos.map((element, index) => <Task title={element.title} key={index} index={index + 1} date={element.date} removeTodo={removeTodo} />)) : <p>Список пуст</p>}
            </div>
        </div>
    )
}
