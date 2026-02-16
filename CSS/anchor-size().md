# anchor-size()
`anchor_size()` CSS 함수를 사용하면 앵커로 지정된 요소의 크기, 위치 및 여백을 앵커 요소의 크기에 상대적으로 설정할 수 있습니다. 이 함수는 대상 앵커 요소의 지정된 변의 길이를 반환합니다. `anchor_size()`는 앵커로 지정된 요소의 `sizing`, `inset`, `margin` 속성 값 내에서만 유효합니다.  
  
앵커 기능 및 사용법에 대한 자세한 내용은 CSS 앵커 위치 지정 모듈 및 CSS 앵커 위치 지정 사용 가이드를 참조하십시오.

## Syntax
~~~css
/* 매개변수 없이 */
anchor-size()

/* 앵커 크기 매개변수 */
anchor-size(width);
anchor-size(block);
anchor-size(self-inline);

/* 앵커 이름 및 앵커 측면 */
width: anchor-size(--my-anchor width);
block-size: anchor-size(--my-anchor block);

/* 지정된 앵커 측면을 기준으로 크기 조정(대체 값 사용) */
width: anchor-size(--my-anchor width, 50%);
block-size: anchor-size(--my-anchor block, 200px);

/* 앵커 측면을 기준으로 위치 지정 */
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);

/* 앵커 측면을 기준으로 여백 설정 */
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
~~~

## Parameters
anchor-size() 함수의 구문은 다음과 같습니다.
~~~css
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
~~~
매개변수는 다음과 같습니다.

### ``<anchor-name>`` Optional
요소의 크기, 위치 또는 여백을 상대적으로 설정할 기준이 되는 앵커 요소의 ``anchor-name`` 속성 값입니다. 이 값은 ``<dashed-ident>`` 형식입니다. 생략하면 요소의 기본 앵커가 사용됩니다.
> __참고__: ``anchor-size()`` 함수 내에서 ``<anchor-name>``을 지정하는 것은 요소를 앵커에 연결하거나 고정하는 것이 아니라, 요소의 속성 값이 어떤 앵커를 기준으로 설정될지를 정의하는 것일 뿐입니다.

### ``<anchor-size>`` Optional
위치 지정 요소의 속성 값이 설정될 기준이 되는 앵커 요소의 크기를 지정합니다. 유효한 값은 다음과 같습니다.

- ``width``  
앵커 요소의 너비

- ``height``  
앵커 요소의 높이

- ``block``  
앵커 요소가 속한 블록의 블록 방향 길이

- ``inline``  
앵커 요소가 속한 블록의 인라인 방향 길이

- ``self-block``  
앵커 요소 자체의 블록 방향 길이

-# ``self-inline``  
앵커 요소 자체의 인라인 방향 길이

> __참고__: 이 매개변수를 생략하면 기본 크기는 함수가 포함된 속성의 축과 일치하는 ``<anchor-size>`` 키텀으로 설정됩니다. 예를 들어 ``width: anchor-size();``는 width: ``anchor-size(width);``와 같습니다.

### ``<length-percentage>`` Optional
요소가 절대 위치 지정 또는 고정 위치 지정되지 않았거나 앵커 요소가 존재하지 않는 경우 대체 값으로 사용할 크기를 지정합니다. 대체 값이 사용되어야 하는 경우에 이 매개변수를 생략하면 선언이 유효하지 않습니다.
> __참고__: 위치 지정 요소의 속성 값을 설정할 때 기준으로 삼는 앵커 치수는 설정되는 크기 값과 동일한 축을 따라 있을 필요가 없습니다. 예를 들어, ``width: anchor-size(height)``는 유효한 예입니다.

## Return value
``<length> `` 값을 반환합니다.

## Description
`anchor-size()` 함수를 사용하면 위치 지정된 요소의 크기, 위치 및 여백 값을 앵커 요소의 크기를 기준으로 표현할 수 있습니다. 이 함수는 위치 지정된 요소의 속성 값이 설정되는 기준이 되는 특정 앵커 요소의 크기를 나타내는 `<length>` 값을 반환합니다. 이 값은 앵커로 위치 지정된 요소에 설정된 크기, 여백 및 마진 속성에 유효한 값입니다.  
  
반환되는 `length` 값은 앵커 요소 또는 해당 요소를 포함하는 블록의 세로 또는 가로 크기입니다. 사용되는 크기는 `<anchor-size>` 매개변수로 정의됩니다. 이 매개변수를 생략하면 크기, 위치 또는 마진 속성이 설정된 축의 크기가 사용됩니다. 예를 들면 다음과 같습니다.  
  
- `width: anchor-size()`는 `width: anchor-size(width)`와 같습니다.
- `top: anchor-size()`는 `top: anchor-size(height)`와 같습니다.
- `margin-inline-end: anchor-size()`는 `margin-inline-end: anchor-size(self-inline)`와 같습니다. 또한, 가로 쓰기 모드에서는 `margin-inline-end: anchor-size(width)`와, 세로 쓰기 모드에서는 `margin-inline-end: anchor-size(height)`와 같습니다.  
  
