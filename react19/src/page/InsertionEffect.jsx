import React, { useInsertionEffect } from 'react';
import { Link } from 'react-router';

export default function InsertionEffect() {

    useInsertionEffect(() => {
        const style = document.createElement('style');
        style.textContent = `.insertionEffectEx { color: red; }`;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [])

    return (
        <div>
            <Link to='/'>목록으로</Link><br/>
            <h2>useInsertionEffect()</h2>
            <p className="insertionEffectEx">Hello!</p>

            <h3>설명</h3>
            <p>
                useInsertionEffect = "<b>스타일 삽입 전용 Hook</b>"<br/>
                스타일(특히 CSS-in-JS, Emotion, styled-components 등) 관련 라이브러리에서 "<b>정말로 스타일을 가장 먼저 삽입</b>" 하고 싶을 때 쓰는 전용 Hook<br/>
                컴포넌트가 렌더링될 때 동적으로 스타일을 주입해야 하는데,<br/>
                그 스타일이 <b>"최대한 빨리" DOM 에 들어가야 할 때!</b><br/>
                보통 CSS-in-JS 라이브러리 제작자나 스타일 관련 고급 기능을 구현할 때만 필요<br/>
                깜빡임(FOUC, Flash of Unstyled Content) 방지,<br/>
                스타일 우선순위 보장 목적이 제일 큼.<br/>
                <br/>
                <b>useLayoutEffect</b>보다도 더 먼저 실행됨!<br/>
                **DOM에 실제로 삽입되는 "그 순간"**에 스타일이 미리 들어가야 하는 경우에 딱 맞음.
            </p>
        </div>
    );
}

