# ellipsis (생략)
## 말줄임 처리 방식
- 웹 개발이나 스크립트 단에서 글자수를 기준으로 자르는 방법
- CSS를 이용해 정해진 너비 값을 기준으로 자르는 방법

## 두 줄 이상의 말줄임 방법
-webkit-line-clamp 속성의 경우, webkit 전용이라(크롬,사파리 가능) 사용하지 않는 브라우저의 경우(IE, 파이어폭스 )에는 line-height 속성과 height 속성을 이용하여 높이를 계산하여 넣어준다 (height = line-height * 줄수)

다른 방법으로는 개발언어로 글자수를 처리 하거나 jQuery Plugin 으로 구현 가능하다  
[http://github.com/FrDH/jQuery.dotdotdot](http://github.com/FrDH/jQuery.dotdotdot)

## text-overflow
텍스트가 포함 된 요소를 오버플로 할 때 줄임표 추가 하는 속성  
[http://www.w3.org/TR/css3-ui/#text-overflow](http://www.w3.org/TR/css3-ui/#text-overflow)

- clip : 기본값, 텍스트를 잘라낸다.
- ellipsis : 말줄임표로 처리.
- inherit : 상위요소의 속성과 동일하게 사용

> ellipsis 사용하려면 해당 요소에 overflow 속성 값이 hidden 이나 scroll, auto 중 하나여야 하고 __white-space:nowrap__ 속성을 함께 사용할 경우에만 정용되며 상위요소의 너비가 auto로 되어있는 경우는 적용할 수 없다

[ellipsis 내용 출처](https://happysos.tistory.com/7)