import React from 'react'

export default function Header() {
    return (
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
    )
}
