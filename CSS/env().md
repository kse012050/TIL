# env()
``env()`` CSS 함수는 var() 함수 및 사용자 지정 속성과 유사한 방식으로 사용자 에이전트 정의 환경 변수의 값을 CSS에 삽입하는 데 사용할 수 있습니다. 차이점은 사용자 정의가 아닌 사용자 에이전트 정의일 뿐만 아니라 환경 변수는 전역적으로 문서로 범위가 지정되는 반면 사용자 지정 속성은 선언된 요소로 범위가 지정된다는 것입니다.  
  
또한 선언 외부에서 사용할 수 없는 사용자 지정 속성과 달리 ``env()`` 함수는 속성 값의 일부 또는 디스크립터의 일부(예: 미디어 쿼리 규칙에서) 대신 사용할 수 있습니다. 사양이 발전함에 따라 선택기와 같은 다른 위치에서도 사용할 수 있습니다.  
  
원래 개발자가 콘텐츠를 뷰포트의 안전한 영역에 배치할 수 있도록 iOS 브라우저에서 제공하는 사양에 정의된 safe-area-inset-* 값을 사용하여 비직사각형을 사용하는 시청자에게도 콘텐츠가 표시되도록 할 수 있습니다. 표시합니다.  
  
예를 들어 ``env()``로 해결되는 일반적인 문제는 앱 사용자 인터페이스의 일부를 가리는 기기 알림 문제입니다. ``env()``를 사용하여 고정 요소를 배치하면 뷰포트의 안전한 영역에 표시되도록 할 수 있습니다.  
  
``env()`` 변수의 또 다른 사용 사례는 창 제어 오버레이 기능을 사용하여 전체 응용 프로그램 창 표면 영역을 활용하는 데스크탑 프로그레시브 웹 앱(PWA)입니다. titlebar-area-* 값을 사용하여 제목 표시줄이 있어야 할 위치에 요소를 배치하고 콘텐츠가 창 제어 버튼에서 벗어나도록 할 수 있습니다.

## Syntax
~~~css
/* 폴백 값이 없는 4개의 안전 영역 삽입 값 사용 */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* 폴백 값과 함께 사용 */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
~~~

### Values
#### ``safe-area-inset-top``, ``safe-area-inset-right``, ``safe-area-inset-bottom``, ```safe-area-inset-left```  
``safe-area-inset-*`` 변수는 뷰포트 가장자리에서 위쪽, 오른쪽, 아래쪽 및 왼쪽 삽입으로 사각형을 정의하는 네 가지 환경 변수입니다. 직사각형이 아닌 디스플레이의 모양. 일반 노트북 모니터와 같은 직사각형 뷰포트의 경우 해당 값은 0입니다. 직사각형이 아닌 디스플레이의 경우(예: 원형 시계 모드) 사용자 에이전트에서 설정한 4개의 값은 직사각형 내부의 모든 콘텐츠가 표시되도록 직사각형을 형성합니다.

#### ``titlebar-area-x``, ``titlebar-area-y``, ``titlebar-area-width``, ```titlebar-area-height```
``titlebar-area-*`` 변수는 데스크톱 장치에 설치된 PWA에 유용합니다. 데스크톱 PWA가 window-controls-overlay display_override 값을 사용하는 경우 titlebar-area-* 변수를 사용하여 콘텐츠가 창 제어 버튼(예: 최소화, 최대화 및 닫기)과 겹치지 않도록 할 수 있습니다.

#### ``keyboard-inset-top``, ``keyboard-inset-right``, ``keyboard-inset-bottom``, ``keyboard-inset-left``, ``keyboard-inset-width``, ``keyboard-inset-height``
``keyboard-inset-*`` 변수는 온스크린 가상 키보드의 모양에 대한 정보를 제공합니다. 뷰포트 가장자리에서 위쪽, 오른쪽, 아래쪽 및 왼쪽 삽입으로 사각형을 정의합니다(너비 및 높이 삽입은 다른 삽입에서 계산됨). 자세히 알아보려면 [VirtualKeyboard API](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)를 참조하세요.

## Usage ( 용법 )
브라우저에 화면의 사용 가능한 전체 공간을 사용하도록 지시하고 env() 변수를 사용할 수 있도록 하려면 새로운 뷰포트 메타 값을 추가해야 합니다.

~~~html
<meta name="viewport" content="viewport-fit=cover" />
~~~
그런 다음 CSS에서 env()를 사용할 수 있습니다.
~~~css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px) env(
      safe-area-inset-bottom,
      20px
    ) env(safe-area-inset-left, 20px);
}
~~~

