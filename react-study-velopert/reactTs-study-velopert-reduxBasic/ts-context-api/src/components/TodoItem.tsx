import React from 'react';
import './TodoItem.css';
import {useTodosDispatch} from "../contexts/TodosContext";

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
}

function TodoItem({ todo }: TodoItemProps) {

    const dispatch = useTodosDispatch();

    const onToggle = () => {
        dispatch({
            type: "TOGGLE",
            id: todo.id
        });
    }

    const onRemove =() => {
        dispatch({
            type: "REMOVE",
            id: todo.id
        })
    }

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span onClick={onToggle} className="text">{todo.text}</span>
            <span onClick={onRemove} className="remove">(X)</span>
        </li>
    );
}

export default TodoItem;
