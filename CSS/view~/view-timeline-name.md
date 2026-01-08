# view-timeline-name
`view-timeline-name` CSS 속성은 요소와 연결된 하나 이상의 명명된 뷰 진행 타임라인의 이름을 지정합니다.
~~~css
/* 키워드 값 */
view-timeline-name: none;

/* 사용자 지정 식별자 */
view-timeline-name: --custom_name_for_timeline;

/* 여러 식별자 */
view-timeline-name: --first_timeline_name, --another_timeline_name;

/* 전역 값 */
view-timeline-name: inherit;
view-timeline-name: initial;
view-timeline-name: revert;
view-timeline-name: revert-layer;
view-timeline-name: unset;
~~~

## Values
### none
타임라인에 이름이 없음을 나타냅니다. 이것이 기본값입니다.

### `<dashed-ident>`
쉼표로 구분된 ` <dashed-ident>` 형식의 사용자 지정 이름 식별자 목록을 지정합니다. 모든 ` <dashed-ident>` 값은 `--`로 시작해야 하며, 이는 표준 CSS 키워드와의 이름 충돌을 방지하는 데 도움이 됩니다.


## Description
`view-timeline-name` 속성은 뷰 진행 타임라인의 이름을 설정하는 데 사용됩니다. 뷰 진행 타임라인은 스크롤 가능한 요소(scroller) 내부에 있는 요소(subject)의 가시성 변화에 따라 진행됩니다. `view-timeline-name` 속성은 subject 요소에 설정됩니다. `view-timeline` 단축 속성을 사용하여 `view-timeline-name`을 설정할 수도 있습니다.  
  
subject의 지정된 scroller 요소가 축 방향으로 컨테이너를 넘치지 않거나, 넘침이 숨겨지거나 잘린 경우 스크롤 진행 타임라인은 생성되지 않습니다.  
  
타임라인이 생성되면 지정된 `<dashed-ident>` 이름 값을 `animation-timeline` 선언에서 참조하여 타임라인이 진행됨에 따라 애니메이션될 요소를 지정할 수 있습니다.

## Examples
### 삽입된 뷰 진행 타임라인을 명명된 뷰로 생성하기
`--subject-reveal`이라는 이름의 뷰 진행 타임라인은 `animation` 클래스를 가진 `subject` 요소에 `view-timeline` 속성을 사용하여 정의됩니다. 그런 다음 `animation-timeline: --subject-reveal;`을 사용하여 동일한 요소에 타임라인을 설정합니다. 결과적으로 스크롤 시 `subject` 요소가 문서 위쪽으로 이동하면서 애니메이션 효과를 보여줍니다.  
  
또한 `view-timeline-inset` 선언을 통해 애니메이션 시작 시간을 예상보다 늦추고 종료 시간을 앞당깁니다.

#### HTML
예제의 HTML 코드는 아래와 같습니다.
~~~html
<div class="content">
    <h1>Content</h1>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
        quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
        interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
        vivamus at augue.
    </p>

    <p>
        Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
        dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
        duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
        Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
        arcu vitae elementum curabitur vitae nunc sed velit.
    </p>

    <div class="subject animation"></div>

    <p>
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
        cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
        dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
        tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
        vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
        quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
        imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
        scelerisque. Netus et malesuada fames ac.
    </p>
</div>
~~~

#### CSS
`주제 요소`와 그 안에 포함된 `콘텐츠 요소`에는 최소한의 스타일이 적용되었고, 텍스트 콘텐츠에는 기본적인 글꼴 설정이 적용되었습니다.
~~~css
.subject {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background-color: deeppink;
}

.content {
    width: 75%;
    max-width: 800px;
    margin: 0 auto;
}

p,
h1 {
    font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
    font-size: 3rem;
}

p {
    font-size: 1.5rem;
    line-height: 1.5;
}
~~~
`subject` 클래스를 가진 `<div>` 요소에도 `animation` 클래스가 부여됩니다. 여기서 `view-timeline`을 설정하여 이름이 지정된 뷰 진행 타임라인을 정의합니다. 또한 `view-timeline-inset`을 선언하여 애니메이션이 예상보다 늦게 시작하고 일찍 끝나도록 합니다. `animation-timeline`에도 동일한 값을 지정하여 뷰 진행 타임라인이 진행됨에 따라 애니메이션이 적용될 요소를 지정합니다.  
  
