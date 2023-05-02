# HTMLImageElement: referrerPolicy 속성
이 속성은 리소스를 가져올 때 보낼 리퍼러를 정의하는 요소 의 ``__HTMLImageElement.referrerPolicy__`` HTML 특성을 반영합니다 .referrerpolicy<img>

## 
문자열; 다음 중 하나:

### no-referrer
헤더 Referer는 완전히 생략됩니다. 리퍼러 정보는 요청과 함께 전송되지 않습니다.

### no-referrer-when-downgrade
URL은 프로토콜 보안 수준이 동일하게 유지되지만(예: HTTP→HTTP, HTTPS→HTTPS) 덜 안전한 대상(예: HTTPS→HTTP)으로 전송되지 않는 경우 리퍼러로 전송됩니다.

### origin
모든 경우에 참조자로 문서의 출처만 보내십시오. 문서는 https://example.com/page.html리퍼러를 보냅니다 https://example.com/.

### origin-when-cross-origin
same-origin 요청을 수행할 때 전체 URL을 보내되 다른 경우에는 문서의 출처만 보냅니다.

### same-origin
동일 사이트 출처에 대해 리퍼러가 전송되지만 교차 출처 요청에는 리퍼러 정보가 포함되지 않습니다.

### strict-origin
프로토콜 보안 수준이 동일하게 유지되는 경우(예: HTTPS→HTTPS)에만 문서의 원본을 리퍼러로 보내되 보안 수준이 낮은 대상(예: HTTPS→HTTP)으로 보내지 마십시오.

### strict-origin-when-cross-origin(기본)
이것은 정책이 지정되지 않은 경우 사용자 에이전트의 기본 동작입니다. 동일한 출처 요청을 수행할 때 전체 URL을 보내고, 프로토콜 보안 수준이 동일할 때만(예: HTTPS→HTTPS) 원본을 보내고, 덜 안전한 대상(예: HTTPS→HTTP)에는 헤더를 보내지 않습니다.

### unsafe-url
동일 출처 또는 교차 출처 요청을 수행할 때 전체 URL을 보냅니다. 이 정책은 TLS 보호 리소스에서 안전하지 않은 출처로 출처와 경로를 유출합니다. 이 설정의 영향을 신중하게 고려하십시오.

## 예
~~~js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // 원점을 리퍼러로 사용하여 이미지를 가져옵니다.
~~~

> react로 img 가져왔을 때 안나오는 이미지에 referrerPolicy='no-referrer'  넣어주니 나왔다 아직 원인을 모르겠다  
  
[내용출처 MDN ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy)