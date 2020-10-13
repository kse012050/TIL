# background-blend-mode
background-blend-mode CSS의 속성 세트에서는 요소의 배경 이미지는 서로와 요소의 배경색을 혼합해야 한다.  
  
브랜딩 모드는 ``background-image`` 속성과 동일한 순서로 정의되어야 합니다. 혼합 모드와 배경 이미지의 목록 길이가 같지 않으면 길이가 일치 할 때까지 반복 및 / 또는 짤립니다.

## Syntax 통사론
~~~css
/* One value */
background-blend-mode: normal;

/* Two values, one per background */
background-blend-mode: darken, luminosity;

/* Global values */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
~~~

### values 가치
#### ``<blend-mode>``
적용 할 혼합 모드입니다. 쉼표로 구분된 여러 값이 있을 수 있습니다.

## 형식적 구문 (속성값들?)
> MDN 공식사이트 의 속성 설명이 부족하다. (아직 많이 사용되지 않기 때문일까?)

>``<blend-mode>``#  
where   
``<blend-mode>`` = normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

[내용출처 MDN background-blend-mode](https://developer.mozilla.org/ko/docs/Web/CSS/background-blend-mode)


## 사용 예제
~~~css
background: url(bg.jpg), linear-gradient(45deg, #ff3479, #0319f4);
            background-blend-mode: soft-light;
~~~
> CSSeffect -> Online Tutorials -> How to make Zig-zag~~~

