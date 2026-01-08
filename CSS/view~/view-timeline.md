# view-timeline
``view-timeline`` CSS 단축 속성은 명명된 뷰 진행 타임라인의 이름, 방향 및 여백 값을 정의합니다.

## Constituent properties
이 속성은 다음 CSS 속성의 단축 표현입니다.  
  
- view-timeline-axis
- view-timeline-inset
- view-timeline-name

## Syntax
~~~css
/* 컴포넌트 1개 */
view-timeline: none;
view-timeline: --custom_name_for_timeline;

/* 컴포넌트 2개 */
view-timeline: --custom_name_for_timeline block;
view-timeline: --custom_name_for_timeline y;
view-timeline: none inline;
view-timeline: none x;

/* 컴포넌트 3개 */
view-timeline: --custom_name_for_timeline block auto;
view-timeline: --custom_name_for_timeline block 20% 200px;

/* 전역 값 */
view-timeline: inherit;
view-timeline: initial;
view-timeline: revert;
view-timeline: revert-layer;
view-timeline: unset;
~~~

## Values
### ``<view-timeline-name>``
``view-timeline-name``을 참조하세요. 기본값은 ``none``입니다.

### ``<view-timeline-inset>``
``view-timeline-inset``을 참조하세요. 기본값은 ``auto``입니다.

### ``<view-timeline-axis>``
``view-timeline-axis``를 참조하세요. 기본값은 ``block``입니다.


## Description
`view-timeline` 단축 속성은 스크롤 가능한 요소(스크롤러) 내의 요소(주제)의 가시성 변화에 따라 진행되는 명명된 뷰 진행 타임라인을 정의합니다. `view-timeline` 속성은 주체에 설정됩니다. 스크롤러 요소가 축 방향으로 컨테이너를 넘지 않거나, 넘침 영역이 숨겨지거나 잘리는 경우 스크롤 진행 타임라인은 생성되지 않습니다.  
  
스크롤러 내에서 주체의 가시성이 추적됩니다. 기본적으로 타임라인은 주체가 스크롤러의 한쪽 끝에서 처음 보일 때 0%, 반대쪽 끝에 도달하면 100%가 됩니다.  
  
`view-timeline`은 명명된 뷰 진행 타임라인의 이름, 스크롤 축 값, 그리고 최대 두 개의 타임라인 여백 값의 세 가지 구성 요소를 포함할 수 있습니다. 값이 하나만 선언된 경우 해당 값은 `view-timeline-name`이 됩니다. 이 이름은 `animation-timeline` 선언에서 참조되어 타임라인이 진행됨에 따라 애니메이션될 요소를 지정합니다. 이 속성은 주제 요소가 될 수도 있지만, 반드시 주제 요소일 필요는 없습니다. 스크롤 영역을 통과하는 주제에 따라 다른 요소를 애니메이션할 수도 있습니다.  
  
`<view-timeline-name>` 단축 속성을 컨테이너 요소에 적용하여 `<view-timeline-name>`, `<view-timeline-inset>`, `<view-timeline-axis>` 값을 조합하여 설정할 수 있습니다. 최소 하나의 값을 지정해야 합니다. 모든 값을 지정하는 경우, 순서는 `<view-timeline-name>` 다음에 `<view-timeline-axis>` 및/또는 `<view-timeline-inset>`이 와야 합니다.  
  
`<view-timeline-name>` 구성 요소에 지정하는 이름은 쉼표로 구분된 `<dashed-ident>` 값(즉, --로 시작해야 함)의 목록이거나 키워드 none이어야 합니다.


## Examples
### 명명된 뷰 진행 타임라인 만들기
클래스가 `animation`인 subject 요소의 `view-timeline` 속성을 사용하여 `--subject-reveal`이라는 이름의 뷰 진행 타임라인을 정의합니다. 그런 다음 `animation-timeline: --subject-reveal`을 사용하여 동일한 요소에 타임라인을 설정합니다. 결과적으로 subject 요소는 스크롤 시 문서 위쪽으로 이동하면서 애니메이션 효과를 보여줍니다.

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
`subject` 클래스를 가진 `<div>` 요소에는 `animation` 클래스도 함께 지정됩니다. 여기서 `view-timeline`은 이름이 지정된 뷰 진행 타임라인을 정의합니다. 또한 `animation-timeline`에도 동일한 값을 지정하여 뷰 진행 타임라인이 진행됨에 따라 애니메이션이 적용될 요소를 지정합니다.  
  
