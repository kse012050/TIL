import React, { useReducer, useState } from 'react';
import { Link } from 'react-router';

function reducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), name: action.name, is: false }];
        case 'REMOVE':
            return state.filter(name => name.id !== action.id);
        case 'IS':
            return state.map(name => {
                if(name.id === action.id){
                    console.log({...name, is: !name.is});
                    return {...name, is: !name.is};
                }
                return name;
            });
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default function Reducer() {
    const [name, setName] = useState('');
    const [names, dispatch] = useReducer(reducer, [
        { id: Date.now(), name: '김철수', is: false },
        { id: Date.now() + 1, name: '이영희', is: false },
    ]);
    return (
        <div>
            <Link to='/'>목록으로</Link><br/>
            <h2>useReducer()</h2>
            <input type="text" placeholder='이름' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button
                onClick={() => {
                    if (name) {
                        dispatch({ type: 'ADD', name });
                        setName('');
                    }
                }}  
            >
                추가
            </button><br/>
            <ul>
                {names.map((data) => (
                    <li key={data.id}>
                        <span
                            style={{
                                textDecoration: data.is ? 'line-through' : 'none',
                                color: data.is ? 'gray' : 'black'
                            }}
                            onClick={() => dispatch({ type: 'IS', id: data.id })}
                        >
                            {data.name}
                        </span>
                        <button
                            onClick={() => dispatch({ type: 'REMOVE', id: data.id })}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <h3>설명</h3>
            <p>
                <b>복잡한 상태 관리</b>를 할 때 쓰는 React의 Hook<br/>
                "여러 개의 상태값"이나 "상태값의 변경 로직이 복잡할 때"<br/>
                <b>useState 대신 더 구조적으로 상태를 관리할 수 있음.</b><br/>
                <br/>
                상태가 많거나(객체/배열 등) 여러 상태가 한번에 묶여서 바뀌거나<br/>
                상태 변화 로직이 복잡하거나 하나의 액션이 여러 상태를 바꿔야 할 때
            </p>
        </div>
    );
}

