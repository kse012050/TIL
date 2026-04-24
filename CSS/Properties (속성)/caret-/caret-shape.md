# caret-shape
`caret-shape` CSS 속성은 텍스트 입력 시 표시되는 삽입 캐럿의 모양을 설정합니다.

삽입 캐럿은 편집 가능한 요소에서 다음 문자가 삽입되거나 삭제될 위치를 나타내는 깜빡이는 표시입니다.

> **Experimental**  
> 이 기능은 실험적 기술입니다.  
> 실제 서비스 적용 전 브라우저 호환성을 반드시 확인해야 합니다.

---

# Syntax

~~~css
/* 키워드 값 */
caret-shape: auto;
caret-shape: bar;
caret-shape: block;
caret-shape: underscore;

/* 전역 값 */
caret-shape: inherit;
caret-shape: initial;
caret-shape: revert;
caret-shape: revert-layer;
caret-shape: unset;
~~~

---

# Values

## auto
기본값입니다.  
브라우저가 캐럿 모양을 결정합니다.

일반적으로 플랫폼 규칙을 따르며 상황에 따라 달라질 수 있습니다.

---

## bar
얇은 세로선 형태입니다.

문자 사이에 위치하며 가장 일반적인 형태입니다.

---

## block
다음 문자 위를 덮는 직사각형 형태입니다.

다음 문자가 없으면 마지막 문자 뒤에 표시됩니다.

---

## underscore
다음 문자 아래에 표시되는 얇은 가로선 형태입니다.

다음 문자가 없으면 마지막 문자 뒤에 표시됩니다.

---

# Description

삽입 캐럿은 사용자가 입력할 위치를 알려주는 깜빡이는 커서입니다.

`caret-shape`를 통해 캐럿의 시각적 모양을 바꿀 수 있으며,  
편집 모드 표시나 UI 스타일링에 활용할 수 있습니다.

---

# Editing Modes and Caret Shapes

텍스트 편집기는 일반적으로 두 가지 모드를 가집니다.

---

## Insert Mode
새 문자가 현재 위치에 삽입되며, 기존 텍스트는 뒤로 밀립니다.

대부분의 현대 앱 기본 동작입니다.

---

## Overtype Mode
새 문자가 기존 문자를 덮어씁니다.

보통 Insert 키로 전환됩니다.

---

# Traditional Uses of Caret Shapes

- **bar** → 일반적인 현대 UI
- **block** → 터미널, 덮어쓰기 모드 표시
- **underscore** → 콘솔 스타일, 타자기 느낌

---

# Caret Positioning and Behavior

`caret-shape`는 시각적 표현만 변경합니다.

논리적 위치는 항상 문자 사이의 삽입 지점입니다.

즉, 모양만 달라질 뿐 실제 입력 위치는 변하지 않습니다.

---

# Interaction with Writing Modes

세로쓰기(`writing-mode`) 환경에서는 캐럿도 방향에 맞게 조정됩니다.

예:

- `bar` → 가로선 형태
- `underscore` → 텍스트 방향에 맞춰 재배치

---

# Formal Definition

- 초기값: `auto`
- 적용 대상: 텍스트 또는 텍스트 입력 가능한 요소
- 상속 여부: yes
- 계산 값: 지정값 그대로
- 애니메이션 타입: computed value type 기준

---

# Formal Syntax

~~~css
caret-shape =
    auto
    | bar
    | block
    | underscore
~~~

---

# Examples

## Retro terminal with animated caret

### HTML

~~~html
<label for="terminal">Enter a command</label>
<div class="old-screen">
    <span>></span>
    <textarea id="terminal" class="terminal-input"></textarea>
</div>
~~~

---

### CSS

~~~css
.terminal-input{
    caret-shape: block;
    caret-animation: manual;
    animation: old-caret 2s infinite;
}

@keyframes old-caret{
    0%,
    50%{
        caret-color: #00ad00;
    }

    75%,
    100%{
        caret-color: transparent;
    }
}
~~~

---

## Console interface with underscore caret

### HTML

~~~html
<label for="console">Enter a command</label>

<div class="console-demo">
    <div class="console-output">
        <p>user@host:css-ui-4 $ ls -a</p>
        <p>. .. Overview.bs Overview.html</p>
    </div>

    <div class="console-input">
        <span class="prompt">user@host:css-ui-4 $ </span>
        <input type="text" id="console" class="console" value="cd" />
    </div>
</div>
~~~

---

### CSS

~~~css
.console{
    caret-shape: underscore;
}
~~~

---

# Browser Support
실험적 기능이므로 일부 브라우저에서 지원되지 않을 수 있습니다.

실제 사용 전 호환성 확인 필수.

---

# See Also

- `caret-color`
- `caret-animation`
- `cursor`
- `writing-mode`

---

# 참고
MDN Web Docs 기준 정리

[내용출처 MDN caret-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-shape)