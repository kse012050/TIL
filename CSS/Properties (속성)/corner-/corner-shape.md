# corner-shape
`corner-shape`라는 단축 CSS 속성은 `border-radius` 속성 값으로 지정된 영역 내에서 상자 모서리의 모양을 지정합니다.

## 구성 요소 속성
모서리 모양 속성은 다음과 같은 물리적 속성을 간략하게 표현한 것입니다.
- corner-top-left-shape
- corner-top-right-shape
- corner-bottom-left-shape
- corner-bottom-right-shape

## Syntax
~~~css
/* 네 모서리 모두에 단일 값 설정 */
corner-shape: bevel;

/* 왼쪽 위, 오른쪽 아래, 오른쪽 위, 왼쪽 아래 */
corner-shape: notch superellipse(0.6);

/* 왼쪽 위, 오른쪽 위, 왼쪽 아래, 오른쪽 아래 */
corner-shape: superellipse(-1.2) square squircle;

/* 왼쪽 위, 오른쪽 위, 오른쪽 아래, 왼쪽 아래 */
corner-shape: scoop superellipse(-1.6) superellipse(-2.2) round;

/* 전역 값 */
corner-shape: inherit;
corner-shape: initial;
corner-shape: revert;
corner-shape: revert-layer;
corner-shape: unset;
~~~
`corner-shape` 속성은 `<corner-shape-value>` 값을 하나, 둘, 셋 또는 네 개 사용하여 지정할 수 있습니다.  
- 값이 하나만 사용되는 경우, 네 모서리 모두의 모양을 지정합니다.
- 값이 두 개 사용되는 경우, 첫 번째 모양은 왼쪽 위 모서리와 오른쪽 아래 모서리에 적용되고, 두 번째 모양은 오른쪽 위 모서리와 왼쪽 아래 모서리에 적용됩니다.
- 값이 세 개 사용되는 경우, 첫 번째 모양은 왼쪽 위 모서리의 모양을 지정하고, 두 번째 모양은 오른쪽 위 모서리와 왼쪽 아래 모서리의 모양을 지정하며, 세 번째 모양은 오른쪽 아래 모서리의 모양을 지정합니다.
- 값이 네 개 사용되는 경우, 왼쪽 위, 오른쪽 위, 오른쪽 아래, 왼쪽 아래 모서리의 모양을 시계 방향으로 순서대로 지정합니다.

## Values
### `<corner-shape-value>`
코너의 모양을 설명하는 superellipse() 또는 이와 동등한 키워드 값입니다.

## Description
`corner-shape` 속성은 `border-radius` 속성 및 관련 긴 형식에 의해 생성된 둥근 모서리의 모양을 수정하는 데 사용됩니다. 이미 둥근 모서리는 적용되는 둥근 정도를 조정하여 경사 모서리, 톱니 모양 모서리, 스쿼클 모서리와 같은 다양한 모서리 모양을 만들 수 있습니다. 컨테이너에 적용되는 테두리, 윤곽선, 그림자 및 배경 효과는 정의된 모서리 모양을 따릅니다.  
  
컨테이너에 `border-radius`가 적용되지 않았거나 `border-radius`가 0으로 해석되는 경우 `corner-shape` 속성은 아무런 효과가 없습니다.  
  
`corner-shape` 단축 속성과 관련 `corner-*-shape` 단축 및 긴 형식은 하나에서 네 개의 `<corner-shape-value>` 값을 허용합니다. 각 값은 `superellipse()` 함수 또는 공통 모양을 설명하는 키워드로 직접 지정할 수 있습니다. 각 키워드는 특정 `superellipse()` 값과 동일합니다.  
  
`corner-shape`의 기본값은 `round`이며, 이는 `corner-shape` 없이 `border-radius`만 사용했을 때와 동일한 효과를 냅니다. `square`라는 키워드 값도 있는데, 이는 기본 사각형 모서리와 동일한 효과를 내며 적용된 `border-radius`를 사실상 제거합니다. `bevel` 값은 `border-radius`의 양 끝점을 직선으로 연결하는 효과를 냅니다.  
  
