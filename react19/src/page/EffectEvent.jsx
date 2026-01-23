import { useEffect, useEffectEvent, useState } from "react";

export default function EffectEvent() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const onLog = useEffectEvent(() => {
        console.log('useEffectEvent', count);
    });

    useEffect(() => {
        const id = setInterval(() => {
            console.log('useEffect', count2);
            onLog();
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h2>useEffectEvent()</h2>
            <p>로직은 최신 값을 알고 싶어 하지만, 그 값이 변한다고 해서 내 Effect가 멈췄다 다시 시작하는 건 싫을 때</p>
            <p>
                useEffect의 의존성 배열로 변수를 넣으면 그 변수가 변경 될 때마다 실행된다.<br/>
                변경된 값을 적용하되, 변경될 때 실행이 안되게 할 때 사용한다.
            </p>

            <button onClick={() => {
                setCount(c => c + 1)
                setCount2(c => c + 1)
            }}>
                count 증가
            </button>
        </div>
    );
}
