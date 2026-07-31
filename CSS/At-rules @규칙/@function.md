# CSS `@function` 앳룰

CSS의 `@function` 앳룰을 사용하면 사용자 정의 CSS 함수를 선언할 수 있습니다. 함수를 선언한 뒤에는 속성값 내부에서 `<dashed-function>` 문법으로 호출할 수 있습니다.

예를 들어 다음과 같이 호출합니다.

~~~css
--my-function(30px, 3)
~~~


# 문법

~~~css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
    <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
~~~

`@function` 문법의 각 구성 요소는 다음과 같습니다.

## `--function-name`

함수를 식별하는 이름입니다.

`--`로 시작하고 그 뒤에 사용자가 정의한 유효한 식별자가 오는 `<dashed-ident>` 형식이어야 합니다. 대소문자를 구분합니다.

## `<function-parameter>#?`

선택 사항입니다.

0개 이상의 함수 매개변수를 선언할 수 있습니다. 여러 매개변수를 선언할 때는 쉼표로 구분합니다.

각 매개변수는 다음 요소로 구성됩니다.

### `--param-name`

매개변수를 식별하는 CSS 사용자 정의 속성 이름입니다.

`--`로 시작하고 그 뒤에 유효한 사용자 정의 식별자가 오는 `<dashed-ident>` 형식이어야 합니다. 대소문자를 구분합니다.

함수 매개변수는 함수 본문 안에서만 사용할 수 있는 지역 범위의 사용자 정의 속성으로 볼 수 있습니다.

### `<css-type>`

선택 사항입니다.

매개변수가 받을 수 있는 데이터 유형을 정의하는 CSS 데이터 타입 또는 `type()` 함수입니다.

이 값을 생략하면 모든 데이터 타입을 사용할 수 있습니다. 이는 `type(*)`를 지정한 것과 같습니다.

### `<default-value>`

선택 사항입니다.

함수를 호출할 때 해당 매개변수를 전달하지 않은 경우 사용할 기본값입니다.

`<css-type>`이 지정되어 있다면 기본값도 해당 데이터 타입에 맞아야 합니다. 기본값은 매개변수 선언 뒤에 콜론(`:`)을 사용해 구분합니다.

## `[returns <css-type>]?`

선택 사항입니다.

`returns` 키워드 뒤에 CSS 데이터 타입 또는 `type()` 함수를 작성하여 함수가 반환할 수 있는 타입을 정의합니다.

생략하면 모든 데이터 타입을 반환할 수 있으며, 이는 `returns type(*)`를 지정한 것과 같습니다.

단, `result` 설명자가 생성한 값과 반환 타입이 일치하지 않으면 함수는 유효하지 않습니다.

## `<declaration-rule-list>`

함수의 본문과 로직을 정의하는 하나 이상의 CSS 선언 또는 앳룰입니다.

다음과 같은 선언을 포함할 수 있습니다.

- 함수 본문 안에서만 유효한 CSS 사용자 정의 속성
- `@function` 내부에 직접 작성하거나 중첩 앳룰 안에 작성한 `result` 설명자

# 설명자

## `result`

CSS 사용자 정의 함수가 반환할 결과를 정의하는 유효한 CSS 속성값입니다.

값 안에 작성된 표현식이 평가되며, 평가 결과가 함수의 반환값이 됩니다.

# 설명

CSS 사용자 정의 함수를 사용하면 재사용 가능한 로직을 정의할 수 있습니다. 함수는 전달받은 매개변수와 함수 내부 로직에 따라 서로 다른 값을 반환할 수 있습니다.

일반적인 CSS 함수는 다음과 같습니다.

~~~css
@function --transparent(--color, --alpha) {
    result: oklch(from var(--color) l c h / var(--alpha));
}
~~~

이 함수의 이름은 `--transparent`이며 `--color`, `--alpha`라는 두 개의 사용자 정의 속성을 매개변수로 받습니다.

