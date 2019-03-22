# HTML 이미지 `<map>` 태그
`<map>` 태그는 이미지 맵을 정의합니다  
이미지 맵은 클릭 가능한 영역이 있는 이미지입니다

`<img>` 태그의 __name__ 속성은 `<map>` 태그의 usemap 속성과 연관되어 있으며 이미지와 맵 사이의 관계를 만듭니다  
`<map>` 요소의 수를 포함 `<area>` 이미지 맵의 클릭 가능한 영역을 의미합니다

ex)
~~~HTML
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
~~~

[내용 출처 w3school](https://www.w3schools.com/html/html_images.asp)