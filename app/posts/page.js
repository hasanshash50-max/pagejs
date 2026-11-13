import Todo from "../component/todo";

export const instant = false;

export default async function post() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const todo = await response.json();

    return (
        <div>
            <h1 style={{
                position: "absolute",
                top: "-40px"
            }}>
                welcome to learn next js
            </h1>

            <h2>{todo.title}</h2>

            <div>
                <Todo />
            </div>
        </div>
    );
}