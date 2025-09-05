import React, { useDeferredValue, useState } from 'react';
import { useTransition } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router';

export default function DeferredValue() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text); // 입력값을 지연시킴
    const [text2, setText2] = useState("");
    const [listText, setListText] = useState("");
    const [isPending, startTransition] = useTransition();

    // 리스트를 생성 (렌더링 부하 시뮬레이션)
    const list = useMemo(() => {
        const size = 2000;
        const filtered = [];
        for (let i = 0; i < size; i++) {
            const item = `${deferredText} - 항목 ${i + 1}`;
            filtered.push(<div key={i}>{item}</div>);
        }
        return filtered;
    }, [deferredText]);

    const list2 = useMemo(() => {
        const size = 2000;
        const filtered = [];
        for (let i = 0; i < size; i++) {
            const item = `${listText} - 항목 ${i + 1}`;
            filtered.push(<div key={i}>{item}</div>);
        }
        return filtered;
    }, [listText]);

     const handleChange = (e) => {
            const value = e.target.value;
            setText2(value); // 즉시 반영되는 상태 (input)
            
            // 무거운 업데이트는 트랜지션으로 처리 (지연 가능)
            startTransition(() => {
            setListText(value);
        });
    };
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useDeferredValue()</h2>
            
            <h3>설명</h3>
            <p>
                상태 최적화용 Hook
                입력값(상태)이 바뀔 때 "느긋하게" 반영해서
                UI가 버벅이는 걸 막아주는 용도
                복잡한 리스트나 UI는 입력이 끝나고 잠시 후에 반영해도 괜찮을 때 사용
            </p>

            <h3>useTransition()와 차이점</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>항목</th>
                        <th>useDeferredValue()</th>
                        <th>useTransition()</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>작동 대상</th>
                        <td>값(value)을 지연시킴</td>
                        <td>상태 업데이트(setState) 자체를 지연시킴</td>
                    </tr>
                    <tr>
                        <th>사용 위치</th>
                        <td>렌더링 안에서 (<mark>const deferred = useDeferredValue(value)</mark>)</td>
                        <td>이벤트 처리 안에서 (<mark>startTransition(() =&gt; setState())</mark>)</td>
                    </tr>
                    <tr>
                        <th>용도</th>
                        <td>입력값은 즉시 반영하되, 비싼 연산 결과를 늦게 렌더링</td>
                        <td>입력에 따른 무거운 상태 변경을 “우선순위 낮게” 처리</td>
                    </tr>
                    <tr>
                        <th>공통점</th>
                        <td colSpan={2}>둘 다 <b>UI 끊김을 줄이고 반응성 향상</b></td>
                    </tr>
                </tbody>
            </table>

            <h3>상황별 핵심 요약</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>상황</th>
                        <th>이유</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>사용자의 입력은 즉시 반영되어야 하지만, 결과 계산이 느린 경우</td>
                        <td>입력값은 바로 보여주고, 그걸 이용한 비싼 연산만 늦게</td>
                    </tr>
                    <tr>
                        <td>사용자의 입력이 비싼 상태 업데이트로 이어질 때</td>
                        <td>상태 업데이트 자체를 낮은 우선순위로 늦춰서 렌더 끊김 방지</td>
                    </tr>
                </tbody>
            </table>

            <h3>핵심 비교 요약</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th><mark>useDeferredValue</mark></th>
                        <th><mark>useTransition</mark></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>문제 상황</th>
                        <td>결과 <b>계산(렌더링)</b> 이 느림</td>
                        <td>사용자의 <b>입력(setState)</b> 자체가 비쌈</td>
                    </tr>
                    <tr>
                        <th>지연시키는 대상</th>
                        <td>값(value) → 렌더링을 늦춤</td>
                        <td>상태 업데이트(setState) → 변경 자체를 늦춤</td>
                    </tr>
                    <tr>
                        <th>사용 위치</th>
                        <td>렌더링 중</td>
                        <td>이벤트 핸들러 안</td>
                    </tr>
                    <tr>
                        <th>주로 쓰는 예시</th>
                        <td>실시간 검색, 자동완성, 필터링</td>
                        <td>탭 전환, 정렬 변경, 페이지 전환</td>
                    </tr>
                    <tr>
                        <th>입력 반응성</th>
                        <td>입력은 즉시 반영됨 ✅</td>
                        <td>입력(버튼 클릭 등)도 즉시 반응 ✅</td>
                    </tr>
                    <tr>
                        <th>느리게 되는 부분</th>
                        <td>결과 화면(렌더링)</td>
                        <td>상태 변경(렌더링 전체)</td>
                    </tr>
                </tbody>
            </table>

            <Link to='/transition'>useTransition() 내용 확인</Link>

            <div style={{ padding: "20px" }}>
                <h3>useDeferredValue(), useTransition() 예제</h3>
                <div style={{ display: "flex", gap: "40px"}}>
                    <div>
                        <h4>useDeferredValue()</h4>
                        <input
                            type="text"
                            value={text}
                            placeholder="useDeferredValue() 검색어 입력..."
                            onChange={(e) => setText(e.target.value)}
                        />
                        <p>입력값: {text}</p>
                        <p>지연된 값: {deferredText}</p>
                        <hr />
                        <div>{list}</div>
                    </div>
                    <div>
                        <h4>useTransition()</h4>
                        <input
                            type="text"
                            value={text2}
                            placeholder=" useTransition() 검색어 입력..."
                            onChange={handleChange}
                        />
                        <p>입력값: {text2}</p>
                        <p>지연된 값: {listText}</p>
                        <hr />
                        
                        {isPending && <p style={{ color: "orange" }}>렌더링 중...</p>}
                        <div>{list2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

