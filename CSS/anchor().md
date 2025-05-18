# anchor()
``anchor()`` CSS 함수는 ``앵커 위치``가 지정된 요소의 inset 속성 값 내에서 사용할 수 있으며, 연관된 앵커 요소의 가장자리 위치를 기준으로 길이 값을 반환합니다.

## Syntax
~~~css
/* 측면 또는 백분율 */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* 지정된 앵커의 측면 */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* 대체 항목이 있는 지정된 앵커의 측면 */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
~~~

## Parameters
anchor() 함수의 구문은 다음과 같습니다.
~~~css
anchor(<anchor-name> <anchor-side>, <length-percentage>)
~~~

매개변수는 다음과 같습니다.

### ``<anchor-name>`` ( 선택 사항 )
요소의 측면을 기준으로 배치할 앵커 요소의 anchor-name 속성 값입니다. 이는 ``<dashed-ident>`` 값입니다. 생략하면 position-anchor 속성에서 참조되거나 anchor HTML 속성을 통해 요소와 연결된 요소의 기본 앵커가 사용됩니다.
> __참고__: anchor() 함수 내에서 ``<anchor-name>``을 지정한다고 해서 요소와 앵커가 연결되는 것은 아닙니다. 해당 앵커를 기준으로 요소의 위치만 지정됩니다. 연결을 생성하려면 position-anchor CSS 속성이나 anchor HTML 속성이 여전히 필요합니다.

### ``<anchor-side>``
요소가 기준으로 배치되는 앵커의 측면 또는 ``시작`` 측면에서의 상대적 거리를 지정합니다. ``anchor()``가 설정된 inset 속성과 호환되지 않는 물리적 또는 논리적 값을 사용하는 경우 대체 값이 사용됩니다. 유효한 값은 다음과 같습니다.

#### top
앵커 요소의 상단입니다.

#### right
앵커 요소의 오른쪽입니다.

#### bottom
앵커 요소의 하단입니다.

#### left
앵커 요소의 왼쪽입니다.

#### start
``anchor()`` 함수가 설정된 inset 속성의 축을 따라 앵커 요소의 컨테이닝 블록의 논리적 시작입니다.

#### end
``anchor()`` 함수가 설정된 inset 속성의 축을 따라 앵커 요소의 컨테이닝 블록의 논리적 끝입니다.

#### self-start
``anchor()`` 함수가 설정된 inset 속성의 축을 따라 앵커 요소 콘텐츠의 논리적 시작입니다.

#### self-end
``anchor()`` 함수가 설정된 inset 속성의 축을 따라 앵커 요소 콘텐츠의 논리적 끝입니다.

#### center
``anchor()`` 함수가 설정된 inset 속성의 축의 중심입니다.

#### ``<percentage>``
``anchor()`` 함수가 설정된 inset 속성의 축을 따라 요소 콘텐츠의 시작 부분부터의 거리를 백분율로 지정합니다.

CSS 앵커 위치 지정 모듈은 아직 구현되지 않은 두 개의 추가 ``<anchor-side>`` 값(``inside`` 및 ``outside``)을 지정합니다.

### ``<length-percentage>`` ( 선택 사항 )
``anchor()`` 함수가 유효하지 않을 경우 함수가 확인해야 하는 대체 값을 지정합니다.

## Return value
length 값을 반환합니다.

## 설명
``anchor()`` 함수는 앵커 요소의 가장자리를 기준으로 요소를 배치할 수 있도록 합니다. 이 함수는 절대 위치 또는 고정 위치 요소에 설정된 inset 속성 값 내에서만 유효합니다.  
  
``<length>`` 값을 반환하며, 이 값은 inset 값으로 지정된 앵커 위치 요소 측면과 선택된 ``<anchor-side>`` 값으로 지정된 앵커 요소 측면 사이의 거리를 나타냅니다. ``<length>`` 값을 반환하므로 ``calc()``, ``clamp()`` 등 길이 값을 허용하는 다른 CSS 함수에서 사용할 수 있습니다.  
  
``<anchor-name>``으로 지정된 이름의 앵커가 없거나, 위치 지정된 요소에 연관된 앵커가 없는 경우(즉, position-anchor 속성을 통해), 첫 번째 매개변수는 유효하지 않은 것으로 간주되고 대체 ``<length-percentage>`` 값이 있는 경우 사용됩니다. 예를 들어, 위치 지정된 요소에 top: ``anchor(bottom, 50px)``가 지정되었지만 연관된 앵커가 없는 경우, 대체 값이 사용되므로 top은 50px로 계산됩니다.  
  
