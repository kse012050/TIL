# filter
filter 속성은 해당 요소에 적용된 [``<filter>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) 요소에 의해 정의 된 필터 효과를 지정합니다.  
  
참고 : 프레젠테이션 속성으로 필터를 CSS 속성으로 사용할 수 있습니다. 자세한 내용은 [css 필터](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)를 참조하세요  
  
프레젠테이션 속성으로 모든 요소에 적용 할 수 있지만 ``<defs>`` 요소, [모든 그래픽 요소](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Graphics_elements) 및 ``<use>`` 요소에만 영향을 줍니다.

~~~html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur">
    <feGaussianBlur stdDeviation="2" />
  </filter>

  <rect x="10" y="10" width="80" height="80" filter="url(#blur)" />
</svg>
~~~

## ``<filter>``
``<filter>`` SVG 요소는 원자 필터 프리미티브를 그룹화하여 사용자 정의 필터 효과를 정의합니다. 자체적으로 렌더링되지는 않지만 SVG 요소의 필터 속성 또는 SVG / HTML 요소의 필터 CSS 속성에서 사용해야합니다.

~~~html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
 <filter id="blurMe">
   <feGaussianBlur stdDeviation="5"/>
 </filter>

 <circle cx="60" cy="60" r="50" fill="green" />

 <circle cx="170" cy="60" r="50" fill="green"
          filter="url(#blurMe)" />
</svg>
~~~

[내용출처 MDN filter](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter)  
[내용출처 MDN ``<filter>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)