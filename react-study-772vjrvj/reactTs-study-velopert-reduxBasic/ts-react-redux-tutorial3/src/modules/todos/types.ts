import {ActionType} from "typesafe-actions";
import { addTodo, toggleTodo, removeTodo } from './actions'
const actions = {addTodo, toggleTodo, removeTodo }
export type TodosActionType = ActionType<typeof actions>

export type Todo = {
    text: string;
    id: number;
    done: boolean;
}

export type TodosState = Todo[];