앵커 기능 및 사용법에 대한 자세한 내용은 CSS 앵커 위치 지정 모듈 랜딩 페이지와 CSS 앵커 위치 지정 사용 가이드를 참조하세요.

### anchor() 함수 값을 허용하는 속성
``anchor()`` 함수를 값 구성 요소로 허용하는 CSS inset 속성은 다음과 같습니다.

- top
- left
- bottom
- right
- inset ( shorthand 약어 )
- inset-block-start
- inset-block-end
- inset-block ( shorthand 약어 )
- inset-inline-start
- inset-inline-end
- inset-inline ( shorthand 약어 )

### 인셋 속성과 ``<anchor-side>`` 값의 호환성
inset 속성 값 내에서 ``anchor()`` 함수를 사용할 때, ``anchor()`` 함수 내에 지정된 ``<anchor-side>`` 매개변수는 inset 속성이 있는 축과 호환되어야 합니다.  
  
즉, 속성의 축 방향이 ``<anchor-side>``와 동일하면 물리적인 ``<anchor-side>`` 값을 물리적인 inset 속성 값 내에서 사용할 수 있습니다. 즉, left 및 right 속성 값 내에서는 위쪽과 아래쪽이 유효하지 않고, top 및 bottom 속성 값 내에서는 왼쪽과 오른쪽이 유효하지 않습니다. 예를 들어, ``top: anchor(bottom)``은 세로 값이므로 괜찮지만, left는 가로 값이므로 ``top: anchor(left)``는 유효하지 않습니다. ``top: anchor(left, 50px)``가 지정된 경우 대체 값이 사용되므로 top은 ``50px``로 계산됩니다. 대체 값이 없으면 inset 속성은 auto로 설정된 것처럼 동작합니다.  
  
논리적 ``<anchor-side>`` 값은 논리적 속성과 물리적 속성 모두에서 사용할 수 있습니다. 논리적 ``<anchor-side>`` 값은 속성이 논리적이든 상대적이든 inset 속성의 관련 축을 기준으로 합니다. 예를 들어, ``top: anchor(start)``, ``top: anchor(self-end)``, inset-block-start: anchor(end) 및 inset-inline-end: anchor(self-start)는 모두 정상적으로 작동합니다.  
  
논리적 inset 속성 값에서 물리적 ``<anchor-side>`` 매개변수를 사용하면 스토리가 더 복잡해집니다. 물리적 측면이 현재 쓰기 모드에서 inset 속성과 관련된 축과 일치해야 하기 때문입니다. 예를 들어:  

- 가로 쓰기 모드에서 블록 방향은 위에서 아래로 향하므로 ``inset-block-end: anchor(bottom)``은 작동하지만 ``inset-block-end: anchor(left)``는 호환되지 않습니다. ``inset-block-end: anchor(left, 50px)``가 설정된 경우, 계산된 값은 ``50px``이고, 위치 지정된 요소는 설정된 위치 값에 따라 가장 가까운 위치 지정된 상위 요소 또는 뷰포트의 블록 끝(아래쪽)에서 ``50px`` 떨어진 위치에 배치됩니다.
- 세로 쓰기 모드에서 블록 방향은 오른쪽에서 왼쪽 또는 왼쪽에서 오른쪽이므로 ``inset-block-end: anchor(left)``는 작동하지만 ``inset-block-end: anchor(top)``은 호환되지 않습니다. ``inset-block-end: anchor(top, 50px)``가 설정된 경우, 계산된 값은 ``50px``이고, 위치 지정된 요소는 설정된 위치 값에 따라 가장 가까운 위치 지정된 상위 요소 또는 뷰포트의 블록 끝(쓰기 모드에 따라 왼쪽 또는 오른쪽)에서 ``50px`` 떨어진 위치에 배치됩니다.  
  
이러한 값과 관련된 혼동 가능성을 줄이려면 논리적 inset 속성에는 논리적 ``<anchor-side>`` 값을 사용하고, 물리적 inset 속성에는 물리적 ``<anchor-side>`` 값을 사용하는 것이 좋습니다. 가능하면 논리값을 사용하는 것이 좋습니다. 국제화에 더 좋기 때문입니다.  
  
``center`` 및 ``<percentage>`` 값은 ``anchor()`` 함수 내에서 모든 논리 및 물리 inset 속성 내에서 유효합니다.  
  
아래 표에는 inset 속성과 이 속성과 호환되는 ``<anchor-side>`` 매개변수 값이 나와 있습니다. 여기서는 inset 속성의 긴 표현만 나열했으며, 이는 inset 속성의 약어 값입니다.

[내용출처 MDN 내용이 많다 공부하면서 추가하자](https://developer.mozilla.org/en-US/docs/Web/CSS/anchor)