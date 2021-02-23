# ``<script>`` : 스크립트 요소
__HTML ``<script>``__ 요소는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 씁니다. [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API)의 GLSL 셰이더 프로그래밍 언어, [JSON](https://developer.mozilla.org/ko/docs/Glossary/JSON) 등 다른 언어와도 사용할 수 있습니다.

## 특성
이 요소는 __전역 특성__ 을 포함합니다.

### async 
일반 스크립트에 ``async`` 속성이 존재하면 HTML 구문 분석 중에도 스크립트를 가져오며, 사용 가능해지는 즉시 평가를 수행합니다.

모듈 스크립트에 ``async`` 속성이 존재하면 모듈 스크립트와 모든 의존 스크립트를 지연 큐에서 실행하므로 함께 병렬로 불러오며, 이와 동시에 구문 분석을 수행하고 사용 가능해지는 즉시 평가합니다.

기존 방식은 브라우저가 HTML 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, ``async`` 속성을 사용하면 __분석기를 멈추는 JavaScript__ 를 제거할 수 있습니다. defer도 비슷한 효력을 냅니다.

``async``는 불리언 속성입니다. 속성이 존재하면 참을 나타내고, 속성이 존재하지 않으면 거짓을 나타냅니다.

브라우저 호환성을 참고하세요.

#### head + async
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script asyn arc="main.js"></script>
</head>
<body>
    
</body>
</html>
~~~

##### result
![ansy images](./images/scriptAsync.PNG)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script asyn arc="a.js"></script>
    <script asyn arc="b.js"></script>
    <script asyn arc="c.js"></script>
</head>
<body>
    
</body>
</html>
~~~

##### result
![ansy images](./images/scriptAsync02.PNG)

### defer
브라우저가 스크립트를 문서 분석 이후에, 그러나 DOMContentLoaded 발생 이전에 실행해야 함을 나타내는 불리언 속성입니다.

``defer`` 속성을 가진 스크립트는 자신의 평가가 끝나기 전까지 ``DOMContentLoaded`` 이벤트의 발생을 막습니다.

> ``src`` 속성이 존재하지 않을 때(인라인 스크립트인 경우 등)에는 아무런 효과도 없으므로 사용해서는 안됩니다.  
> 또한 모듈 스크립트는 기본적으로 지연 평가하므로, ``defer``를 지정해도 변화가 없습니다.

``defer`` 속성을 가진 스크립트는 문서상의 순서를 따라 실행됩니다.

기존 방식은 브라우저가 HTML 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, ``defer`` 속성을 사용하면 __분석기를 멈추는 JavaScript__ 를 제거할 수 있습니다. ``async``도 비슷한 효과를 가집니다

#### head + defer
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer arc="main.js"></script>
</head>
<body>
    
</body>
</html>
~~~
##### result

![ansy images](./images/scriptDefer.PNG)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer arc="a.js"></script>
    <script defer arc="b.js"></script>
    <script defer arc="c.js"></script>
</head>
<body>
    
</body>
</html>
~~~

![ansy images](./images/scriptDefer02.PNG)

[내용출처 MDN script](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)  
[내용출처 엘리 코딩](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)