`corner-shape` 키워드 값에 해당하는 값을 보간 값으로 사용하여 서로 다른 `corner-shape` 값 사이를 부드럽게 애니메이션 처리할 수 있습니다.  
  
`corner-shape` 단축 구문은 네 모서리의 모양을 모두 동일하게 설정하거나, 하나의 선언으로 서로 다른 값을 설정하려는 경우에 특히 유용합니다. 한 번에 하나 또는 두 개의 모서리 모양만 설정하려면 `corner-*-shape` 단축 구문과 전체 구문을 사용하십시오.

### corner-*-shape 속기법과 장문법
코너 모양 단축 구문은 한 번의 선언으로 네 모서리의 모양을 모두 정의합니다.  
  
한 번에 하나의 모서리 모양만 설정하려면 코너 모양 전체 구문을 사용하십시오.  
- 물리적인 긴 손 모양 모서리 특성:
    - corner-bottom-left-shape
    - corner-bottom-right-shape
    - corner-top-left-shape
    - corner-top-right-shape
- 논리적인 긴 표기법 모서리 모양 속성:
    - corner-start-start-shape
    - corner-start-end-shape
    - corner-end-start-shape
    - corner-end-end-shape

두 개의 모서리 모양을 한 번에 설정하려면 측면 약어를 사용하십시오.
- 물리적 측면의 간략한 속성:
    - corner-top-shape
    - corner-right-shape
    - corner-bottom-shape
    - corner-left-shape
- 논리적 측면의 간략한 속성:
    - corner-block-start-shape
    - corner-block-end-shape
    - corner-inline-start-shape
    - corner-inline-end-shape

### 반대쪽 모서리 모양 반지름 제한
마주 보는 모서리의 테두리 반경(border-radius)과 모서리 모양(corner-shape) 값이 겹쳐지는 경우, 브라우저는 겹침을 방지하기 위해 값을 제한합니다.  
  
예를 들어, 다음 값들은 왼쪽 위 모서리와 오른쪽 아래 모서리를 겹치게 만듭니다. 따라서 브라우저는 첫 번째 테두리 반경 값을 겹침을 방지하는 값으로 조정합니다.

~~~css
div {
    width: 480px;
    height: 200px;
    background-color: goldenrod;
    border-radius: 80% 20px;
    corner-shape: scoop;
}
~~~

### 모서리 모양을 따르는 속성
컨테이너에 설정될 때 다음 속성들은 모두 모서리의 모양을 따릅니다.
- background-color
- background-image
- border
- outline
- box-shadow
- overflow
- backdrop-filter

모서리 모양을 따르는 속성의 예시를 보려면 데모를 참조하십시오.

## Examples
### 기본 모서리 모양 사용법
#### HTML
이 예제의 마크업에는 ``<div>`` 요소가 하나만 포함되어 있습니다.
~~~html
<div>Nice scooped corners</div>
~~~

#### CSS
상자에 고정된 높이, 그림자 효과, 30픽셀의 테두리 반경, 그리고 오목한 모서리 모양을 적용하고, 간결성을 위해 숨긴 몇 가지 추가 스타일도 적용했습니다.
~~~css
div {
    height: 180px;
    box-shadow: 1px 1px 3px gray;
    border-radius: 30px;
    corner-shape: scoop;
}
~~~

