import React from 'react';
import {Board} from '../modules/board';

type BoardItemProps = {
    board: Board
}

function TodoItem({ board }: BoardItemProps){
    return (
        <>
            <li>{board.name}</li>
            <li>{board.content}</li>
            <li>{board.date}</li>
            <li>{board.id}</li>
            <div>================</div>
        </>
    )
}

export default TodoItem;
