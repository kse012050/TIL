import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [isTimer, setIsTimer] = useState(false);

    // 랜더링 될 때 마다 실행
    useEffect(() => {
        console.log('1. 렌더링될 때마다 실행');
    })

    // 최초 마운트 시에만 실행
    useEffect(() => {
        console.log('2. 최초 마운트 시에만 실행');
    }, [])

    // 의존성 배열에 값이 있을 때
    // 해당 값이 변경될 때마다 실행
    useEffect(() => {
        console.log(`3. count 값이 변경될 때마다 실행, count: ${count}`);
    }, [count])
    useEffect(() => {
        console.log(`3. value 값이 변경될 때마다 실행, value: ${value}`);
    }, [value])
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useEffect()</h2>
            count 값 : { count } <br/>
            <button onClick={()=>setCount(count + 1)}>count 증가</button><br/>
            value 값 : { value } <br/>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='아무거나 입력'/><br/>
            <br/>
            {isTimer && <><Timer /><br/></>}
            <button onClick={()=> setIsTimer(!isTimer)}>타이머 {isTimer ? '종료' : '시작' }</button>

            <h3>설명</h3>
            <p>
                useEffect는 렌더링 후 실행되는 코드를 처리할 때 사용<br/>
                렌더링이 완료된 후에 DOM을 조작하거나, API 호출, 타이머 설정 등을 할 수 있습니다.<br/>
            </p>

            <h3>사용법</h3>
            <strong>1. 랜더링될 때마다 실행</strong>
            <p>
                useEffect(() =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('1. 렌더링될 때마다 실행');<br/>
                &#125;)
            </p>
            <strong>2. 최초 마운트 시에만 실행</strong>
            <p>
                useEffect(() =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('2. 최초 마운트 시에만 실행');<br/>
                &#125;, [])
            </p>
            <strong>3. useSate가 변경될 때마다 실행</strong>
            <p>
                useEffect(() =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('3. count 값이 변경될 때마다 실행, count: {count}');<br/>
                &#125;, [count])
            </p>
            <p>
                useEffect(() =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('3. count 값이 변경될 때마다 실행, count: {value}');<br/>
                &#125;, [value])
            </p>
            <strong>4. 클린업 함수</strong>
            <p>
                useEffect(() =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return () =&gt; &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &#125;, [])
            </p>
        </div>
    );
}

function Timer(){

    useEffect(() => {
        console.log('타이머 시작');
        const timer = setInterval(() => {
            console.log('타이머 실행 중...');
        }, 1000);
        return () => {
            console.log('타이머 종료');
            clearInterval(timer);
        }
    },[])
    return (
        <>
            타이머 돌아가는 중...<br/>
            콘솔을 확인하세요
        </>
    )
}

