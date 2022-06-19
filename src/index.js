import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const todoList = [{'name': 'task1', 'completed': true},
    {'name': 'task2', 'completed': false},
    {'name': 'task3', 'completed': false}
];

root.render(
    <React.StrictMode>
        <App subject="Tina!" todoList={todoList}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
