import React, {useState} from 'react';
import Home from './components/home/Home'
import Count from './components/count/Count'
import Todo from './components/todo/Todo'

function App(props) {
    const [body, setBody] = useState(1);

    return (
        <>
        <div className="navbar navbar-expand-lg navbar-static-top">
            <a className="navbar-brand" href="#">React Exercise</a>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => setBody(1)}>Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => setBody(2)}>Count</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => setBody(3)}>Todo</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="text-center">
            {body === 1 ? (
                <Home subject={props.subject}/>
            ) : body === 2 ? (
                <Count />
            ) : body === 3 ? (
                <Todo list={props.todoList}/>
            ) : <br/>}
        </div>
        </>
    );
}

export default App;