두 매개변수는 함수 본문 안에서 지역 변수처럼 사용할 수 있습니다.

함수 본문에는 반환값을 정의하는 `result` 설명자가 있습니다. `result` 값은 CSS 상대 색상 문법을 사용하여 입력받은 `--color`를 `oklch()` 색상으로 변환하고, `--alpha` 값을 알파 채널에 적용합니다.

이 함수는 기존 색상을 반투명하게 만들고 싶은 곳에서 다음과 같이 사용할 수 있습니다.

~~~css
section {
    --base-color: #faa6ff;
    background-color: --transparent(var(--base-color), 0.8);
}
~~~

함수는 함수 이름 뒤에 괄호를 붙이는 `<dashed-function>` 문법으로 호출합니다. 전달할 인수는 괄호 안에 작성합니다.

> **참고:** 같은 이름의 CSS 함수가 여러 개 선언된 경우 더 강한 캐스케이드 `@layer`에 있는 함수가 적용됩니다. 같은 레이어에 있다면 소스 코드에서 나중에 선언된 함수가 적용됩니다.

# 데이터 타입 지정하기

함수의 매개변수와 반환값에 데이터 타입을 지정할 수 있습니다.

~~~css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
    result: oklch(from var(--color) l c h / var(--alpha));
}
~~~

이 함수는 첫 번째 인수가 `<color>`, 두 번째 인수가 `<number>`이고 반환 결과가 `<color>`일 때만 유효한 값을 생성합니다.

다음 코드는 `--alpha`에 `<number>`가 아닌 `<percentage>` 값을 전달하므로 유효하지 않습니다.

~~~css
section {
    --base-color: #faa6ff;
    background-color: --transparent(var(--base-color), 50%);
}
~~~

이 경우 계산값을 결정하는 시점에 값이 유효하지 않게 되며, `background-color`는 최종적으로 `transparent`가 됩니다.

여러 데이터 타입을 허용하려면 `type()` 함수 안에서 파이프 기호(`|`)로 타입을 구분합니다.

~~~css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>)) returns <color> {
    result: oklch(from var(--color) l c h / var(--alpha));
}
~~~

이제 다음 함수 호출도 유효합니다.

~~~css
--transparent(var(--base-color), 50%)
~~~

# 기본값 지정하기

매개변수 선언 끝에 콜론(`:`)을 추가하여 기본값을 지정할 수 있습니다.

~~~css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
    result: oklch(from var(--color) l c h / var(--alpha));
}
~~~

이제 `--alpha` 매개변수의 기본값은 `0.8`입니다.

기본값을 사용하려면 함수를 호출할 때 두 번째 인수를 생략합니다.

~~~css
section {
    --base-color: #faa6ff;
    background-color: --transparent(var(--base-color));
}
~~~

> **참고:** 함수 인수로 유효하지 않은 값이 전달되었고 해당 매개변수에 기본값이 지정되어 있다면, 유효하지 않은 값은 무시되고 기본값이 사용됩니다.

# 쉼표가 포함된 값을 인수로 전달하기

다음 예제의 `--max-plus-x()` 함수는 쉼표로 구분된 길이 목록과 하나의 길이값을 인수로 받습니다.

CSS의 `max()` 함수를 사용해 길이 목록에서 가장 큰 값을 찾은 뒤, 별도로 전달받은 길이값을 더해 반환합니다.

~~~css
@function --max-plus-x(--list <length>#, --x <length>) {
    result: calc(max(var(--list)) + var(--x));
}
~~~

첫 번째 인수는 쉼표로 구분된 목록이어야 하지만, 일반적인 방식으로 작성하면 각각 별도의 함수 인수로 해석될 수 있습니다.

이를 방지하려면 함수 호출 시 목록을 중괄호로 감쌉니다.

