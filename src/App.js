import React from 'react';
import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="#">React ToDo List</a>
        </div>
        <div className="header-links">
          <a href="#">Главная</a>
          <a href="#">Заметки</a>
          <a href="#">О сайте</a>
        </div>
      </div>
      <div className="main">
        <div className="task-input">
          <p><input type="text" size="40" placeholder="Новое задание" id="task_input" value="" /></p>
          <p><input type="date" placeholder="Дата" id="task_date" /></p>
          <p><input type="submit" name="commit" value="Добавить" /></p>
          <p><input type="button" name="commit" value="Удалить все" /></p>
        </div>
        <div className="task-list">
          <div className="task">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
