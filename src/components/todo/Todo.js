import React, {useState} from 'react';

function Todo({list}) {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState(list);

    return (
        <>
            <div>
                <h2>What needs to be done?</h2>
                <div className="input-group m-3">
                    <input type="text" className="form-control" value={value} onChange={e => setValue(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={e => {
                            e.preventDefault();
                            if (!value) return
                            var todoItem = {'name': value, 'completed': false};
                            setTodos([...todos,todoItem])
                            setValue("")
                        }}> Add</button>
                    </div>
                </div>
            </div>
            <ul className="list-group">
                {todos.map((item, index) =>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <label>
                            {item.name}
                        </label>
                        <button type="button" className="btn btn-outline-danger" onClick={e => {
                            e.preventDefault();
                            todos.splice(index, 1);
                            setTodos([...todos])
                        }}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Todo;