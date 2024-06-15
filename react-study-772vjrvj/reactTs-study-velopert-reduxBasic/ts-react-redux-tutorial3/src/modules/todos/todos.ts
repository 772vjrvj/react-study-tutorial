import {ActionType, createAction, createReducer} from "typesafe-actions";

const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'
const REMOVE_TODO = 'todos/REMOVE_TODO'

export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo }

type TodosActionType = ActionType<typeof actions>


export type Todo = {
    text: string;
    id: number;
    done: boolean;
}

type TodosState = Todo[];

const initialState = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false }
]

const todos = createReducer<TodosState, TodosActionType>(initialState, {
    [ADD_TODO]: (state, action) => {
        const nextId = state.length === 0 ? 1 : Math.max(...state.map(todo => todo.id)) + 1
        return state.concat({
            id: nextId,
            text: action.payload,
            done: false
        });
    } ,
    [TOGGLE_TODO]: (state, action) => {
        return state.map(todo => todo.id === action.payload ? {
            ...todo,
            done: !todo.done
        } : todo);
    },
    [REMOVE_TODO]: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
    }
})

export default todos;