## Examples
### env()를 사용하여 버튼이 장치 UI에 의해 가려지지 않도록 합니다.
다음 예제에서 ``env()``는 고정 앱 도구 모음 버튼이 화면 하단에 표시되는 장치 알림에 의해 가려지지 않도록 하는 데 사용됩니다. __데스크탑에서 safe-area-inset-bottom은 0__ 입니다. 그러나 __iOS__ 와 같이 화면 하단에 알림을 표시하는 장치에서는 알림이 표시될 공간을 남겨두는 값을 포함합니다. 그런 다음 padding-bottom 값에 사용하여 해당 장치에서 자연스럽게 나타나는 간격을 만들 수 있습니다.
~~~html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
~~~
~~~css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eee;
  padding: 1em;
}

footer {
    flex: none;
    display: flex;
    gap: 1em;
    justify-content: space-evenly;
    background: black;
    padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
    /* 패딩의 초기 1em에 safe-area-inset-bottom 값을 추가합니다.
     이 변수에 양수 값이 있는 장치에 대해 더 큰 검은색 영역이 표시됩니다. */
    position: sticky;
    bottom: 0;
}

button {
    padding: 1em;
    background: white;
    color: black;
    margin: 0;
    width: 100%;
    border: none;
    font: 1em system-ui;
}
~~~

![env()를 사용하여 버튼이 장치 UI에 의해 가려지지 않도록 합니다. 결과 이미지](./images/env()-result-img01.png)

### Using the fallback value ( 대체 값 사용 )
아래 예제에서는 환경 변수를 사용할 수 없는 경우 대체 값을 제공할 수 있는 env()의 선택적 두 번째 매개 변수를 사용합니다.
~~~html
<p>
    브라우저에서 <code>env()</code> 기능이 지원되는 경우 이
    단락의 텍스트와 왼쪽 테두리 사이에 50px의 여백이 있습니다
    그러나 상단, 오른쪽 및 하단은 아닙니다. 이는 함께 제공되는 CSS가
    다른 CSS와 달리 <code>padding: 0 0 0 50px</code>와 동일합니다.
    속성, 사용자 에이전트 속성 이름은 대소문자를 구분합니다.
</p>
~~~
~~~css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px) env(
      safe-area-inset-bottom,
      50px
    ) env(SAFE-AREA-INSET-LEFT, 50px);
}
~~~

![env() 대체 값 사용 결과 이미지](./images/env()-result-img02.png)

### Example values ( 예제 값 )
~~~css
/* 모든 직사각형 사용자 에이전트에 대해 0 */
padding: env(safe-area-inset-bottom, 50px);

/* UA 속성은 대소문자를 구분하므로 50px */
padding: env(safe-area-inset-bottom, 50px);

/* 마치 패딩: '50px 20px' x가 유효한 환경 변수가 아니기 때문에 설정된 것처럼 */
padding: env(x, 50px 20px);

/* '50px, 20px'는 유효한 패딩 값이 아니며 x는 유효한 환경 변수가 아니므로 무시됨 */
padding: env(x, 50px, 20px);
~~~
대체 구문은 사용자 지정 속성과 마찬가지로 쉼표를 허용합니다. 그러나 속성 값이 쉼표를 지원하지 않으면 값이 유효하지 않습니다.

> __참고:__ 사용자 에이전트 속성은 all 속성으로 재설정되지 않습니다.

### Using env() to ensure content is not obscured by window control buttons in desktop PWAs ( env()를 사용하여 데스크톱 PWA의 창 제어 버튼으로 콘텐츠가 가려지지 않도록 합니다. )

다음 예제에서 ``env()``는 [Window Controls Overlay API](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)를 사용하는 데스크톱 프로그레시브 웹 앱에 표시되는 콘텐츠가 운영 체제의 창 컨트롤 버튼으로 가려지지 않도록 합니다. ``titlebar-area-*`` 값은 일반적으로 제목 표시줄이 표시되는 사각형을 정의합니다. 모바일 장치와 같이 Window Controls Overlay 기능을 지원하지 않는 장치에서는 대체 값이 사용됩니다.  
  
데스크톱 장치에 설치된 PWA는 일반적으로 다음과 같습니다.

![env() 이미지](./images/env()-img01.png)

창 컨트롤 오버레이 기능을 사용하면 웹 콘텐츠가 창 컨트롤과 PWA 버튼이 오버레이로 표시되는 전체 앱 창 표면 영역을 덮습니다.

![env() 이미지](./images/env()-img02.png)

~~~html
<header>Title of the app here</header>
<main>Main content of app here</main>
~~~

~~~css
header {
    position: fixed;
    left: env(titlebar-area-x);
    top: env(titlebar-area-y);
    width: env(titlebar-area-width);
    height: env(titlebar-area-height);
}

main {
    margin-top: env(titlebar-area-height);
}
~~~

> __참고:__ position:fixed를 사용하면 머리글이 나머지 콘텐츠와 함께 스크롤되지 않고 대신 탄성 오버스크롤(고무 밴딩이라고도 함)을 지원하는 장치/브라우저에서도 창 제어 버튼과 정렬된 상태로 유지됩니다.

[내용출처 evn() MDN IOS(아이폰) 노치? 값 넣는 것?](https://developer.mozilla.org/en-US/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas)