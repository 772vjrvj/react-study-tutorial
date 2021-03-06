import {ActionType} from "typesafe-actions";
import {addTodo, toggleTodo, removeTodo} from './actions';

const actions = {addTodo, toggleTodo, removeTodo}

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type Todos = Todo[];
