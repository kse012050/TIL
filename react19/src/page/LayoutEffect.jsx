import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router';

function getNumbers() {
    const numbers = [];
    for (let i = 0; i < 1/* 0000 */; i++) {
        numbers.push(i);
    }
    return numbers;
}

export default function LayoutEffect() {
    const effectRef = useRef(null);
    const layoutEffectRef = useRef(null);

    useEffect(() => {
        effectRef.current.scrollTop = effectRef.current.scrollHeight;
    }, [])

    useLayoutEffect(() => {
        layoutEffectRef.current.scrollTop = layoutEffectRef.current.scrollHeight;
    }, [])

    return (
        <div className='layoutEffectPage'>
            <Link to='/'>목록으로</Link><br/>
            <Link to='/effect'>useEffect()</Link>
            <h2>useLayoutEffect()</h2>
            <strong>useEffect() 예시</strong>
            <div ref={effectRef}>
                {getNumbers().map((number, index) => (
                    <p key={index}>
                        {number}
                    </p>
                ))}
            </div>
            <strong>useLayoutEffect() 예시</strong>
            <div ref={layoutEffectRef}>
                {getNumbers().map((number, index) => (
                    <p key={index}>
                        {number}
                    </p>
                ))}
            </div>

            <h3>설명</h3>
            <p>
                useEffect랑 사용 방법은 동일, <b>실행 타이밍이 다름!</b><br/>
                <b>DOM을 그린 직후, 브라우저가 화면에 그리기 전에 실행됨.</b><br/>
                <b>DOM 요소의 위치, 크기, 스크롤 등을 바로 읽거나 변경</b>해야 할 때 사용합니다.<br/>
                <br/>
                이걸 useEffect로 하면 "화면이 먼저 그려지고→나중에 변경"되어서<br/>
                깜빡임(Flash, FOUC)이 생길 수 있음<br/>
                <br/>
                <b>useEffect</b>: "브라우저가 화면에 그리고 난 다음" 실행 <b>(비동기적)</b><br/>
                <b>useLayoutEffect</b>: "DOM 변경 직후, 브라우저가 그리기 전" 실행 <b>(동기적)</b>
            </p>
        </div>
    );
}

