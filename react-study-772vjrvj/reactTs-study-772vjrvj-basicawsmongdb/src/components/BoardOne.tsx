import React, {useCallback, useState} from 'react';
import useOneBoard from '../hooks/useOneBoard';
import {useSelector} from 'react-redux';
import {RootState} from '../modules';
import BoardItem from './BoardItem';


function BoardOne(){

    const boardOne = useSelector((state: RootState) => state.board);
    const [input, setInput] = useState<string>('');
    const oneBoard = useOneBoard();
    const getOne = () => {
        if(input){
            console.log('input :', input);
            oneBoard(input);
        }
    }

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    return (
        <>
            <input
                placeholder="id 숫자를 입력하세요"
                value={input}
                onChange={onChange}
            />
            <button onClick={getOne}>board1개 가져오기</button>
            <ul>
                <BoardItem board={boardOne}/>
            </ul>
        </>
    )
}

export default BoardOne;