~~~css
div {
    width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
~~~

# 함수 내부에 사용자 정의 속성 사용하기

함수 매개변수는 사용자 정의 속성으로 선언되며 함수 본문 안에서 사용할 수 있습니다.

함수 본문 안에 별도의 사용자 정의 속성을 선언하여 지역 상수처럼 사용할 수도 있습니다.

다음 예제에서는 애니메이션 지속 시간과 이징은 항상 같고, 애니메이션 이름과 반복 횟수만 변경하는 `--anim-1s()` 함수를 선언합니다.

~~~css
@function --anim-1s(--animation, --count) {
    --duration: 1s;
    --easing: linear;
    result: var(--animation) var(--duration) var(--count) var(--easing);
}
~~~

지속 시간과 이징을 항상 동일하게 사용할 경우 다음과 같이 더 간결하고 표현력 있는 문법을 작성할 수 있습니다.

~~~css
animation: --anim-1s(bounce, 2);
~~~

## 다른 사용자 정의 함수 호출하기

하나의 사용자 정의 함수 내부에서 다른 사용자 정의 함수를 호출할 수도 있습니다.

이 경우 내부 함수는 호출 스택의 상위 함수에 선언된 매개변수와 지역 사용자 정의 속성에 접근할 수 있습니다.

~~~css
@function --outer(--outer-arg) {
    --outer-local: 2;
    result: --inner();
}

@function --inner() returns <number> {
    result: calc(var(--outer-arg) + var(--outer-local));
}

div {
    z-index: --outer(1); /* 3 */
}
~~~

위 예제에서 바깥쪽 함수의 `--outer-arg` 매개변수와 `--outer-local` 지역 사용자 정의 속성은 안쪽 함수의 범위에서도 사용할 수 있습니다.

## 함수가 호출된 요소의 사용자 정의 속성 사용하기

사용자 정의 함수가 호출된 요소에 선언된 사용자 정의 속성도 함수 안에서 사용할 수 있습니다.

~~~css
@function --double-z() returns <number> {
    result: calc(var(--z) * 2);
}

div {
    --z: 3;
    z-index: --double-z(); /* 6 */
}
~~~

## 같은 이름의 사용자 정의 속성 우선순위

같은 이름의 사용자 정의 속성이 여러 위치에 선언된 경우 다음 우선순위가 적용됩니다.

1. 함수 본문 내부의 지역 사용자 정의 속성
2. 함수 매개변수
3. 함수가 호출된 요소에 선언된 사용자 정의 속성

다음 예제에서 `--add-a-b-c()` 함수는 다음 값을 사용합니다.

- `--a`: `div` 규칙에 선언된 사용자 정의 속성
- `--b`: 함수 매개변수
- `--c`: 함수 본문 내부의 지역 사용자 정의 속성

~~~css
@function --add-a-b-c(--b, --c) {
    --c: 300;
    result: calc(var(--a) + var(--b) + var(--c));
}

div {
    --a: 1;
    --b: 2;
    --c: 3;
    z-index: --add-a-b-c(20, 30); /* 321 */
}
~~~

# 복잡한 로직 포함하기

`@media` 앳룰이나 `if()` 함수 등을 사용해 함수 안에 더 복잡한 로직을 포함할 수 있습니다.

다음 함수는 좁은 화면에서 사용할 값과 넓은 화면에서 사용할 값, 총 두 개의 인수를 받습니다.

기본적으로 넓은 화면용 값을 반환하지만, 미디어 쿼리를 통해 뷰포트 너비가 `700px`보다 작은 경우 좁은 화면용 값을 반환합니다.

~~~css
@function --narrow-wide(--narrow, --wide) {
    result: var(--wide);

    @media (width < 700px) {
        result: var(--narrow);
    }
}
~~~

서로 다른 로직 결과를 표현하기 위해 여러 개의 `result` 설명자를 작성할 수 있습니다.

> **참고:** CSS 함수의 충돌 해결 방식은 일반 CSS와 같습니다. 소스 코드에서 나중에 작성된 값이 우선합니다.
>
> 위 함수는 기본적으로 `var(--wide)`를 반환합니다. 미디어 쿼리 조건이 참이면 뒤에 작성된 `var(--narrow)`가 기존 값을 덮어씁니다.

CSS 함수에는 JavaScript 함수와 같은 조기 반환이 없습니다.

위 예제에서 미디어 쿼리를 먼저 작성하고 그 아래에 `result: var(--wide)`를 작성하면 미디어 쿼리 조건이 참이어도 나중에 작성된 `var(--wide)`가 값을 덮어쓰므로 항상 넓은 화면용 값이 반환됩니다.

같은 로직을 `if()` 함수로 작성할 수도 있습니다.

~~~css
@function --narrow-wide(--narrow, --wide) {
    result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
~~~

# 형식 문법

~~~css
@function =
    @function <function-token> <function-parameter>#? ) [ returns <css-type> ]? { <declaration-rule-list> }

<function-parameter> =
    <custom-property-name> <css-type>? [ : <default-value> ]?

<css-type> =
    <syntax-component> |
    <type()>

<default-value> =
    <declaration-value>

<syntax-component> =
    <syntax-single-component> <syntax-multiplier>? |
    '<' transform-list '>'

<type()> =
    type( <string> )

<syntax-single-component> =
    '<' <syntax-type-name> '>' |
    <ident>

<syntax-multiplier> =
    '#' |
    '+'

<syntax-type-name> =
    angle |
    color |
    custom-ident |
    image |
    integer |
    length |
    length-percentage |
    number |
    percentage |
    resolution |
    string |
    time |
    url |
    transform-function
~~~

이 문법은 다음 최신 표준을 기준으로 합니다.

- CSS Functions and Mixins Module
- CSS Images Module Level 4
- CSS Values and Units Module Level 5

모든 브라우저가 각 문법을 전부 구현한 것은 아닐 수 있으므로 실제 사용 전 브라우저 호환성을 확인해야 합니다.

# 예제

더 많은 예제는 CSS 사용자 정의 함수 사용 가이드를 참고할 수 있습니다.

## 기본적인 `@function` 사용법

다음 예제는 전달받은 값을 두 배로 만드는 기본 함수를 보여줍니다.

### HTML

마크업에는 텍스트가 포함된 `<p>` 요소가 있습니다.

~~~html
<p>일부 콘텐츠</p>
~~~

### CSS

먼저 CSS 사용자 정의 함수를 선언합니다.

함수 이름은 `--double`이며, 타입 제한이 없는 `--value` 매개변수 하나를 받습니다. 함수 본문에서는 `calc()` 함수를 사용해 전달받은 인수를 두 배로 계산하고 `result`로 반환합니다.

~~~css
@function --double(--value) {
    result: calc(var(--value) * 2);
}
~~~

다음으로 값이 `10px`인 `--base-spacing` 사용자 정의 속성을 선언합니다.

`border-radius`에는 기본값을 그대로 사용하고, `padding`에는 `--double()` 함수를 사용해 두 배인 `20px`을 적용합니다.

~~~css
p {
    --base-spacing: 10px;
    border-radius: var(--base-spacing);
    padding: --double(var(--base-spacing));
    width: 50%;
    background-color: wheat;
}
~~~

# 브라우저 호환성 주의사항

`@function`은 실험적인 CSS 기능이며 일부 주요 브라우저에서 지원되지 않을 수 있습니다.

프로덕션 환경에서 사용하기 전 다음 사항을 확인해야 합니다.

- 대상 브라우저의 `@function` 지원 여부
- 함수 매개변수 타입 지정 지원 여부
- `returns` 문법 지원 여부
- 중첩 `@media` 사용 가능 여부
- CSS `if()` 함수 지원 여부

브라우저 지원이 충분하지 않은 프로젝트에서는 기존 CSS 사용자 정의 속성, `calc()`, 전처리기 함수 또는 JavaScript 기반 스타일 계산을 대안으로 고려해야 합니다.