마지막으로, 해당 요소에는 투명도와 크기가 애니메이션되는 요소가 지정되어 스크롤을 위로 이동함에 따라 서서히 나타났다가 커지는 효과를 줍니다.
~~~css
.animation {
    view-timeline: --subject-reveal block;
    animation-timeline: --subject-reveal;

    animation-name: appear;
    animation-fill-mode: both;
    animation-duration: 1ms; /* Firefox에서 애니메이션을 적용하려면 다음이 필요합니다 */

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
스크롤하여 애니메이션 효과가 적용된 대상 요소를 확인하세요.  
  
[예제 결과](https://developer.mozilla.org/en-US/play?uuid=316315407f32a0c5d27445577a921c5e067b1cfd&state=fVbbbhs3EP2VwQJFk0BaWy2CFmvXiNGkF6DNQ9OHFtBDRtzR7sS8rIdD2Wrgfy%2FI3ZVku%2BkbNcM5HJ45h9rPVa%2FOVk112fIOjMUYf1hXJnglr%2Bvqau0BLvvV1Y9j5PKsX12tfYkOJQnwWxBywENMDtpgg0BkBXSkCzDBRzJKmgSw5YGjYd8BWdYFRGqhDUCcogvtCKbkhiDA3nDLbfIKScHiJggB6YhP4LDzCGj5NmENf3BMEW4TR9ihcFmjG%2FFy9DYRcFvDOwXLXbIIyVp0JshAAg4txYQtwiCBPVjekATwyZux%2FduEOoKxV5I2uemYGt5Z1kdgLXeeY2QHRjCClnvkW9iwCaIcYUup4xlwxzt0KQIqYOoS1YXYs%2BEpxW9HWqnNFSSCE92lyUIDaQ0fqC17pPAxCCknV7iAXbJDUlQa8Q5t1vBnEA0ycZkRrUXYomHLkcstargGElTw6HKnloymCEk8TmiZeRP8Dq09XdXwnjf91OqBSvAcLezIHjocAesR7AN2rJmouaPjfDa8IZ%2FpRzEJdqxIQJYceU2uht%2BfbRwR%2F2s3mCS44SzLMVOYLARnbT6dw6k3Ytp8IqOAnh0qB7%2Buri7PWt49Hdr1id49O6AEmmTgCNRRVDyOCMkTehh6FFLBWd6mhmsxaUQzSfJUx25N8F3KNkjCEaQP3mQVjTA7sjV8mCw4182WnOdvCmXXWXTgKTukE9xxi8AetiQTTVlWP08JSSpFT6OjfPCzZa1NEYIYBjSAyRRBpWOHX7LoiTuh5dmyWRolezLbIqRBkCJ5BRWOmkU%2FMTVfDoYkKc43OT4ANbzNJyerwoYpgsXMVx73NJGjUbk9GupXfxhVNsD0CLiBpGXSUk%2BJ8%2BOVRc01vOtIj9MtzcyGRWOSi%2Bgzv8UBuWJEjIYsSWGihveUzUV6ovstOopZDkdVzoKrFpWJsWqqepbl57zpjlvtG%2Fj2%2FHy4v8iBnrjrtYFvDhGH0rFv4BwwaSihDZqbTkLy7dLkB6eBlmgY2N9crP1DVnc9%2FTE8OuW7119NiPfLKfT9l48pOMNi7fvViLINXpdbdGz3DayrX8juSNngulrAuroWRpuXEX1cRhLeziCPACL%2FQw18K%2BQOZzzLrurXYx7AsqflTMqqfj0W1QdPj7U7prulsqO8vYHlciJ5KbQjtLCxwdwUvEPh%2F2y%2FGN%2BH41aPjhrAYSCUJyhbtnbpQksNbIL2T7JtkrJoYOXiBZy9gp9YaBvuQeg2sVAE7bOqQ0a3e9CejuXw6myi6M0N7bcyqqt0MVEmwY0rgDCgYd03cH4xuV3Qx20Q10A0aOmvF%2BcvS%2BphvJ6GZ6WrL5auDqUPa%2F%2FG4p4EfFjGNAxBJpW9mX5F8EHhxZOZ%2BODp5XziJrT7ptnQNn8jTDGASbNZXH%2BHJLCRcBfzf3Wg6L9WmE%2FLJH18BP8xfxIMJLqv19XFjPfcJnc9oR7yLcfB4r45kcf4TN7rEi13vgFD%2BUvikBqwbdl3DawmeRZKZl6qRfUpW7xaVNqTo6qpbBZu9fAv&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fview-timeline%2F)  
  
[내용출처 MDN view-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-timeline)