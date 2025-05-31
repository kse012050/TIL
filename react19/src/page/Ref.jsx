import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

export default function Ref() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useRef()</h2>
            <div>현재: {count}</div>
            <div>이전: {prevCountRef.current}</div>
            <button onClick={() => setCount(c => c + 1)}>증가</button>
            
            <h3>설명</h3>
            <p>
                "참조(Reference)"를 저장할 수 있게 해줌<br/>
                <b>화면에 직접 접근하거나, 리렌더링과 상관없이 값을 저장하고 싶을 때 useRef!</b><br/>
                컴포넌트가 다시 렌더링돼도 값이 유지됨<br/>
                그러나, <b>값이 바뀌어도 렌더링이 발생하지 않음!</b><br/>
                <br/>
                <b>DOM 요소 직접 접근</b> (ex: input, div 등)<br/>
                <b>렌더링과 상관없는 값 저장</b> (ex: 이전 값, 타이머 ID 등)
            </p>
        </div>
    );
}

