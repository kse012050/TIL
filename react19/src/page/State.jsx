import React, { useState } from 'react';
import { Link } from 'react-router';

const initailValue = () => {
    console.log('초기값 설정');
    return 0;
}

export default function State() {
    // 랜더링 될 때 마다 실행
    // const [value, setValue] = useState(initailValue());
    
    // 최초 마운트 시에만 실행
    // 이후 리렌더링 시에는 절대 다시 실행되지 않음
    const [value, setValue] = useState(()=> initailValue());

    const curruntAdd = () => {
        setValue(value + 1);
        setValue(value + 1);
        setValue(value + 1);
    }
    const prevAdd = () => {
        setValue(prev => prev + 1);
        setValue(prev => prev + 1);
        setValue(prev => prev + 1);
    }
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useState()</h2>
            변수 값 : { value } <br/>
            <button onClick={curruntAdd}>현재 값으로 + 3 증가</button>
            <button onClick={prevAdd}>이전 값으로 + 3 증가</button>
            <br />
            <h3>초기값 설정 설명</h3>
            <p>
                useState에서 초기값을 설정할 때 initailValue()와 () =&gt; initailValue()는 실행 타이밍과 호출 횟수가 다릅니다.
            </p>
            <p>
                const [value, setValue] = useState(initailValue());<br/>
                initailValue()는 <b>컴포넌트가 렌더링될 때마다 실행</b>됩니다.<br/>
                즉, useState는 실행될 때 이미 initailValue()의 <b>결과값</b>을 받습니다.<br/>
                console.log('초기값 설정')이 <b>매번 출력됨</b>
            </p>
            <p>
                const [value, setValue] = useState(() =&gt; initailValue());<br/>
                initailValue 함수 자체를 <b>지연 호출(lazy initialize)</b> 하도록 전달합니다.<br/>
                React는 <b>최초 마운트 시에만</b> 이 함수를 실행하고, 그 결과를 초기값으로 씁니다.<br/>
                이후 리렌더링 시에는 <b>절대 다시 실행되지 않음.</b><br/>
                console.log('초기값 설정')은 <b>오직 한 번만 출력됨</b>
            </p>
            <p>
                만약 초기값이 단순한 숫자나 문자열일 때는 () =&gt; 0처럼 래핑할 필요가 없습니다.<br/>
                오히려 불필요한 함수 래핑은 코드만 복잡해지므로,<br/>
                단순 값일 때는 즉시 실행 방식이 더 깔끔하고 직관적입니다.
            </p>

            <h3>상태 변경 설명</h3>
            <p>
                setValue(value + 1);<br/>
                setValue(value + 1);<br/>
                setValue(value + 1);<br/>
                각 setValue는 모두 현재 value 값을 기준으로 계산된다.<br/>
                React는 상태 업데이트를 즉시 반영하지 않고, 배치 처리(Batching)하기 때문에,<br/>
                위 코드에서는 value가 아직 업데이트되지 않은 상태에서 같은 계산을 3번 한다.<br/>
                결과적으로, 마지막에 적용되는 값은 모두 동일한 value + 1이므로<br/>
                최종 결과는 단 한 번만 증가한다.
            </p>
            <p>
                setValue(prev =&gt; prev + 1);<br/>
                setValue(prev =&gt; prev + 1);<br/>
                setValue(prev =&gt; prev + 1);<br/>
                각 setValue는 이전 상태(prev)를 기준으로 계산된다.<br/>
                React는 상태 업데이트를 배치 처리하기 때문에,<br/>
                이러한 함수형 업데이트 방식은 호출 순서대로 각 연산을 누적해서 처리한다.<br/>
                즉, 첫 번째 setValue는 현재 상태에서 +1을 수행하고,<br/>
                두 번째는 첫 결과에서 다시 +1,<br/>
                세 번째는 그 결과에서 또 +1을 수행한다.<br/>
                결과적으로 상태는 총 3만큼 증가한다.
            </p>
            <small>**배치 처리(Batching)**는 여러 상태 업데이트를 한 번에 처리해서 렌더링을 줄이는 React의 최적화 기법입니다.</small>
        </div>
    );
}

