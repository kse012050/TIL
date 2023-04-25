# `<a>`
__HTML__ ``<a>`` __요소__(앵커 요소)는 ``href`` 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. ``<a>`` 안의 콘텐츠는 링크 목적지의 설명을 __나타내야 합니다.__

## 특성
이 요소는 ``전역 특성``을 포함합니다.

### download
__파일을 연결할 때 a 태그에 download 속성을 넣어줘야 한다__  
  
링크로 이동하는 대신 사용자에게 URL을 저장할지 물어봅니다. 값을 지정할 수도 있고, 지정하지 않을 수도 있습니다.

- 값이 없으면 파일 이름과 확장자는 브라우저가 다양한 인자로부터 생성해 제안합니다.
    - Content-Disposition HTTP 헤더
    - URL 경로의 마지막 조각
    - 미디어 유형 (Content-Type 헤더, data: URL의 시작 부분, blob: URL의 Blob.type에서 알아냄)
- 값을 지정하면 저장할 때의 파일 이름으로서 제안합니다. /와 \ 문자는_로 변환합니다. 파일시스템에서 다른 문자도 제한할 수 있으므로, 필요한 경우 브라우저가 추가로 이름을 조정할 수 있습니다.

> __참고__:- download는 동일 출처 URL과 blob:, data: 스킴에서만 작동합니다.  
> - Content-Disposition의 filename이 download와 다를 땐 헤더가 우선권을 가집니다. (Content-Disposition: inline일 때, __Firefox__ 는 __헤더__ 를 우선하고 __Chrome__ 은 __download__ 를 우선합니다.)

### href
하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있습니다.

- 페이지 구획을 가리키는 프래그먼트 URL
- 미디어 파일 일부를 가리키는 미디어 프래그먼트
- tel: URL을 사용하는 전화번호
- mailto: URL을 사용하는 이메일 주소
- 웹 브라우저는 다른 URL 스킴을 지원하지 않지만, 웹사이트는 ``Navigator.registerProtocolHandler()``를 통해 지원할 수 있습니다.

### hreflang
링크 URL의 인간 언어에 대한 힌트. 특별한 내장 기능은 없습니다. 가능한 값은 전역 lang 특성과 동일합니다.

### ping
하나의 스페이스로 구분하는 URL 목록. 링크를 클릭해 따라갈 경우, 브라우저가 URL 각각에 POST 요청을 전송합니다. 대개 추적 용도로 사용합니다.

### referrerpolicy Experimental
URL을 가져올 때 사용할 리퍼러. Referrer-Policy (en-US) 문서에서 가능한 값과 효과를 확인하세요.

### rel
하나의 스페이스로 구분하는, 연결한 URL과의 관계를 나타내는 링크 유형 목록.

### target
링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, ``<iframe>``의 이름이나 특정 키워드입니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.

- ``_self``: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
- ``_blank``: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
- ``_parent``: URL을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.
- ``_top``: URL을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.  

> __참고__: target을 사용할 때, rel="noreferrer"를 추가해 window.opener API의 악의적인 사용을 > > 방지하는걸 고려하세요.

> __참고__: 최근의 브라우저(Firefox 79+ 등)에서는 target="_blank"를 지정하면 rel="noopener"를 적용한 것과 같은 동작을 합니다.

### type
링크 URL의 MIME type에 대한 힌트. 특별한 내장 기능은 없습니다.


## 예제
### 절대 URL로 연결
#### HTML
~~~html
<a href="https://www.mozilla.com">
    Mozilla
</a>
~~~

### 상대 URL로 연결
#### HTML
~~~html
<a href="//example.com">Scheme-relative URL</a>
<a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
~~~

### 같은 페이지의 요소로 연결
~~~html
<!-- <a> 요소로 아래의 구획에 연결 -->
<p><a href="#Section_further_down">
  아래 제목으로 건너뛰기
</a></p>

<!-- 링크가 향할 제목 -->
<h2 id="Section_further_down">아래의 제목</h2>
~~~
> __참고__: ``href="#top"``이나 빈 프래그먼트(``href="#"``)를 사용하면 현재 페이지의 최상단으로 이동하는 링크를 생성할 수 있습니다. HTML 명세를 확인하세요.

### 이메일 주소로 연결
사용자의 이메일 프로그램을 통해 새로운 메일을 보낼 수 있는 링크를 생성하려면 mailto: 스킴을 사용하세요.

~~~html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
~~~
제목과 본문 포함 등, ``mailto:`` URL에 관한 자세한 내용은 이메일 링크와 RFC 6068을 참고하세요.

### 전화번호로 연결
~~~html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
~~~
``tel:`` 링크는 장치의 능력에 따라 행동이 바뀝니다.  
  
- 휴대전화에서는 번호를 자동으로 입력합니다.
- 대부분의 운영체제에는 Skype, FaceTime처럼 전화를 걸 수 있는 프로그램이 있습니다.
- 웹사이트는 Navigator.registerProtocolHandler()를 사용해 전화를 걸 수 있습니다. web.skype.com을 참고하세요.
- 다른 행동으로는 연락처에 저장하기와 다른 장치로 전송 등이 있습니다.  

``tel:`` URL의 구문, 추가 기능, 그 외 더 자세한 정보는 RFC 3966을 참고하세요.

### ``download`` 특성으로 ``<canvas>``를 PNG로 저장하기
``download`` 특성과 ``data:`` URL을 사용해 ``<canvas>`` 요소의 콘텐츠를 이미지로 저장할 수 있습니다.  
  
저장 링크를 가진 그림판 예제
#### HTML
~~~html
<p>마우스 드래그로 그림을 그려보세요.
  <a href="" download="my_painting.png">다운로드</a>
</p>

<canvas width="300" height="300"></canvas>
~~~

### CSS
~~~css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
~~~

#### JAVASCRIPT
~~~js
var canvas = document.querySelector('canvas'),
    c = canvas.getContext('2d');
c.fillStyle = 'hotpink';

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener('mousemove', event =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

document.querySelector('a').addEventListener('click', event =>
  event.target.href = canvas.toDataURL()
);
~~~