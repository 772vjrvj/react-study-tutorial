import {createReducer} from "typesafe-actions";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actions";
import {Todos, TodosAction} from "./types";

const initialState: Todos = [
    {
        id: 1,
        text: '타입스크립트 배우기',
        done: false,
    },
    {
        id: 2,
        text: '타입스크립트와 리덕스 함께 사용해보기',
        done: true,
    },
    {
        id: 3,
        text: '투두리스트 만들기',
        done: true,
    },
]

const reducer = createReducer<Todos, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => {
        const nextId: number = state.length === 0 ? 1 : Math.max(...state.map(todo => todo.id)) + 1;
        return state.concat({
            id: nextId,
            text: action.payload,
            done: false,
        }) ;
    },
    [TOGGLE_TODO]: (state, action) => {
        return state.map(todo => todo.id === action.payload ?
            {...todo, done: !todo.done}:
            todo
        );
    },
    [REMOVE_TODO]: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
    }
});


export default reducer;
