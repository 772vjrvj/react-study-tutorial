import {combineReducers} from "redux";
import { all } from 'redux-saga/effects';
import board from './board';
import {boardsSagaFn} from './board/reducer';
import boardList, {boardListSagaFn} from './boardList/reducer';
import boradInsert, {boardInsertSagaFn} from "./boardInsert/reducer";

const rootReducer =combineReducers({
    board, boardList, boradInsert
});

export function* rootSaga() {
    yield all([boardsSagaFn(), boardListSagaFn(), boardInsertSagaFn()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
