# Flexbox Layout
새롭게 CSS3 명세에 반영된 레이아웃 모듈로서, 요소들이 수용된 공간을 어떻게 효과적으로 채워나갈지에 대한 아이디어에서 시작된 새로운 레이아웃 방식이다  

 이 명세는 일부 __IE 계열 브라우저에서 제조사 전용속성__ 을 필요로 하며, 다소 버그가 발생할 수 있지만, 아픙로의 레이아웃 방식을 완전히 대체할 만한 기술이므로 반드시 학습하길 권합니다

 ## Flexbox - _Flexible Box_
 Flexbox는, 유연한 요소(내용물), 그리고 그 요소를 담을 그릇으로 이루어집니다  
 그릇과 내용물 모두에게 이것(flexbox)라는 일종의 고유한 선언을 해주어야 합니다

 ![flex container](http://www.beautifulcss.com/wp/wp-content/uploads/2016/08/2812-02.png)

 ## Flex Container - _Parent_

 ### display
 그릇에 해당하는 부모 요소(이하, <mark>컨테이너</mark> 라 칭함)에 ```display: flex``` 혹은 ```display: inline-flex```로 flexbox임을 선언할 수 있습니다

 ~~~CSS
.container{display:flex}
 ~~~

 ### flex-direction
 컨테이너 안에 위치하는 자식 요소(이하 <mark>아이템</mark> 이라 칭함)에 어떤 방향성을 줄 것인지 결정합니다
 
 ~~~CSS
 .container{
     display: flex;
     flex-direction:row;
 }
 ~~~

 ![flxbox 내용물 상하좌우 여러방향에 정렬](http://www.beautifulcss.com/wp/wp-content/uploads/2016/08/2812-03.png)

 위 이미지처럼, flexbox는 내용물을 상하좌우 여러방향에 걸쳐 정렬할 수 있기 때문에, 차섿 레이아웃 방식으로 각광받고 있습니다

> 예제 이미지를 너무 정확히 이해하려고 하지 않아도 됩니다  
앞으로 속성 설명을 하다보면 자연히 익히게 됩니다
- row  
 기본 값, 아이템이 수평방향(행)으로 흐르며, 방향성은 __좌__ 에서 __우__ 입니다
 - row-reverse  
 아이템이 수평방향(행)으로 흐르며, 방향성은 __우__ 에서 __좌__ 입니다
 - column  
 아이템이 수직방향(열)으로 흐르며, 방향성은 __상__ 에서 __하__ 입니다
 - column-reverse  
 아이템이 수직방향(행)으로 흐르며, 방향성은 __하__ 에서 __상__ 입니다

 ### flex-wrap
아이템의 줄 넘기를 처리합니다

~~~CSS
.container{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
}
~~~

- nowrap  
기본 값, 아이템을 한 줄에 모두 표현합니다
- wrap  
아이템이 적정 길이 이상으로 길다면, 복수의 줄에 걸쳐 표현합니다
- wrap-reverse  
<mark>wrap</mark>과 같지만, 방향성이 반전되어 표현됩니다  
한마디로, __역방향으로 줄 넘김__ 이 발생합니다

> flex-direction과 flex-wrap 속성을 단축해서 사용할 수 있는 Shorcut 속성이 있습니다  
__flex-flow__ 속성을 사용하면 ```flex-flow: row wrap``` 처럼 첫 값에는 flex-direction, 두 번째 값에 flex-wrap을 선언할 수 있습니다

### justify-content
컨테이너의 빈 공간이 있을 경우, 아이템을 수평방향(Main Axis)으로 정렬하는 방식으로 선언합니다

~~~CSS
.container{
    display:flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content:flex-start;
}
~~~

- flex-start  
아이템을 한 덩어리로 묶어, 수평방향의 시작 점에 위치합니다
- flex-enter  
아이템을 한 덩어리로 묶어, 수평방향의 끝 점에 위치합니다
- center  
아이템을 한 덩어리로 묶어, 수평방향의 중앙에 위치합니다
- space-between  
아이템을 컨테이너의 양쪽 끝에 맞춰 정렬합니다
- space-around  
컨테이너의 양쪽 끝을 기준으로 각 아이템의 전,후에 일정한 간격의 공간을 만들어 정렬합니다

### align-items
컨터에니에 빈 공간이 있을 경우, 아이템을 수직방향(Cross Axis)으로 정렬하는 방식을 선언합니다  
```justify-content```의 수직 버전이라고 생각해도 좋습니다
~~~CSS
.container{
    display:flex;
    flex-flow:row rowrap;
    align-items:flex-start;
}
~~~
- flex-start  
아이템을 한 덩어리로 묶어, 수직방향의 시작 점에 위치합니다
- flex-enter  
이 아이템을 한 덩이리로 묶어, 수직방향의 끝 점에 위치합니다  
- center  
아이템을 한 덩어리로 묶어, 수직방향의 중앙에 위치합니다
- baseline  
아이템을 컨테이너의 baseline에 맞춰 정렬합니다
- stretch  
컨테이너의 양쪽 끝을 기준으로 각 아이템의 전, 후에 일정한 간격의 공간을 만들어 정렬합니다

정렬 값 중에서, __baseline__ 정렬이 개념 상 난해하다면 아래 예제를 참고하세요  
여기에서는 __숫자__ 가 컨테이너의 baseline 형태를 암시적으로 보여주고 있습니다  
각 아이템들이 컨테이너의 baseline을 중심으로 정렬합니다

### align-content
컨테이너에 빈 공간이 있을 경우, 한 줄을 넘기는 아이템들을 수직방향(Cross Axis)으로 정렬하는 방식입니다  

```align-item``` 과 ```justify-content``` 속성이 가지는 특징드을 모두 포함하고 있습니다

이 속성은 많은 아이템이 한 줄 이상 넘어가는 경우에 사용합니다. <u>만일 아이템이 한 줄을 넘지 않으면 이 속성은 효과를 내지 않습니다</u>

~~~CSS
.container{
    display: flex;
    flex-flow: row nowrap;
    align-content: flex-start;
}
~~~

- flex-start  
한 줄 이상의 여러 아이템을 한 덩어리로 묶어, 수직방향의 시작 점에 위치합니다
- flex-enter  
한 줄 이상의 여러 아이템을 한 덩어리로 묶어, 수직방향의 끝 점에 위치합니다
- center  
한 줄 이상의 여러 아이템을 한 덩어리로 묶어, 수직방향의 중앙에 위치합니다
- baseline  
아이템을 컨테이너의 baseline에 맞춰 정렬합니다
- space-between  
컨테이너의 수직방향 기준으로 아이템 사이의 줄(행)을 일정한 간격을 두고 정렬합니다  
- space-around  
컨테이너의 양쪽 끝을 기준으로 각 아이템 줄(행)의 전,후에 일정한 간격의 공간을 만들어 정렬합니다
- stretch  
컨테이너의 수직방향 기준으로 각 행의 아이템 높이를 컨테이너 높이에 맞춥니다

## Flex Item - _Children_
이제부터는 컨테이너 안에 위치할 __아이템이 가지는 속성__ 에 대해 설명합니다  
컨테이너 속성과 아이템 속성은 반드시 구분해서 사용해야 합니다  
아래에 설명하는 속성은 반드시 부모 요소 컨테이너에 ```display:flex```가 선언 되어 있어야 합니다

### order
컨테이너 안에서 아이템이 나열되는 순서를 선언합니다  
숫자가 작을수록 시작이며, 높을수록 끝에 위치합니다
___포지셔닝 :Position__ 에서 설명한 ```z-index``` 속성과 같은 방식이며, 음수 사용이 가능합니다

~~~CSS
.item-01{order:-1}
.item-02{order:1}
.item-03{order:2}
.item-04{order:3}
.item-05{order:99}
~~~

![order 속성에 대한 설명](http://www.beautifulcss.com/wp/wp-content/uploads/2016/09/order.png)

### flex-grow
~~~CSS
.item{flex-grow:0}
~~~
아이템이 컨테이너에서 차지할 부피를 화장합니다  
기본 값은 __0__ 이며, 숫자가 높을 수록 다른 아이템의 곱절 단위로 부피가 늘어납니다  
예를들어 grow 값이 2인 아이템은, grow가 1인 아이템 2개를 합한 크기가 됩니다. 이 경우, 전체 아이템의 부피는 다시 계산되어 화면에 랜더링 됩니다

값이 0인 상태로 너비 값이 없으며, 다른 아이템들의 값이 모두 0이고 자기 혼자만 1혹은 그 이상인 경우, 나머지 모든 공간을 차지합니다

여러 아이템을 한 줄에 자동으로 꽉 채우고 싶다면, 굳이 ```width="25%"```와 같은 속성을 정의해서 갯수에 제한을 둘 필요 없이, flex-grow 속성을 사용해서 간단히 구현할 수 있습니다

~~~CSS
.container{display:flex}
.container .items{flex-grow: 1}
~~~
>```flex-grow```와 ```flex-shrink``` 속성은 __음수__ 을 사용하지 않습니다

### flex-shrink
~~~CSS
.item{flex-shrink:1}
~~~
__flex-grow의 반대 속성__ 으로 보이지만, 계산 방식은 다릅니다  
기본 값은 1이며, 숫자가 높을수록 상대적으로 다른 아이템보다 부피를 축소합니다


### flex-basis
~~~CSS
.item{flex-basis:10p}
~~~
이 아이템의 기본 크기 값을 선언합니다  
단위로는 길이(px,em,rem..)과 %(퍼센테이지) 모두 사용할 수 있습니다  
이 속성은 다른 아이템의 속서오가도 맞물려 매우 많은 경우의 수를 제공하기도합니다  
여러 응용 방법에 대해서는 관련 문서를 찾는데로 추가하겠습니다
이 [링크](https://www.w3schools.com/cssref/playit.asp?filename=playcss_flex-basis&preval=10px)를 통해 이 속성의 간략한 사용법을 파악할 수 있습니다

~~~CSS
.item{flex: 1}
~~~
__flex-grow__ , __flex-shrink__ 그리고 __flex-basis__ 속성을 한번에 기재 하는 단축선언입니다  
기본 값은 ```0 1 auto``` 이며, flex-shrink와 flex-basis는 옵션 값으로서, 기재하지 않으며 자동적으로 기본 값이 선언됩니다  

위 예문에서의 ```flex : 1 ``` 은 ```flex-grow: 1 ``` 과 같은 의미가 됩니다

### align-self
~~~CSS
.item{align-self:stretch}
~~~
부모 요소인 컨테이너에서 선언한 정렬방식 안에서, 특정 아이템이 독자적인 정렬 값을 선언할 수 있습니다  
선언할 수 있는 값은 이전에 컨테이너 부분에서 설명한 ```align-items```와 동일합니다

## 도움이 될 만한 링크
이 문서에서 설명은 했지만 깉이 있게 다루지 않은 일부 내용들에 대해 좀 더 자세한 내용을 다루는 링크를 엄선했습니다  
- [flexbox 예제 한번에 보기](http://www.beautifulcss.com/wp/demo/flexbox/) : 이 문서에 포함시킨 모든 예제를 한눈에 알아보기 쉽도록 정리한 페이지입니다


[내용 출처](http://www.beautifulcss.com/archives/2812#FlexItem-Children)
> 해당 속성들의 예제가 홈페이지 있습니다 내용을 읽고 보시고 홈페이지 이동을 통해 꼭 예제를 확인해보기 바랍니다