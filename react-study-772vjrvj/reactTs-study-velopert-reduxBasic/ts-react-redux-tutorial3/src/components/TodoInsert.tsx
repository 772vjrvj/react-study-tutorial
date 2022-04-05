import React, {useState} from 'react';
import useAddTodos from "../hooks/useAddTodos";


function TodoInsert(){

    const [value, setValue] = useState('');
    const addTodoo = useAddTodos();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = (e: React.FormEvent ) => {
        e.preventDefault();
        addTodoo(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder='추가할 내용을 입력하세요'
                type='text'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>추가</button>
        </form>
    )
}

export default TodoInsert;
