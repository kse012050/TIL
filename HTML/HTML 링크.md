# HTML 링크 - 하이퍼 링크
HTML 링크는 하이퍼 링크입니다  
링크를 클릭하여 다른 문서로 이동할 수 있습니다  
HTML에서 링크는 다음 __`<a>`__ 태그로 정의됩니다

## 지역 링크
로컬 링크 (동일한 웹 사이트에 대한 링크)는 상대 URL(https://www ... 없이)으로 지정할 수 있습니다  
ex )
~~~HTML
<a href="html_images.asp">HTML Images</a>
~~~

## HTML 링크 색상
기본적으로 링크는 다음과 같이 표시 됩니다
+ 방문하지 않은 링크는 밑줄이 그어져 파란색으로 표시됩니다
+ 방문한 링크에 밑줄이 그어지고 자주색입니다
+ 활성 링크에는 밑줄이 그어지고 빨간색으로 표시됩니다

### CSS를 사용하여 기본 색상을 변경 가능합니다
#### :link

#### :visited
평상시 `<a>` 태그에 CSS를 입힐 수 있습니다
#### :hover
마우스를 `<a>` 태그 위에 올렸을 때 CSS를 입힐 수 있습니다
#### :active
클릭을 한 순간의 `<a>` 태그에 CSS를 입힐 수 있습니다

## HTML 링크 - 대상 속성
__target__ 속성은 링크 된 문서를 열 위치를 지정합니다  
target 속성은 다음 값 중 하나를 사용할 수 있습니다  
+ <mark>_blank</mark> - 링크 된 문서를 새 창이나 탭에서 엽니다
+ <mark>_self</mark> - 클릭 한 것과 동일한 창 / 탭에서 링크 된 문서를 엽니 다 (기본값)
+ <mark>_parent</mark> - 링크 된 문서를 부모 프레임에 엽니다
+ <mark>_top</mark> - 링크 된 문서를 창 전체에서 엽니다
+ <mark>framename</mark> - 명명 된 프레임에 링크 된 문서를 엽니다

## HTML 링크 - 북마크 만들기
HTML 책갈피는 독자가 웹 페이지의 특정 부분으로 이동할 수 있게하는데 사용됩니다  
웹 페이지가 너무 길면 책갈피가 유용할 수 있습니다  
책갈피를 만들려면 먼저 책갈피를 만든 다음 해당 책갈피에 대한 링크를 추가해야합니다  
링크를 클릭하면 페이지가 책갈피가 있는 위치로 스크롤됩니다

+ 먼저 __id__ 속성이 있는 책갈피를 만듭니다
~~~HTML
<h2 id="C4">Chapter 4</h2>
~~~
+ 그런 다음 동일한 페이지 내에서 북마크에 대한 링크를 추가할 수 있습니다
~~~HTML
<a href="#C4">Jump to Chapter 4</a>
~~~
+ 또는 다른 페이지에서 북마크에 대한링크를 추가할 수 있습니다
~~~HTML
<a href="html_demo.html#C4">Jump to Chapter 4</a>
~~~

[내용 출처 w3school](https://www.w3schools.com/html/html_links.asp)

[target의 내용 예제](http://www.tagindex.net/html/frame/a_target.html)
