# light-dark() 
``light-dark()`` CSS ``<color>`` 함수는 속성에 대해 두 가지 색상을 설정할 수 있습니다. 개발자가 밝거나 어두운 색상 구성표를 설정했는지 또는 사용자가 밝거나 어두운 색상 테마를 요청했는지 감지하여 두 가지 색상 옵션 중 하나를 반환합니다. ``prefers-color-scheme`` 미디어 기능 쿼리 내에 테마 색상을 넣을 필요가 없습니다. 사용자는 운영 체제 설정(예: 밝음 또는 어두움 모드) 또는 사용자 에이전트 설정을 통해 색상 구성표 기본 설정을 나타낼 수 있습니다. ``light-dark()`` 함수는 모든 ``<color>`` 값이 허용되는 두 가지 색상 값을 제공합니다. ``light-dark()`` CSS 색상 함수는 사용자의 기본 설정이 밝음으로 설정되었거나 기본 설정이 설정되지 않은 경우 첫 번째 값을 반환하고 사용자의 기본 설정이 어두움으로 설정된 경우 두 번째 값을 반환합니다.  
  
``light-dark()`` 색상 함수에 대한 지원을 활성화하려면 색상 구성표가 ``light dark`` 값을 가져야 하며, 일반적으로 :root 가상 클래스에 설정됩니다.

~~~css
:root {
    color-scheme: light dark;
}
body {
    color: light-dark(#333b3c, #efefec);
    background-color: light-dark(#efedea, #223a2c);
}
~~~

## Syntax ( 문법 )
~~~css
/* 지정된 색상 값 */
color: light-dark(black, white);

/* RGB 색상 값 */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* 사용자 정의 속성 */
color: light-dark(var(--light), var(--dark));
~~~
## Values ( 값 )
기능적 표기법: light-dark(light-color, dark-color)

### light-color
``<color>`` light color-scheme에 설정할 값.

### dark-color
``<color>`` dark color-scheme에 설정할 값.

## Formal syntax ( 형식적 구문 )
~~~css
<light-dark()> = 
  light-dark( <color> , <color> )  
~~~

## Example ( 예 )
### 색 구성표에 따라 색상 설정
기본적으로 지원하는 브라우저에서 light-dark() 색상 함수에서 반환되는 색상은 운영 체제 설정(예: 밝음 또는 어두움 모드) 또는 사용자 에이전트 설정을 통해 설정된 사용자 기본 설정에 따라 달라집니다. 브라우저의 개발자 도구에서 이 설정을 변경할 수도 있습니다.

#### HTML
우리는 밝은 색상, 어두운 색상, 사용자가 선호하는 색상 구성표에 따라 선택된 색상을 타겟팅할 수 있도록 세 개의 섹션을 포함했습니다.
~~~html
<h1><code>light-dark()</code> CSS function</h1>
<section>
    <h2>Automatic</h2>
    <p>This section will react to the users system or user agent setting.</p>
</section>
<section class="light">
    <h2>Light</h2>
    <p>
        This section will be light due to the <code>color-scheme: light;</code>.
    </p>
</section>
<section class="dark">
    <h2>Dark</h2>
    <p>This section will be dark due to the <code>color-scheme: dark;</code>.</p>
</section>
~~~

#### CSS
우리는 밝은 테마와 어두운 테마에 대한 색상을 포함합니다. 또한 ``:root``에서 문서에 대한 ``color-scheme``을 정의하여 전체 문서에 대한 ``light-dark()`` 색상 함수를 활성화합니다.
~~~css
:root {
    /* 이것은 밝음과 어두움 사이를 전환하도록 설정되어야 합니다. */
    color-scheme: light dark;

    --light-bg: ghostwhite;
    --light-color: darkslategray;
    --light-code: tomato;

    --dark-bg: darkslategray;
    --dark-color: ghostwhite;
    --dark-code: gold;
}
* {
    background-color: light-dark(var(--light-bg), var(--dark-bg));
    color: light-dark(var(--light-color), var(--dark-color));
}
code {
    color: light-dark(var(--light-code), var(--dark-code));
}
~~~

``light-dark()`` 함수를 활성화하는 것 외에도 c``olor-scheme`` 속성은 문서 섹션에 대한 사용자 색 구성표를 재정의할 수 있도록 합니다. 페이지 섹션이 밝거나 어두운 색 구성표만 사용하도록 강제하려면 ``color-scheme`` 속성을 ``light`` 또는 ``dark``로 설정합니다.

> __참고__: 일반적으로 이 작업은 수행해서는 안 되며, 여기서는 데모 목적으로 사용하고 있습니다. 사용자가 선호 사항을 지정한 경우 일반적으로 선호 사항을 무시해서는 안 됩니다.

~~~css
.light {
    /* 밝은 색상 구성표를 강제로 적용합니다. */
    color-scheme: light;
}
.dark {
    /* 어두운 색상 구성표를 강제로 적용 */
    color-scheme: dark;
}
~~~

### Result ( 결과 )
공식 사이트에서 확인..

[내용출처 MDN 다크모드 설정](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
