import React from 'react';
import useOneBoardInsert from "../hooks/useOneBoardInsert";
import {useSelector} from "react-redux";
import {RootState} from "../modules";

function BoardInsert(){

    const {
        name,
        password,
        content,
        id
    } = useSelector((state: RootState) => {
        const {name, password, content, id} = state.boradInsert;
        return {
            name: name,
            password: password,
            content: content,
            id: id
        }
    });

    const { changeBoard ,boardInsert, boardUpdate} = useOneBoardInsert();

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeBoard({ key: 'id', value: e.target.value });
    }

    const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeBoard({ key: 'password', value: e.target.value });
    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeBoard({ key: 'name', value: e.target.value });
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeBoard({ key: 'content', value: e.target.value });
    }

    const boardInsertFn = () => {
        boardInsert({
            name: name,
            content: content,
            password: password,
            date: '',
            id: ''
        });
    }

    const boardUpdatetFn = () => {
        boardUpdate({
            name: name,
            content: content,
            password: password,
            date: '',
            id: id
        });
    }

    return (
        <>
            <div>
                입력====================================== 추가 수정 안됨
            </div>
            <br/>
            id : <input
            placeholder="id"
            value={id}
            onChange={onChangeId}
        />
            <br/>
            password : <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangePass}
            />
            <br/>
            이름 : <input
                placeholder="이름"
                value={name}
                onChange={onChangeName}
            />
            <br/>
            내용 : <input
            placeholder="내용"
            value={content}
            onChange={onChangeContent}
        />
            <button onClick={boardInsertFn}>추가</button>
            <button onClick={boardUpdatetFn}>수정</button>
            <div>
                ======================================
            </div>
        </>
    )
}

export default BoardInsert;
