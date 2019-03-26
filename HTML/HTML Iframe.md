#HTML Iframe
iframe은 웹페이지 내에 웹 페이지를 표시하는데 사용합니다

## Iframe 구문
src 속성은 인라인 프레임 페이지의 URL(웹 주소)을 지정합니다
~~~HTML
<iframe src="URL"></iframe>
~~~

## Iframe 링크 타겟
iframe은 링크 대상 프레임으로 사용할 수 있습니다  
`<a>` 태그의 __target__ 속성은 링크의 참조해야 합니다  
`<iframe>` 태그의 __name__ 속성으로 링크의 참조해야 합니다

~~~HTML
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
~~~

[내용 출처 w3school](https://www.w3schools.com/html/html_iframe.asp)