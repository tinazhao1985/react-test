import React, {useState, useEffect} from 'react';

function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="col-lg text-center">
            <p>You clicked {count} times! </p>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Count;