크기 길이를 결정하는 기준이 되는 앵커 요소는 `<anchor-name>` 매개변수에 지정된 앵커 이름을 가진 요소입니다. 동일한 앵커 이름을 가진 요소가 두 개 이상인 경우, DOM 순서상 마지막에 있는 요소가 사용됩니다.  
  
`<anchor-name>` 매개변수가 없는 경우, 요소의 `position-anchor` 속성에 지정된 기본 앵커 또는 HTML의 `anchor` 속성을 통해 연결된 앵커가 사용됩니다.  
  
`<anchor-name>` 매개변수가 포함되었지만 해당 앵커 이름과 일치하는 요소가 없는 경우, 대체 값이 사용됩니다. 대체 값이 지정되지 않은 경우, 해당 선언은 무시됩니다. 예를 들어, `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);`와 같이 지정된 요소에 `--foo`라는 이름의 앵커가 DOM에 존재하지 않는 경우, 너비는 50px가 되고 높이 선언은 적용되지 않습니다.  
  
요소에 sizing, position, margin 속성에 anchor-size() 값이 설정되어 있지만, 앵커로 위치 지정된 요소가 아닌 경우(즉, position 속성이 absolute 또는 fixed로 설정되어 있지 않거나 position-anchor 속성을 통해 앵커가 연결되어 있지 않은 경우), 사용 가능한 대체 값이 사용됩니다. 대체 값이 없으면 해당 선언은 무시됩니다.  
  
예를 들어, 위치 지정된 요소에 width: anchor-size(width, 50px);가 지정되었지만 연결된 앵커가 없는 경우, 대체 값이 사용되어 width에는 계산된 값인 50px가 적용됩니다.  
  
앵커 기능 및 사용법에 대한 자세한 내용은 CSS 앵커 위치 지정 모듈과 CSS 앵커 위치 지정 사용 가이드를 참조하십시오.

### anchor-size() 함수 값을 허용하는 속성
anchor-size() 함수를 값으로 허용하는 속성은 다음과 같습니다.
- 크기 속성:
    - ``width``
    - ``height``
    - ``min-width``
    - ``min-height``
    - ``max-width``
    - ``max-height``
    - ``block-size``
    - ``inline-size``
    - ``min-block-size``
    - ``min-inline-size``
    - ``max-block-size``
    - ``max-inline-size``
- 삽입 속성:
    - ``bottom``
    - ``left``
    - ``right``
    - ``top``
    - ``inset`` shorthand
    - ``inset-block`` shorthand
    - ``inset-block-end``
    - ``inset-block-start``
    - ``inset-inline`` shorthand
    - ``inset-inline-end``
    - ``inset-inline-start``
- 여백 속성:
    - ``margin`` shorthand
    - ``margin-bottom``
    - ``margin-left``
    - ``margin-right``
    - ``margin-top``
    - ``margin-block`` shorthand
    - ``margin-block-end``
    - ``margin-block-start``
    - ``margin-inline`` shorthand
    - ``margin-inline-end``
    - ``margin-inline-start``

### calc() 함수 내에서 anchor-size() 사용하기
일반적으로 사용하게 될 `anchor-size()` 함수는 기본 앵커 요소의 크기를 참조합니다. 또는 `calc()` 함수 안에 `anchor-size()` 함수를 포함시켜 배치된 요소에 적용되는 크기를 수정할 수도 있습니다.  
  
예를 들어, 다음 규칙은 배치된 요소의 너비를 기본 앵커 요소의 너비와 동일하게 조정합니다.
~~~css
.positionedElem {
    width: anchor-size(width);
}
~~~
이 규칙은 위치가 지정된 요소의 인라인 크기를 기준 요소의 인라인 크기의 4배로 조정하며, 곱셈은 ``calc()`` 함수 내부에서 수행됩니다.
~~~css
.positionedElem {
    inline-size: calc(anchor-size(self-inline) * 4);
}
~~~

## Examples
### anchor-size() 함수의 기본 사용법
이 예제는 앵커를 기준으로 배치된 두 요소의 크기를 anchor-size() 함수를 사용하여 조정하는 방법을 보여줍니다.

#### HTML
우리는 세 개의 ``<div>`` 요소, 하나의 ``앵커 요소``, 그리고 앵커를 기준으로 배치할 두 개의 ``정보 상자 요소``를 지정합니다. 또한 스크롤이 필요하도록 ``<body>`` 요소의 높이를 충분히 높이기 위해 채움 텍스트를 포함하지만, 간결성을 위해 숨겼습니다.
~~~html
<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
    <p>This is the first infobox.</p>
</div>

<div class="infobox" id="infobox2">
    <p>This is the second infobox.</p>
</div>
~~~

