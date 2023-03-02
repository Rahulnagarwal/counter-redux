import React from 'react';
import { useSelector } from 'react-redux';

function Count() {
    const count = useSelector((state) => state);
    console.log("first", count);
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default Count;