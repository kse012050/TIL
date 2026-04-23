# caret-color
`caret-color` CSS 속성은 텍스트 입력 커서(삽입 캐럿)의 색상을 설정합니다.

삽입 캐럿은 사용자가 다음 문자를 입력하거나 삭제할 위치를 표시하는 시각적 마커입니다.  
일반적으로 얇은 세로선 형태로 표시되며 깜빡입니다.

---

# Syntax

~~~css
/* 키워드 값 */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* 색상 값 */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* 전역 값 */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
~~~

---

# Values

## auto
일반적으로 `currentColor`로 해석됩니다.  
즉, 입력되는 텍스트 색상과 동일한 색으로 표시됩니다.

---

## transparent
캐럿을 투명하게 만듭니다.

---

## currentColor
현재 요소의 텍스트 색상을 사용합니다.

---

## `<color>`
유효한 CSS 색상 값을 지정할 수 있습니다.

예시:

- `red`
- `#5729e9`
- `rgb(0 200 0)`
- `hsl(228deg 4% 24% / 80%)`

---

# Description

삽입 캐럿은 편집 가능한 텍스트 내부에서 콘텐츠가 삽입되거나 삭제될 위치를 나타냅니다.

이 속성은 다음과 같은 요소에 적용됩니다:

- `<input>` (텍스트 입력 가능 타입)
- `<textarea>`
- `contenteditable` 속성이 설정된 요소

기본적으로 캐럿은 텍스트 색상과 동일합니다.

`caret-color`를 사용하면 이를 다른 색으로 변경하거나 기본값으로 되돌릴 수 있습니다.

---

# Understanding insertion carets

이 속성은 텍스트 입력이 가능한 요소에만 적용됩니다.

캐럿이 나타날 수 있는 `<input>` 타입:

- `text`
- `password`
- `search`
- `tel`
- `email`

일반적으로 캐럿이 없는 타입:

- `date`
- `color`
- `hidden`
- `radio`
- `checkbox`

일부 브라우저에서는 `number` 타입에도 표시될 수 있습니다.

---

# Caret vs Cursor

`caret-color`는 삽입 캐럿에만 영향을 줍니다.

주의:
마우스 커서(`cursor` 속성)와는 다릅니다.

예를 들어 `cursor: text;` 로 보이는 I자 모양은 캐럿이 아니라 마우스 포인터입니다.

---

# Animating from auto

`auto` 값은 일반적으로 `currentColor`를 사용하지만,  
애니메이션 시에는 보간(interpolation)이 되지 않습니다.

즉:

- `auto → red`
- `red → auto`

이 경우 부드러운 전환이 아니라 **중간 시점에서 갑자기 변경**됩니다.

---

# Formal Definition

- 초기값: `auto`
- 적용 대상: 텍스트 또는 텍스트 입력 가능한 요소
- 상속 여부: yes
- 계산 값: `auto` 또는 `<color>`
- 애니메이션 타입: color

---

# Formal Syntax

~~~css
caret-color =
    auto
    | <color> [ auto | <color> ]?
~~~

---

# Examples

## 기본 캐럿 색상과 사용자 지정 캐럿 색상

### HTML

~~~html
<input value="This field uses a default caret." size="64" />
<input class="custom" value="I have a custom caret color!" size="64" />
<p contenteditable class="custom">
    This paragraph can be edited, and its caret has a custom color as well!
</p>
~~~

---

### CSS

~~~css
input{
    caret-color: auto;
    display: block;
    margin-bottom: 0.5em;
}

input.custom{
    caret-color: orange;
}

p.custom{
    caret-color: green;
}
~~~

---

# Browser Support
대부분의 최신 브라우저에서 지원됩니다.

---

# See Also

- `cursor`
- `color`
- `user-select`
- `contenteditable`

---

# 참고
MDN Web Docs 기준 정리

[내용출처 MDN caret-color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)