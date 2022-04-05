import {ActionType} from "typesafe-actions";
import {decrease, increase, increaseBy} from "./actions";

const actions= { increase, decrease, increaseBy}

export type CounterAction = ActionType<typeof actions>

export type CounterState = {
    count: number;
}
