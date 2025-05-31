import React, { useId } from 'react';
import { Link } from 'react-router';

export default function Id() {
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useId()</h2>
            <Input />
            <Input />
            <h3>설명</h3>
            <p>
                컴포넌트마다 <b>고유한(유니크한) ID</b>를 만들어주는 Hook<br/>
                특히 <b>접근성(aria, label 등)</b>이나<br/>
                여러 input이 섞일 때 <b>고유 ID가 꼭 필요할 때</b> 편하게 사용!<br/>
            </p>
            <h3>사용법</h3>
            <p>
                여러 개의 input 컴포넌트를 사용할 때,<br/>
                각 input의 id가 겹치지 않게 <b>“고유한 id”</b>를 자동으로 만들어주는 Hook!
            </p>
        </div>
    );
}

function Input(){
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>id값: { id }</label><br/>
            <input type="text" id={id}/>
        </div>
    )
}