#### Result
[렌더링된 결과는 다음과 같습니다.](https://developer.mozilla.org/en-US/play?uuid=6040908c0197b766ef7dccf77ed67551c5cdf795&state=dVNNb9swDP0rnIahzRC3TrIAg1IU222n3Qf4Iku0rVYWBYlOYhT574O%2FsrbbDgIkPj5Rj496EQ23TkjxYOzx8afVCEkTBTSgKXqM6eF%2BQAov1kKnJKQoyfTwUniAijxnlWqt6yUU4ge6I7LVqhBrKMT3aJUbtkn5lCWMtjoMrJM13EjYfsnDeQy0KtbWS9jm4QyqYzoU%2FlL4wht7nAoZm4JTvYTK4cR56hLbqs80eUbPEjR6xjhiytnaZ5axTW%2FipdLPdaTOm0yToyhB98q%2Fh2yrapTgrEcVszoqY9Hz7ZAFwAQlMVO7ns6xLm%2B3%2Bz0s6x7y1f%2Bhu%2F1qwFaLvm%2BpC4EiJ%2FDEcDs1PEuNCignG1aT%2Fj8tH9Q5CZ1PyPDBtgNdeR5FjHdOyVKWWFHEhXRtUyF%2BURehjHRKGMEQTsXnlwA3CDevH3IDIVLAyP1dIQ7LbWP3Sqf08xz6u7cfq0qb3W7Grw6Wjq6keRI2ef5pjjCeORv9e%2BMcQFDGWF9L2ERsIX%2BvFx7h86L1WsqTxyXx8mqaGrR1wxI2X5cJLOk8qDV0krAJ53HtwhnqqPo5IRqM2TAMXZKwW4j%2FsGwyV6zF0%2FBZxFpwgy0KKdxQVVx%2BAw%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fcorner-shape%2F)  
  
스쿱(scoop)의 코너 모양 값이 컨테이너의 모서리를 오목하게 만드는 방식을 주목하세요. 이 곡선은 기본 테두리 반경 곡선의 반전된 형태입니다. 또한 배경, 테두리 및 그림자가 이 곡선의 모양을 따라가는 것도 확인하세요.

### 모서리 모양을 따르는 속성의 시연
#### HTML
이 예제의 마크업은 텍스트 콘텐츠가 포함된 하나의 ``<div>`` 요소로 구성되어 있습니다.
~~~html
<div>
    Some styles follow the corner shape, such as border, outline, box-shadow,
    overflow, and backdrop-filter. This is useful for helping various aspects of
    your design to not clash. As shown, it can result in some interesting visual
    effects, so you should test your design carefully.
</div>
~~~

#### CSS
일부 스타일이 컨테이너 모서리의 모양을 따라가는 방식을 보여주기 위해 문서의 ``<body>``에 ``background-image``를 적용한 다음 ``<div>``에 ``border-radius``를 ``40px``로, ``corner-shape``를 ``scoop notch``로 적용합니다.  
  
다음으로 ``<div>``에 다음을 적용합니다.
- 반투명 배경색.
- 각 모서리의 ``테두리 색상``과 스타일이 다릅니다.
- ``<body>``에 설정된 배경 이미지를 반전시키는 배경 필터.
- 클릭 가능한 콘텐츠 영역이 모서리 모양 바깥쪽에 있음을 보여주는 ``호버 스타일``.

간결성을 위해 추가 설정 스타일은 숨겨져 있습니다.
~~~css
body {
    background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg") no-repeat;
    background-size: cover;
}

div {
    border-radius: 40px;
    corner-shape: scoop notch;
    background-color: rgb(255 255 255 / 0.2);
    border-top: 3px solid blue;
    border-left: 6px dashed red;
    border-bottom: 9px solid yellow;
    border-right: 12px double green;
    backdrop-filter: invert(100%);
}

div:hover {
    background-color: white;
}
~~~

#### Result
[렌더링된 결과는 다음과 같습니다.](https://developer.mozilla.org/en-US/play?uuid=b1ac52b8d48ea3b4fe166fb5e860bfd2237583da&state=dVRNj9w2DP0rrIoiu4U9M7vbFK02CJpb7%2B0lgC%2ByRVvayKIg0vPRYP97Idsz8abowYBN0k%2BPj0%2F8qpyMQWn1wfrjxyYC%2FEUjAsslIENPIdAJxCF0lCNmYGcSVsBT58AwtJQt5gpokuAjVtDSuWZnLJ2qAkZHzH2gUwUmWmhN98VmSnXvg2Dewd%2FOM3iGibGfAvSUwWFIPg5wNNnTxGA4YScM1Be8C00ZLLIfIghBJIEuGHY7%2BMTAjk6xAi%2FQmQgZeQoCPgKXjnwUzMgyY3ueTCh42PcFvQKmgl0gpmBBkOXNWZ3JhWG47Jr4Yb9IpSrVMSs9KwhfC5xDPzjR8HA4%2FPTcxNcmNrEle1myPUWpezP6cNHQqD8xHFF8ZxpVQaM%2BZW9CeWUTuWbMvn%2FeYvroMHuZY6PJg48aDvOX9ZyCuWjoA57nyMvE4vtL3VEUjKKhw9L%2BnDPBD7H2giNv4jNV648L05O34jQ8%2FnJI5zckHn5bInP5HzylRFl4nsPd4pB6dogG7ohSSXTufgH9JkQhETRMkVHgBz8WEBOX1mbkpVjrFnvKeP3p1k2jPpfZtJlOjBks4UJh5TP79d2WzjtImRJmuewa9XxFC5Q1tMF0X9ZQ8eeQaYq2XrM%2F9n1nn57W%2FE3oNtDtp1WrdeQlIniWepb5jfAAyVjr46DhIeO4Dm%2FTL3yEn6%2B93o6KFPFa%2BLp10zeyGqYc7hrlRBLr%2FX60cTd4cVO787RnZzLa2jCj8N6PZkDe49mMKSDvA1Iy2e5e0tCo%2B%2BXsSHXGhGYZyEYU9v%2Bghq5c6v9YZtkEdTbWT6zh5pz%2FdcX34KvieWjvHt%2B%2Fh%2Buzh8Pu8f55c4RQ0vCUzsAUvIU2TLhNB%2BxFw6%2FpDNawQwsZ7TbfkgiNGn6%2FIVywbLltTV7d%2FlhQaGoDwpAR443zZouVm3nELHfFAfcbXbQrQn0%2FrGufJ%2BcFl2pVqZeyR1SlxOGISqtQCKjXfwE%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fcorner-shape%2F)  
  
대부분의 스타일이 모서리 모양 스타일로 인해 생성된 ``<div>``의 모양을 따르지만, 모든 스타일이 그런 것은 아니라는 점에 유의하세요. 콘텐츠는 원래 상자를 기준으로 표시되며, 왼쪽 위 모서리와 아래 모서리를 넘어 튀어나온 텍스트 위에 마우스를 올리면 호버 효과가 여전히 적용됩니다.


### 모서리 모양 값 비교
이 데모에서는 컨테이너의 모서리 모양 값과 테두리 반경 값을 다르게 설정하고 그 효과를 비교할 수 있습니다.

#### HTML
이 예제의 마크업에는 다양한 모서리 모양 값을 선택할 수 있는 ``<select>`` 선택기, 다양한 테두리 반경 값을 선택할 수 있는 ``<input type="range">`` 슬라이더, 그리고 선택한 값을 적용할 컨테이너를 만드는 ``<section>`` 요소가 포함되어 있습니다. ``<option>`` 선택 요소는 ``<optgroup>`` 요소를 사용하여 두 그룹으로 나뉜 여러 키워드 및 ``superellipse()`` 값 선택 항목을 제공합니다. 키워드 값의 경우, 각 값에 해당하는 ``superellipse()`` 값도 파이프 문자(|)로 구분하여 함께 제공합니다.

~~~html
<form>
  <div>
    <label for="corner-shape-choice">Choose a corner-shape value:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
~~~

#### CSS
``<section>`` 요소에 ``box-shadow``를 적용합니다. 또한 ``<section>`` 및 폼 요소에 몇 가지 기본 스타일을 적용하지만, 가독성을 위해 숨겼습니다.
~~~css
section {
    box-shadow: 1px 1px 3px gray;
}
~~~
사용자가 선택한 값을 ``<section>``에 적용하는 JavaScript 코드는 간결성을 위해 숨겨져 있습니다.

#### Result
[렌더링된 결과는 다음과 같습니다.](https://developer.mozilla.org/en-US/play?uuid=e0ee56b846f8957e182948536e43988592a49464&state=lVbbbuM2EP2VKbvFOkXkS1IDrSwbbRdbbNHtS7coUIAPocSRxF2a1JKUYyHNvxckpUS%2BJEgeBNLkOWeGM8Oh70jttpKkJCu12W6oAsi42IUJQCZZjhJKbdaUFNooNImtWYNJUWtRICWbd7XWFoHBeBt2TLaYZrPAH8QsSiwcCP6kWAQCZLpxldFtA0FgTckf2N1qw%2B0IFGFCq2htTYn92jLjdeIE%2FgPbNmhQStFYnAhVCiVcd5HNIvGMVPQR%2BVhTmEL2qmF6rHv1nOCgY3SrOCWbMB4rLF6ikOMOJSWbMB4rzF%2BiYAutG38QPx4rJC9yQmlX1JRswngi8XSEw0JI6TNJ%2Fq1VhWedzfLmwNT1M84eIhfT5Yux81dgk1eBX%2BNFcuZwJ%2FHLZrFU45WdDXf2qctrGBetTawUHM342ubacDRJ3D9%2Fb4VqWjc44romlDNTFVIyrIY7fWRj2NsKtaZk%2Frgw1NIPyxGI7deU%2FDRCWYfNmpIFJTA7OGQ261tVZjGUy8bHoujDRS5JYS1JQ1%2BDO08stXJJybZCdilQ8gHlDp0oGCWXQMkvRjDpp5Ypm1g0olxRdU8VVbnmXZS4FdzVKZTCJYVWDpVb%2BeUtM5VQKVzNmz2w1umB2fsTyVzYRrIuhVLiPvA%2Bt9aJshu0UihQOTRhj0lRqUQ43NqD9WgrcbqJ9h5Nha4aLDWMc6GqFK6bPSwfMT5gwMUuVa5OdJn4JE6uLiJpLBw5py6fHqqPyGI%2B%2Fy4wahRV7VJY%2FDjvNXJWfKlCu0sKLbVJodKSH2%2BJLaswBSkUMpNUvoZQuUmsAqch187p7WX8bap8crVcwvDNYH7x9NZ0eeH3Lgb%2Ff7Zt02jjLCjtYDJ%2BglIIPbGPyGPefTpkCq2y6OAbsfV01ic%2FaEZwmuZYaoMD6SGvlPyrWwO50bcWDXCN0XjvCbga4e3YkbfQGN2gcd2UktWgFqKXS1Z86ZdOY%2FttWRb8%2Brrff8hfLvUD6ThlAA73LgkFd1Bqo0JaGNzC%2FPi8sIHvh7M%2BmFJa4QC8P6qWXO%2F9%2Bbi%2BTWHR7MPna7QyrIvpIZfks7%2B2hVbWgcHCMVVJhDVwXbRbVG76tUXTfQrlrs2Ekt4CJT7DkddfhmdJfjrmhFY2plTo3kv001%2B73%2FnkpLF5KlVl%2F1iBRfcuZNBO%2Bvp58H5qXSdxGhP8KfwzWvc%2BTkMXDPGKbuTmH78Ca7h5cxd8ipD7Zn%2BzOqcaO%2FdfsXGvB%2F4RVCiF5sPff370uuFxyArNcXNY%2FG%2Fuxk7dr7JZAGW56eEHr4TH99YeoaE53xw2pSnj%2FP0OlfsorEOFPv5FHV%2BOy1HcfEDjic8Q4utzgh9HfRXKx9W4RZIS6RsRuf8f&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fcorner-shape%2F)  
  
모서리 모양에 어떤 변화가 생기는지 확인하기 위해 다양한 값을 선택해 보세요.

### superellipse() 값 비교
이 예제에서는 두 개의 ``<input type="range">`` 슬라이더를 제공하여 다양한 ``corner-shape`` ``superellipse()`` 값과 ``border-radius`` 값을 순환하며 컨테이너에 미치는 각 효과를 비교할 수 있도록 합니다.

#### HTML
이 예제의 마크업에는 서로 다른 모서리 모양 ``superellipse()`` 및 테두리 반경 값을 선택할 수 있는 두 개의 ``<input type="range">`` 요소와 이러한 값을 적용할 ``<section>`` 요소가 포함되어 있습니다.
~~~html
<form>
  <div>
    <label for="superellipse-slider">Choose a superellipse() value:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
~~~

#### CSS
``<section>`` 요소에 ``box-shadow``를 적용합니다. 간결성을 위해 추가적인 기본 스타일은 숨겼습니다.
~~~css
section {
    box-shadow: 1px 1px 3px gray;
}
~~~
사용자가 선택한 값을 ``<section>``에 적용하는 JavaScript 코드는 간결성을 위해 숨겨져 있습니다.

#### Result
[렌더링된 결과는 다음과 같습니다.](https://developer.mozilla.org/en-US/play?uuid=67384bf5bd58ad2fbbfc025fe641e986141dbfd6&state=pVVti%2BM2EP4rU3XLJWWdOLcNtI6ztD0WrnD9clcKBX1Y2Ro7upMlV5KzMSH%2FvUiy83pLC%2F1gkDUzzzPPzHi8JxvXSJKRvNKmeaQKIOdiGw4AuWQFSqi0WVNiuxYNSilai4mVgqOh5PHdRmuLwODcPJnClskOs3weEEY4odrOxTOA61tcU2KYqpGS8Vbw16hGj0aoNSXJ8nQTuNaUpGdObLem5MzHOmy9y2xBCcyj0Pmo9DXJhnHR2a%2BILbThaJJo%2F39arzguVaa3In9YXqv8Kb2ReSsynw8Nzi2WTmj1mM%2FHE1XknpTWkixMA%2Bx9YKWVSyrWCNlnQMl7lFt0omSU3AMlvxjBpD9apmxi0YhqRdWBKqoKzfsI8SK422RQCZeUWjlUbuWvG2ZqoTJ4m7Y7YJ3TY%2BSQTwzmwraS9RlUEnch7nNnnaj6ESuDEpVDE2xMilolwmFjL%2B4jV%2BJ0G%2FlGKl8M4GIbuc69lm1ku%2Ba%2FzXCQt0jT70LEBkW9cRksfkwHjIKVX2qjO8WTUkttMtBhBK6NomE1ZiCFQmaS2o8EKjeJTXUaCu2cbu7ju6mLydvlEsZnDun0ddNsOfW26ajgZ9u1rTbOgtIOJqU2Ck1iN6zF7PIbTqfTqPPUUF9nmUGnLDr4RjQeiA1dDejROcsKrLTBMejYMEr%2B0p2BwugXiwa4xpjGkBO4DcKb85TeQGt0i8b1M0pWI1qoZCFZ%2BWW4uq3zt1VV8oeHwX7sZSH1Mei6fQAOdy4Jk3QxQwAt41yoOoOFwQbSa73wCN%2BPWo9USiscHQ9Xk1PondfH9UsGi3YXnod2B7VhfWwUuSef%2FfdYamUdGCwdU7VEWAPXZdegcrO%2FOzT9J5RYOm0mlAwMlPhex7jQz6fYz49%2B8M7ja3RPEv3x1%2F43Pnll657A4s77GNbVv4NdrTUPQ1XVqVgFi%2B5daLOdDEM2JIx%2F%2BjUHa3i%2BmMW7%2FY2UWViIh%2BlzKPKxQjPreomzOESf%2FAzBeoRdnYgKcyS6298oG7Db3dfBz%2F1hPWJduQql0Lz%2F4%2FcPniP8YPJSc3y8%2FOLu9kNuh1U%2BD%2Fa8MIPnxU%2FGuw5EJ9ew25%2BPy%2BmmRIzzpy0q90FYhwr9lMTfkl%2Fcxxb43tyW4L%2FHnjdzFUbXbbBBkhHpFyI5%2FAM%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fcorner-shape%2F)  
  
모서리 모양에 어떤 변화가 생기는지 확인하기 위해 다양한 값을 선택해 보세요.

### 모서리 모양 애니메이션
이 예제에서는 모서리 모양 속성을 애니메이션으로 표현하는 방법을 보여줍니다.

#### HTML
~~~html
<div></div>
~~~

#### CSS
사각형과 톱니 모양의 모서리 값 사이를 부드럽게 전환하는 ``@keyframes`` 애니메이션 세트를 생성합니다. 그런 다음 해당 ``@keyframes``를 기반으로 애니메이션을 ``<div>`` 요소에 적용합니다. 이 애니메이션은 ``<div>`` 요소를 포함하는 ``<html>`` 요소에 마우스 커서가 올라가거나 포커스가 맞춰졌을 때 실행됩니다. 간결성을 위해 ``<div>`` 요소에 대한 기본적인 스타일은 숨겼습니다.
~~~css
@keyframes corner-pulse {
    0% {corner-shape: square;}
    /* 
        시작점을 명확히 하기 위해
        잠시 동안 모양을 동일하게 유지합니다. 
    */
    20% {corner-shape: square;}
    100% {corner-shape: notch;}
}
div {
    animation: corner-pulse infinite alternate 4s linear;
}
~~~

#### Result
[렌더링된 결과는 다음과 같습니다.](https://developer.mozilla.org/en-US/play?uuid=935efa1f7214ae53d26b5440366a7f31f9514111&state=jVTbbtswDP0VTkPRpkgat1lelKLoR%2BxlgF9ki7G1yJRG0W2Cov8%2ByHbaNGuBPciwyXN4ORT9olrpvNLq3rqnh%2Ftlfpak5qpOSWlVBXuAl5IAnp2VVsNdUcT9Jhs6w42jbIl7ML2ETUmvJZVk3dMHym1RXAyMFl3TymmMytS7hkNPdlEHH1hDw4h07nOdaVCDd4SGFw0b65DkKqMAJEAVREI3H7%2B5qa7u1ms4niUUs69dN%2BtZ9s3GlGG%2FSK2x4VnDbdwPZxX30LA5TAC2yItcQJ80rKfG6sCEnKkRNaQ%2FvWEcHKGXXLQGCoRHfR5TH2NgSUBB4Ooz8mwU8F19AOO9hp4SCnxzXeYbkiHJEHQEa13hNjAeSXUgQRINpfoVeoaKw3NCBhtwzD6VAtIiXJ5WcgmRQ0SWw02pNsdow4gqb%2BrdZPp3gN%2B329quVpPfuhS9OWRSeCOd3wsAwb0sjHcNaaiRBHlyRGOto0bDLWMHxXm%2F8ADXx17fUk1aD8DXkh53eNiy6TAd5xR7nyaJiot3qb6Y4ZRueQ0%2FA3Rmh4NYSQyLowZicCRgYjSMJHPwKNAn2CHGTBuwOeb4ZjqEbWAwkDrjPdiejbhAN3C9zPC7%2Fy8oy%2Fc5loLU7YkCJytpyHVDQv1RDEdbR04QjBdkMoLwI00LN95bNVe%2F8x9BzZW02KHSyud1Vq9%2FAQ%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fcorner-shape%2F)  
  
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)