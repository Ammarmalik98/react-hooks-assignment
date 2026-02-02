import { useState } from 'react';
import './TodoList.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [deleteCandidate, setDeleteCandidate] = useState(null);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setTodos([...todos, {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }]);
        setInput('');
    };

    const requestDelete = (id) => {
        setDeleteCandidate(id);
    };

    const confirmDelete = () => {
        setTodos(todos.filter(todo => todo.id !== deleteCandidate));
        setDeleteCandidate(null);
    };

    const cancelDelete = () => {
        setDeleteCandidate(null);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="card todo-card">
            <h2>Todo List</h2>

            <form onSubmit={handleAdd} className="todo-form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What needs to be done?"
                    className="todo-input"
                />
                <button type="submit" className="btn-add">Add</button>
            </form>

            <ul className="todo-list">
                {todos.length === 0 && <li className="empty-state">No tasks yet! Add one above.</li>}

                {todos.map(todo => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span onClick={() => toggleTodo(todo.id)} className="todo-text">
                            {todo.text}
                        </span>
                        <button
                            onClick={() => requestDelete(todo.id)}
                            className="btn-delete"
                            aria-label="Delete todo"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>

            {deleteCandidate && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirm Deletion</h3>
                        <p>Are you sure you want to delete this?</p>
                        <div className="modal-actions">
                            <button onClick={cancelDelete} className="btn-cancel">Cancel</button>
                            <button onClick={confirmDelete} className="btn-confirm-delete">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
