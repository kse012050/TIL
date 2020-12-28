# feTurbulence
``<feTurbulence>`` SVG 필터 프리미티브는 [Perlin 난류 함수](https://en.wikipedia.org/wiki/Perlin_noise)를 사용하여 이미지를 생성합니다. 구름이나 대리석 같은 인공 텍스처를 합성 할 수 있습니다. 결과 이미지는 전체 필터 기본 하위 영역을 채 웁니다.

## 사용 컨텍스트
__카테고리__ 기본 요소 필터링  
__허용 된 콘텐츠__ 순서에 관계없이 다음 요소의 수에 관계없이 : [``<animate>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) , [``<set>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set)

## 속성
### 전역 속성
- [핵심속성](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#Core_attributes)  
- [프리젠 테이션 속성](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#Presentation_attributes)  
- [기본 속성 필터링](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#Filter_primitive_attributes)  
- [class](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class)
- [style](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/style)

### 특정 속성
- [baseFrequency](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency)

#### baseFrequency
__baseFrequency 베이스 회수__ 속성은 ``<feTurbulence fe난기류>`` 필터 프리미티브의 노이즈 함수에 대한 기본 주파수 매개 변수를 나타냅니다.  
  
하나의 요소 만이 속성을 사용합니다. ``<feTurbulence>``
~~~html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
~~~

##### Usage notes 사용법 참조
__값__ : ``<number-optional-number>``  
__기본값__ : 0  
__애니메이션 가능__ : 예

###### ``<number-optional-number>``
두 개의 숫자가 제공되는 경우 첫 번째 숫자는 수평 방향의 기본 주파수를 나타내고 두 번째 숫자는 수직 방향의 기본 주파수를 나타냅니다. 하나의 숫자가 제공되면 해당 값이 x와 y 모두에 사용됩니다.  
  
음수 값은 금지됩니다.

##### Example 예
~~~html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
~~~~

[내용출처 MDN baseFrequency](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency)  

- [numOctaves](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/numOctaves)
#### numOctaves
__numOctaves__ 속성은 ``<feTurbulence>`` 프리미티브의 노이즈 함수에 대한 옥타브 수를 정의합니다.  
      
옥타브는 주파수와 진폭으로 정의되는 노이즈 함수입니다. 난류는 주파수가 증가하고 진폭이 감소하는 여러 옥타브를 축적하여 생성됩니다. 옥타브 수가 높을수록 노이즈가 더 자연스럽게 보입니다. 옥타브가 많을수록 더 많은 계산이 필요하므로 성능에 부정적인 영향을 마칩니다.  
  
하나의 요소 만이 속성을 사용합니다. ``<feTurbulence>``

~~~html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="1" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
~~~

##### Usage notes 사용법 참조
__value 값__ : ``<integer>``  
__Default Value 기본값__ : 1  
__Animatable 애니메이션__ : Yes 예  

###### ``<integer>``
옥타브 수를 정의합니다. 음수 값은 금지됩니다.

##### Example 예
~~~html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05"
        numOctaves="3" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
~~~

[내용출처 MDN numOctaves](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/numOctaves)  
  
- [seed](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/seed)

#### seed
__seed__ 특성의 의사 난수 발생기에 대한 출발 번호 나타내는 ``<feTurbulence>`` 프리미티브 필터  
  
하나의 요소 만이 속성을 사용하고 있습니다. ``<feTurbulence>``
~~~html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="100" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter:url(#noise1);" />
  <rect x="0" y="0" width="200" height="200" style="filter:url(#noise2); transform: translateX(220px);" />
</svg>
~~~

##### 사용법 참조
__값__ : ``<number>``  
__기본값__ : 0  
__애니메이션 가능__ : 예  

##### Example 예
~~~html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05" seed="1000"
        result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
~~~

[내용출처 MDN seed](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/seed)

- [stitchTiles](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stitchTiles)

#### stitchTiles
__stitchTiles__ 속성은 펄린 노이즈 타일이 테두리에서 작동하는 방식을 정의합니다.  
  
하나의 요소 만이 속성을 사용합니다. ``<feTurbulence>``

~~~html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="noStitch" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="stitch" />
  </filter>

  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1); transform: translate(100px, 0);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1); transform: translate(0, 100px);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1); transform: translate(100px, 100px);" />

  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise2); transform: translate(220px, 0);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise2); transform: translate(320px, 0);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise2); transform: translate(220px, 100px);" />
  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise2); transform: translate(320px, 100px);" />
</svg>
~~~

##### Usage notes 
__값__ : noStitch | stitch  
__기본 값__ : noStitch  
__애니메이션 가능__ : 예

###### noStitch 
이 값은 난류 함수를 포함하는 타일의 경계에서 부드러운 전환을 달성하려는 시도가 없음을 나타냅니다. 떄때로 결과는 타일 테두리에서 명확한 불연속성을 보여줍니다.  
  
###### stitch
이 값은 사용자 에이전트가 기본 주파수의 x 및 y 값을 자동으로 조정하여 [``<feTurbulence>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence) 노드의 너비 및 높이 (즉, 현재 하위 영역의 너비 및 높이)에 타일 너비의 정수를 포함하고 첫 옥타브 높이

[내용출처 MDN stitchTiles](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stitchTiles)

- [type](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type)

## DOM 인터페이스
이 요소는 [SVGFETurbulenceElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGFETurbulenceElement) 인터페이스를 구현합니다.

### Example 예
~~~html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
~~~

[내용출처 MDN ``<feTurbulence>``](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence)