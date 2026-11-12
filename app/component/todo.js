"use client";

import { useState, useEffect } from "react";

export default function () {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        async function getTodo() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

            const result = await response.json();

            setTodo(result);
        }

        getTodo();
    }, []);

    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    );
}