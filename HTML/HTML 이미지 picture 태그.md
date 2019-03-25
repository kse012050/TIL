# HTML 이미지 `<picture>` 태그
이미지 리소스를 지정할 때 더 많은 유연성을 추가 하는 요소입니다  
`<picture>` 엘리먼트는 서로 다른 이미지 소스를 참조하는 다수의 `<source>` 엘리먼트를 포함합니다  
이렇게 하면 브라우저가 현재보기 및 / 또는 장치에 가장 잘 맞는 이미지를 선택할 수 있습니다  
각 `<source>` 요소에는 이미지가 가장 적합한시기를 설명하는 속성이 있습니다  
브라아저는 `<source>` 일치하는 속성 값과 함께 첫 번째 요소를 사용하고 다음 `<source>` 요소를 무시합니다
  

  ex )
  ~~~HTML
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
  ~~~

  [내용 출처 w3school](https://www.w3schools.com/html/html_images.asp)