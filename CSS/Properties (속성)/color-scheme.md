# color-scheme
``color-scheme`` CSS 속성을 사용하면 요소가 어떤 색 구성표로 편안하게 렌더링할 수 있는지 나타낼 수 있습니다. 사용자 에이전트는 사용된 색 구성표와 일치하도록 UI 크롬의 다음 측면을 변경합니다.  
  
- 캔버스 표면의 색상.
- 스크롤바 및 기타 상호 작용 UI의 기본 색상.
- 양식 컨트롤의 기본 색상.
- "맞춤법 검사" 밑줄과 같은 다른 브라우저 제공 UI의 기본 색상.

구성 요소 작성자는 나머지 요소의 색 구성표를 지원하기 위해 ``prefers-color-scheme`` 미디어 기능을 사용해야 합니다.  
  
운영 체제 색 구성표의 일반적인 선택 사항은 "밝음"과 "어둠" 또는 "주간 모드"와 "야간 모드"입니다. 사용자가 이러한 색 구성표 중 하나를 선택하면 운영 체제가 사용자 인터페이스를 조정합니다. 여기에는 양식 컨트롤, 스크롤바 및 사용된 CSS 시스템 색상 값이 포함됩니다.

## Syntax ( 문법 )
~~~css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Global values */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
~~~
색상 구성표 속성 값은 다음 키워드 중 하나여야 합니다.

### Values ( 값 )
#### normal
페이지의 색 구성표 설정을 사용하여 요소를 렌더링할 수 있음을 나타냅니다. 페이지에 색 구성표가 설정되어 있지 않으면 페이지의 기본 색 설정을 사용하여 요소가 렌더링됩니다.

#### light
운영 체제의 light 색 구성표를 사용하여 요소를 렌더링할 수 있음을 나타냅니다.

#### dark
운영 체제의 dark 색 구성표를 사용하여 요소를 렌더링할 수 있음을 나타냅니다.

#### only
사용자 에이전트가 요소의 색 구성표를 재정의하는 것을 금지합니다.  
  
특정 요소나 ``:root``에 ``color-scheme: only light;``를 적용하여 Chrome의 자동 어둡게 테마로 인한 색상 재정의를 해제하는 데 사용할 수 있습니다.

## Examples ( 예제 )
### 색상 구성표 기본 설정 선언
전체 페이지를 사용자의 색상 구성표 기본 설정에 포함하려면 ``:root`` 요소에 ``color-scheme``을 선언합니다.
~~~css
:root {
    color-scheme: light dark;
}
~~~
사용자의 색 구성표 기본 설정에 특정 요소를 포함하려면 해당 요소에 색 구성표를 선언합니다.
~~~css
header {
    color-scheme: only light;
}
main {
    color-scheme: light dark;
}
footer {
    color-scheme: only dark;
}
~~~

#### 색상 구성표에 따른 스타일링
색 구성표 선호도에 따라 요소의 스타일을 지정하려면 ``prefers-color-scheme`` 미디어 쿼리를 사용합니다. 아래 예에서는 ``color-scheme`` 속성을 통해 전체 페이지에서 밝고 어두운 운영 체제 색상 구성표를 사용하도록 선택한 다음 ``prefers-color-scheme``을 사용하여 해당 색상 구성표의 개별 요소에 대해 원하는 전경색과 배경색을 지정합니다.

~~~css
:root {
    color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
    .element {
        color: black;
        background-color: white;
    }
}

@media (prefers-color-scheme: dark) {
    .element {
        color: white;
        background-color: black;
    }
}
~~~
또는 실험적 ``light-dark()`` ``<color>`` 함수를 사용하여 더욱 컴팩트한 코드 구조를 통해 다양한 색상 구성표에 대한 전경색과 배경색을 설정합니다.

~~~css
:root {
    color-scheme: light dark;
}

.element {
    color: light-dark(black, white);
    background-color: light-dark(white, black);
}
~~~
[내용출처 MDN]