마지막으로, 해당 요소에 투명도와 크기를 조절하는 애니메이션이 지정되어 스크롤을 위로 이동함에 따라 요소가 서서히 나타나고 커지도록 합니다.
~~~css
.animation {
    view-timeline: --subject-reveal block;
    view-timeline-inset: 70% -100px;
    animation-timeline: --subject-reveal;

    animation-name: appear;
    animation-fill-mode: both;
    animation-duration: 1ms; /* Firefox에서 애니메이션을 적용하려면 다음이 필요합니다 */
}

@keyframes appear {
  from {
        opacity: 0;
        transform: scaleX(0);
    }

    to {
        opacity: 1;
        transform: scaleX(1);
  }
}
~~~

#### Result
스크롤하여 애니메이션 효과가 적용되는 대상 요소를 확인하세요.  
[예제 결과](https://developer.mozilla.org/en-US/play?uuid=8af890cb4ab0d685e55ff0f7328945307bdff9f0&state=fVXLbtxGEPyVBgEDiaGltDEEB5QiRIiVB5D4EOWQw156h71kW%2FOgenpoK4b%2BPZghubuSotyIftT0VFcNv1a9Ols11WXLIxiLMf6wqUzwSl431dXGA1z266ufpsjlab%2B%2B2vgSHUoS4Pcg5ICHmBy0wQaByAroSE%2FABB%2FJKGkSwJYHjoZ9B2RZTyBSC20A4hRdaCcwJTcEAfaGW26TV0gKFrdBCEgnfAKHnUdAy%2FcJa%2FiTY4pwnzjCiMLlG92El6P3iYDbGm4ULHfJIiRr0ZkgAwk4tBQTtgiDBPZgeUsSwCdvpvHvE%2BoExl5J2uTmY2q4saxPwFruPMfIDoxgBC33yLewYRtEOcKOUscL4MgjuhQBFTB1iepC7OnwnOIPE63U5g4SwZnuMmShgbSGW2pLjRQ%2BBiHl5AoXMCY7JEWlCW8%2FZg1%2FBdEgM5cZ0VqEHRq2HLncooZrIEEFjy5PasloipDE44yWmTfBj2jt8VcNH3nbz6PuqQTP0cJIdj%2FhBFhPYLfYsWailokO%2B9nylnymH8UkGFmRgCw58ppcDX%2B8KJwQ%2F6saTBLccpbllClMFoKzNp%2Fv4dgbMW0%2FkVFAzw6Vg99UV5enLY%2FPl3Z9pHfPDiiBJhk4AnUUFQ8rQvKEHoYehVRwkbep4VpMmtBMkrzVaVoTfJeyDZJwBOmDN1lFE8xItobb2YJL32LJZf%2BmUHadRQeeskM6wZFbBPawI5lpyrL6ZU5IUil6mhzlg18sa22KEMQwoAFMpggqHSZ8zaJH7oSWF8tmaZTs0W6LkAZBiuQVVDhqFv3M1HI5GJKkuNzk8ADU8CGfnKwKG6YIFjNfed3zRg5G5fZgqN%2F8flXZAPMj4AaSlklLPyXOj1cWNddw05EetluGWQyLxiQX0Wd%2BiwNyx4QYDVmSwkQNHymbi%2FRI9zt0FLMcDqpcBFedVCbGqqnqRZZfc9FnbrVv4N3Z2fDlIgd64q7XBr7bRxxKx76BM8CkoYS2aO46Ccm3K5MfnAZaomFgf3ex8Y9Z3fX8Y3hyyvvzNzPil9Uc%2Bv71YwrOcLLx%2FXpC2QWvqx06tg8NbKpfyY6kbHBTncCmuhZGmz8j%2BriKJLxbQJ4ARP6HGngn5PZnvMiu6%2FMpD2DZ02ohZV2fT0313tNT78j0eaXsKJc3sFrNJK%2BERkILWxvM3cWLyhX7SNrA%2B7M3sFrvqdiD%2Fw%2FkxfSGHEo9OmoAh4FQnqHs2NqVCy01sA3aP8u2ScpHA2sXL%2BD0LfzMQrvwBYTuEwtF0D4rP2R0%2BwDa06Ed3p7ONP54Rw87mRRYpphpleCmL4AwoGF9aODsYn4RBH3cBXENRIOW%2Fv7m7NuSepyup%2BFF6%2FrV1vW%2B9bHo%2FVOWe3VSaU%2BOqqayeYnV478%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fview-timeline-inset%2F)  
  
[내용 출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-timeline-name)