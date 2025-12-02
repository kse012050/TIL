import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Link } from "react-router";

export default function ImperativeHandle() {
  const [shouldFocus, setShouldFocus] = useState(false);
  const inputRef = useRef(null);
    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useImperativeHandle()</h2>
            <p>
                부모 컴포넌트에서 자식 컴포넌트 함수를 실행할 때 사용<br/>
                부모 컴포넌트에서 ref를 통해 자식 컴포넌트가 의도적으로 노출한 함수를 실행할 때 사용한다.<br/>
                부모가 자식의 내부 메서드(open, focus 등)를 ref로 직접 호출해야 할 때 사용한다.
            </p>
            <p>
                forwardRef: 부모의 ref를 <b>자식 컴포넌트로 전달할 수 있게 해주는 함수</b><br/>
                useImperativeHandle: 자식이 <b>부모에게 “직접 호출 가능한 함수(open, close 등)”를 노출하는 Hook</b><br/>
                둘은 <b>항상 세트로 사용됨</b>
            </p>
            <button onClick={() => setShouldFocus(true)}>
                useState 인풋 포커스 주기
            </button>

            <StateInput shouldFocus={shouldFocus} />
            <br/>
            
            <button onClick={() => inputRef.current.focus()}>
                useImperativeHandle 인풋 포커스 주기
            </button>

            <ImperativeHandleInput ref={inputRef} propsTest={'propsTest'}/>
            
        </div>
    );
}

function StateInput({ shouldFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current?.focus();
    }
  }, [shouldFocus]);

  return <input ref={inputRef} />;
}

// const ImperativeHandleInput = forwardRef((_, ref) => {
const ImperativeHandleInput = forwardRef(({ propsTest }, ref) => {
  const inputRef = useRef(null);
  console.log(propsTest);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} />;
});