#### CSS
우리는 ``앵커 요소``인 ``<div>``에 앵커 ``이름을 지정``하여 앵커 요소로 선언합니다. ``position`` 속성이 fixed로 설정된 위치 지정 요소들은 ``position-anchor`` 속성을 통해 앵커 요소와 연결됩니다. 또한, 위치 지정 요소의 크기를 확인할 때 기준점으로 사용할 수 있도록 앵커 요소에 ``height``와 ​``width``를 설정합니다. 예를 들어, 브라우저 개발자 도구를 사용할 때 유용합니다.
~~~css
.anchor {
    anchor-name: --my-anchor;
    width: 100px;
    height: 50px;
}

.infobox {
    position-anchor: --my-anchor;
    position: fixed;
}
~~~
위치 지정된 요소에는 다음과 같은 몇 가지 고유한 속성 값을 설정했습니다.

- 위치 지정된 요소들은 앵커 요소에 연결되어 있으며, 각 요소에는 앵커 요소 주변의 서로 다른 위치에 배치되는 position-area 값이 지정되어 있습니다.
- 첫 번째 정보 상자의 높이는 앵커 요소와 동일하게 설정됩니다. anchor-size(height) 함수는 앵커 요소의 높이를 반환합니다. 요소의 너비는 calc() 함수 내에서 anchor-size() 함수를 사용하여 앵커 요소 너비의 두 배로 설정됩니다. anchor-size(width) 함수는 앵커 요소의 너비를 가져온 다음, 이 값을 두 배로 곱합니다.
- 두 번째 정보 상자의 높이는 비슷한 방식으로 앵커 요소 높이의 80%로 설정됩니다.
- 마진 값은 앵커 요소와의 적절한 간격을 제공하기 위해 포함되었습니다.
~~~css
#infobox1 {
    position-area: right;
    height: anchor-size(height);
    width: calc(anchor-size(width) * 2);
    margin-left: 5px;
}

#infobox2 {
    position-area: top span-right;
    height: calc(anchor-size(height) / 1.25);
    margin-bottom: 5px;
}
~~~
#### Result
[예제 확인 링크](https://developer.mozilla.org/en-US/play?uuid=57b91ea35ab5e8eee02a21ff711d887a960de0d9&state=lVRNbttWEL7KgIEBuzBpSaiRgFa96qZAm3YRZKXN8HEkTv1%2B6DfzZCWBr9BNdzlJz9ML9ArFIylZiu0CFSBIGs18PzOf9KXo1NmiLpb97c8hkgPuJTlogw0RhBXQkV6CCV7IKGmKgC33LIb9BsiyVsur%2FnblV36ZXwDeszDcJxYgS7wm38J9Qnc8tmVFgj4G9iC4YVUW8CwWYhe8SVLBTx4wmpQBTYqSBCixuNCO0FveUowInpsOTESBPtkte4wVfEy2T4pKkBT6DiNpxIOXjIiWs6Rq5Ufty5a3YCyK%2FLAq0JsuxFVx%2B%2FfXP%2F%2F564%2FlVcvb0d9xF%2Ft1aMJuVQC3Tx%2Fnq2LYwbK%2F%2FdCxAAtoR7DmKApTz7Sv%2F4W7eBlXyATfvgI8neMXtCQJWwSfvIEtWYic92mCc6ENh1U6JEMeBdCY5AQ9WBxO8ZHscOiMJoYsRZb7ROAwRRboyVrySkNtf4XTaocNK3oFF2LDGUcji%2FJ9ogp%2BC1ER7BA%2BF6xl2d9nuF%2BIqqwhVvAhxZ5lHwf20KHJWCO6CEFvUQmhZaPJiQ5RGTh%2BPInzf6Y5I%2F4aPUYCS0aTPI2RaKYwFFEreJ%2BsxVEqHekctwY25dkhbNM6D2krLgsjUtRFNUYNvuS2dfBaCn%2BmGhaR3M2Q%2FCy7hoeOlYaC0k5L6bANDzXM%2B93h2Vg0d0NLg%2BZuE0PybTmNd2LPF9%2FPYD6bncHb67OLJyi0vPE1mHypeDP9NDa%2BNMEreT35JiS17GnklWC5PbA%2B5hg3of00WnngVrsa3s3OhkGHccO%2Bhhlg0rBvr6bUjiOv004mWox3jU30ikf8nCK9JvNNOzxuvlnzfL%2FmF1fxuPIn9xnflx4d1VCW7lM5Vm6OHM9ns343FDriTac1XI%2BFFxz3QVg5%2BAnmOea%2BoYY176gdUd7s%2F2i%2BBYmENcRMesI%2Fqc6Gz8faxbFgg9acH%2FcM9Qv4DhYXR7crLa2zmScvex2LF3Vo6EF69OVzQc8YJ1VwBfNqcX3C2gTV4I54i8vi9%2FzDKS4L7chRURc2TxeP%2FwI%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FValues%2Fanchor-size%2F)  
  
브라우저 도구를 사용하여 앵커로 배치된 요소를 검사해 보세요. 첫 번째 정보 상자는 높이 ``50px``, 너비 ``200px``이고, 두 번째 정보 상자는 높이 ``40px``이며 너비는 기본값인 ``max-content``로 설정됩니다.  
  
## 출처
[내용출처 MDN anchor-size()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/anchor-size)