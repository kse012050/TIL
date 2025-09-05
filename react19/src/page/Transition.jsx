import React, { useState, useTransition } from 'react';
import { Link } from 'react-router';

const bigList = Array(10000)
  .fill()
  .map((_, i) => `아이템 ${i}`);

export default function Transition() {
    const [value, setValue] = useState('');
    const [filtered, setFiltered] = useState(bigList);
    const [isPending, startTransition] = useTransition();

    const onChange = (e) => {
        const value = e.target.value;
        setValue(value);

        startTransition(() => {
            const result = bigList.filter(item =>
                item.includes(value)
            );
            setFiltered(result);
        });
    }

    return (
        <div className='transitionPage'>
            <Link to='/'>목록으로</Link>
            <h2>useTransition()</h2>
            <input type="text" value={value} onChange={onChange} />
            {isPending 
                ? '로딩 중...' :
                <ul>
                    {filtered.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            }
            <h3>설명</h3>
            <p>
                상태 업데이트를 "<b>급한 것</b>"과 "<b>덜 급한 것</b>"으로 <b>나눠서 처리</b>하게 도와줌<br/>
                즉, 입력 등 사용자 인터랙션(급한 것)은 바로 반영,<br/>
                무거운 작업(덜 급한 것)은 브라우저가 "틈날 때" 처리해서<br/>
                UI가 끊기지 않고 쾌적하게 작동!<br/>
                <br/>
                급한 상태와 느긋한 상태를 분리<br/>
                <b>급한 상태</b>: 입력창 입력값, 즉각 반영되어야 하는 값 등<br/>
                <b>덜 급한 상태</b>: 대량 데이터 필터링, 무거운 리스트 생성, 검색 결과 업데이트 등<br/>
                <br/>
            </p>
            <h3>사용법</h3>
            <p>
                [isPending, startTransition] = <b>useTransition();</b><br/>
                <b>isPending</b>: transition 안의 작업이 "진행 중"일 때 true<br/>
                <b>startTransition(cb)</b>: 이 안에 넣은 상태 업데이트는 "덜 급한 것"으로 스케줄<br/>
            </p>
            <Link to='/deferredValue'>useDeferredValue()와 차이점 보기</Link>
        </div>
    );
}

