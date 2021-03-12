# appearance (-moz-appearance, -webkit-appearance)
외관 CSS 속성은 운영 체제의 테마에 따라 플랫폼 고유 스타일을 사용하여 요소를 표시하는 데 사용됩니다. ``-moz-appearance`` 및 ``-webkit-appearance`` 속성은이 속성의 비표준 버전으로, Gecko (Firefox) 및 WebKit 기반 (예 : Safari) 및 Blink 기반 (예 : Chrome, Opera)에서 (각각) 사용됩니다. 동일한 것을 달성하기 위해 브라우저. Firefox와 Edge는 호환성을 위해 ``-webkit-appearance``도 지원합니다.

``-moz-appearance`` 속성은 플랫폼에 적합한 스타일로 사용자 정의 위젯을 디자인하기 위해 XUL 스타일 시트에서 사용되었습니다. 또한 Mozilla 플랫폼과 함께 제공되는 위젯의 XBL 구현에도 사용되었습니다. Gecko / Firefox 80부터 이러한 용도는 ``-moz-default-appearance``로 변경되었으며 내부 스타일 시트 외부에서 사용해서는 안됩니다.

## 사용 예제
### 아이폰 input (button, submint)
~~~css
input[type=submit] {-webkit-appearance:none;}
~~~
submit 아이폰 사파리 초기화

[내용출처 MDN appearance 아이폰 css 초기화](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)