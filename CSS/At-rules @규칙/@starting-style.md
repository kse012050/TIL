# 사용법
~~~html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $('body > button.case01').click(function(){
                // $('div').toggleClass('active');
                if(!$(this).next('div').length){
                    $(this).after('<div class="case01 active"></div>')
                }else{
                    $(this).next('div.case01').remove();
                }
            })

            $('body > button.case02').click(function(){
                $('div.case02').toggleClass('active');
            })

            $('ul li button').click(function(){
                const idx = $(this).parent().index()
                $('ol li.active').removeClass('active')
                $('ol li').eq(idx).addClass('active')
            })
        })
    </script>
    <style>
        div{display: none; width: 100px; opacity: 0; aspect-ratio: 1; background-color: rgba(0, 0, 0, 0.5); transition: 1s; transition-behavior: allow-discrete;}
        div.active{display: block; opacity: 1;}
        @starting-style{
            div.active{opacity: 0;}
        }

        ul, ol{list-style: none; padding: 0; margin: 0;}
        ul{display: flex;}
        ol li{height: 100px; display: none; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); font-size: 30px; color: white; opacity: 0; transition: 0.5s; transition-behavior: allow-discrete;}
        ol li.active{display: flex; opacity: 1; }

        @starting-style{
            ol li.active{opacity: 0;}
        }
    </style>
</head>
<body>
    <button class="case01">버튼</button>

    
    <button class="case02">버튼</button>
    <div class="case02">

    </div>
    <ul>
        <li><button>버튼</button></li>
        <li><button>버튼</button></li>
    </ul>
    <ol>
        <li class="active">1</li>
        <li>2</li>
    </ol>
    <!-- <div>

    </div> -->
</body>
</html>
~~~

# @starting-style
__@starting-style__ CSS 규칙은 요소가 첫 번째 스타일 업데이트를 받을 때, 즉 이전에 로드된 페이지에 요소가 처음 표시될 때 전환하려는 요소에 설정된 속성에 대한 시작 값을 정의하는 데 사용됩니다.

## Syntax ( 구문 )
``@starting-style`` at 규칙은 두 가지 방법으로 사용할 수 있습니다.
1. 독립 실행형 블록의 경우 시작 스타일 선언을 정의하고 적용할 요소를 선택하는 하나 이상의 규칙 집합이 포함됩니다.
~~~css
@starting-style {
  규칙 세트
}
~~~
2. 기존 규칙 세트 내에 중첩되어 있는 경우 해당 규칙 세트에서 이미 선택된 요소에 대한 시작 속성 값을 정의하는 하나 이상의 선언이 포함됩니다.
~~~css
selector { /* 기존 규칙 세트 */
  /* ... */

  @starting-style {
    선언
  }
}
~~~

## Description ( 설명 )
예상치 못한 동작을 방지하기 위해 CSS 전환은 기본적으로 요소의 초기 스타일 업데이트 시 또는 표시 유형이 none에서 다른 값으로 변경될 때 트리거되지 않습니다. 첫 번째 스타일 전환을 활성화하려면 @starting-style 규칙이 필요합니다. 이 규칙은 이전 상태가 없는 요소에 대한 시작 스타일을 제공하여 전환할 속성 값을 정의합니다.  
  
@starting-style은 특히 최상위 레이어에 표시된 요소(예: 팝오버 및 모달 ``<dialog>``), display: none으로 변경되거나 display: none에서 변경되는 요소, DOM에 처음 추가되거나 제거되는 요소에 대한 진입 및 종료 전환을 만들 때 유용합니다.

> __참고__ : @starting-style은 CSS 전환에만 관련이 있습니다. CSS 애니메이션을 사용하여 이러한 효과를 구현하는 경우 @starting-style은 필요하지 않습니다. 예를 들어 CSS 애니메이션 사용을 참조하세요.  
  
@starting-style을 사용하는 방법에는 두 가지가 있습니다. 독립형 규칙으로 사용하거나 규칙 세트 내에 중첩하여 사용합니다.  
  
팝오버가 표시될 때(즉, 최상위 레이어에 추가될 때) 애니메이션을 적용하려는 시나리오를 고려해 보겠습니다. 열린 팝오버의 스타일을 지정하는 "원래 규칙"은 다음과 같습니다(아래 팝오버 예제 참조):

~~~css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
~~~

첫 번째 방법을 사용하여 애니메이션이 적용될 팝오버 속성의 시작 값을 지정하려면 CSS에 독립형 @starting-style 블록을 포함합니다.

~~~css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
~~~

> __참고__ : @starting-style at-rule과 "original rule"은 동일한 특이성을 갖습니다. 시작 스타일이 적용되도록 하려면 "original rule" 뒤에 @starting-style at-rule을 포함합니다. "original rule" 앞에 @starting-style at-rule을 지정하면 원래 스타일이 시작 스타일을 재정의합니다.  
  
중첩된 방법을 사용하여 팝오버의 시작 스타일을 지정하려면 "원래 규칙" 내부에 @starting-style 블록을 중첩할 수 있습니다.

~~~css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
~~~

## 시작 스타일은 정확히 언제 사용되나요?
요소가 DOM에서 처음 렌더링되거나 display: none에서 visible 값으로 전환될 때 @starting-style 스타일에서 전환된다는 것을 이해하는 것이 중요합니다. 초기 visible 상태에서 다시 전환되면 DOM에서 이제 표시되므로 더 이상 @starting-style 스타일을 사용하지 않습니다. 대신 해당 요소의 기본 상태에 존재하는 스타일로 다시 전환됩니다.  
  
실제로 이러한 상황에서 관리해야 할 세 가지 스타일 상태가 있습니다. 시작 스타일 상태, 전환된 상태 및 기본 상태입니다. 이러한 경우 "to" 및 "from" 전환이 다를 수 있습니다. 아래의 시작 스타일이 사용되는 경우 데모 예제에서 이에 대한 증거를 볼 수 있습니다.

## 예제는 꼭 공식사이트에서 확인해보세요!
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)