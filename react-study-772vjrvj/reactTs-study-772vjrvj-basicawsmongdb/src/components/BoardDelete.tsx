import React, {useCallback, useState} from 'react';
import {boardDelete} from "../lib/api/board";

function BoardDelete(){

    const [input, setInput] = useState<string>('');

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);


    const boardDeleteFn = () => {
        if(input){
            boardDelete(input);
        }
    }

    return (
        <>
            <div>
                ======================================
            </div>
            <input
                placeholder="id 숫자를 입력하세요"
                value={input}
                onChange={onChange}
            />
            <button onClick={boardDeleteFn}>board1개 제거</button>
            <div>
                ======================================
            </div>
        </>
    )
}

export default BoardDelete;
