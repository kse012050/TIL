import React, { useOptimistic, useState } from 'react';
import { Link } from 'react-router';

export default function Optimistic() {
    const [comments, setComments] = useState(["좋은 글이네요!", "멋져요 👏"]);

    // 1️⃣ useOptimistic 훅으로 낙관적 상태 생성
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (currentComments, newComment) => [...currentComments, newComment]
    );

    async function handleAddComment(formData) {
        const newComment = formData.get("comment");
        addOptimisticComment(newComment); // 2️⃣ UI에 바로 추가 (응답 기다리지 않음)

        // 3️⃣ 실제 서버 요청 (비동기)
        // await fetch("/api/comments", {
        //     method: "POST",
        //     body: JSON.stringify({ comment: newComment }),
        // });

        // 4️⃣ 성공 후 실제 상태 반영
        setComments((prev) => [...prev, newComment]);
    }

    return (
        <div>
            <Link to='/'>목록으로</Link>
            <h2>useDeferredValue()</h2>

            <h3>설명</h3>
            <p>
                <b>서버 응답을 기다리지 않고, 성공할 거라 “낙관적으로” 가정하고 화면(UI)을 먼저 업데이트하는 훅</b><br/>
                사용자가 어떤 액션(좋아요, 댓글 작성 등)을 했을 때<br/>
                <b>API 요청이 끝나기 전에도 화면을 먼저 변경해서 반응성을 높이</b>는 방식이에요.
            </p>
            <p>
                api로 추가, 삭제하는 경우 서버를 기다리지 않고 바로 UX 반영<br/>
                실패 시 롤백(이전 상태로 복구)하는 패턴<br/>
                <br/>
                낙관적 업데이트는 사용자 경험을 향상시키지만<br/>
                서버와의 상태 불일치 가능성도 고려해야 함<br/>
                실패 시 롤백이나 오류 처리 로직 필요
            </p>
            <form action={handleAddComment} style={{ padding: 20 }}>
                <h3>댓글</h3>
                <ul>
                    {optimisticComments.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                </ul>

                <input name="comment" placeholder="댓글 입력..." />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

