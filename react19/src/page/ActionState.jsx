'use client'
import {useActionState} from 'react'
import { Link } from 'react-router'

async function loginAction(prevState, formData){
    const id = formData.get('id')
    const pw = formData.get('pw')

    if(id === 'admin' && pw === '1234'){
        return {success: true, message: '로그인 성공'}
    }

    return {success: false, message: '아이디 또는 비밀번호 틀림'}
}

export default function ActionState(){
    const [state, formAction, isPending] = useActionState(loginAction,{
        success: false,
        message: ''
    })

    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useActionState(state, formAction, isPending)</h2>
            <ul>
                <li><b>state</b> : 액션 실행 결과 상태</li>
                <li><b>formAction</b> : form의 action 속성에 연결할 함수</li>
                <li><b>isPending</b> : 액션 실행 중인지 여부</li>
            </ul>

            <p>
                <b>폼 액션을 실행하고 그 결과 상태를 관리하는 훅</b>이다.<br/>
                주로 <b>폼 제출 결과, 서버 응답, 로딩 상태 등을 처리할 때 사용된다.</b><br/>
                useActionState는 <b>액션 함수와 초기 상태를 전달하면</b>, 액션 실행 결과를 상태로 관리해준다.
            </p>

            <form action={formAction}>
                <input type="text" name="id" placeholder="아이디"/>
                <input type="password" name="pw" placeholder="비밀번호"/>
                <button type="submit" disabled={isPending}>로그인</button>
                {state.message && <p>{state.message}</p>}
            </form>
            
        </div>
    )
}