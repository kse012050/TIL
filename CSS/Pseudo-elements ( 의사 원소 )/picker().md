# ::picker()
> __실험적: 실험적인 기술입니다.__  
> 실제 운영 환경에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.  
  
__``::picker()``__ CSS 가상 요소는 요소의 피커 부분, 예를 들어 [사용자 정의 가능한 선택 요소](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)의 드롭다운 피커를 대상으로 합니다.

## Syntax
~~~css
::picker(<ident>) {
    /* ... */
}
~~~

### Parameters
#### ``<ident>``
선택기를 통해 타겟팅할 요소를 나타내는 문자열입니다. 다음 값을 사용할 수 있습니다.

> #### select
> 사용자 정의 가능한 선택 요소의 드롭다운 선택기.

## Description ( 설명 )
``::picker()`` 가상 요소는 폼 컨트롤의 피커 부분, 즉 컨트롤 버튼을 누를 때 선택할 수 있도록 나타나는 팝업 부분을 대상으로 합니다. 이 가상 요소는 원래 요소에 피커가 있고 ``appearance`` 속성의 ``base-select`` 값을 통해 기본 모양이 설정된 경우에만 대상으로 사용할 수 있습니다.  
  
``::picker(select)`` 선택자는 사용자 지정 가능한 ``<select>`` 요소의 첫 번째 ``<button>`` 자식을 제외한 모든 하위 요소를 대상으로 합니다. 이러한 하위 요소는 브라우저에서 그룹화되어 피커로 렌더링됩니다. 첫 번째 ``<button>`` 자식은 눌렀을 때 피커를 여는 컨트롤 버튼을 나타냅니다.  
  
이를 통해 모든 피커 콘텐츠를 단일 엔티티로 대상으로 지정할 수 있습니다. 예를 들어 테두리를 사용자 지정하거나, 나타나고 사라질 때 애니메이션을 적용하거나, 기본 위치와 다른 위치에 배치하려는 경우입니다. 사용자 지정 가능한 선택 요소 가이드에서는 ``::picker(select)`` 사용의 다양한 예를 보여줍니다.

### 피커 팝오버 동작
``<select>`` 요소와 피커는 [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)에서 지정한 대로 자동으로 할당된 암묵적인 호출자/팝오버 관계를 갖습니다. 팝오버 동작에 대한 자세한 내용은 팝오버 API 사용을 참조하고, 암묵적인 팝오버 연결을 통해 허용되는 일반적인 사용 사례는 [팝오버 상태를 사용하여 피커 드롭다운 애니메이션](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states)을 참조하세요.

### 피커 앵커 위치 지정
위에서 언급한 암묵적인 호출자/팝오버 관계의 또 다른 부작용은 ``<select>`` 요소와 피커가 암묵적인 앵커 참조를 갖는다는 것입니다. 즉, 피커는 [CSS 앵커 위치를 통해 자동](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)으로 선택 요소와 연결됩니다. 이는 여러 가지 장점을 가지고 있으며, 특히 다음과 같은 장점이 있습니다.
- 브라우저 기본 스타일은 [버튼(앵커)을 기준으로 피커의 위치를 ​​지정](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor)하며, 앵커를 기준으로 요소 배치하기에서 설명한 대로 이 위치를 사용자 지정할 수 있습니다. 참고로, 관련 기본 스타일은 다음과 같습니다.
~~~css
inset: auto;
margin: 0;
min-inline-size: anchor-size(self-inline);
min-block-size: 1lh;
/* 뷰포트 가장자리로 이동하여 필요한 경우 스크롤바를 추가합니다. */
max-block-size: stretch;
overflow: auto;
/* 기본적으로 아래쪽 및 span-right입니다. */
position-area: block-end span-inline-end;
~~~
- 브라우저 기본 스타일은 피커가 뷰포트를 넘칠 위험이 있는 경우 피커의 위치를 ​​변경하는 위치-시도 폴백(position-try fallback)도 정의합니다. 위치-시도 폴백은 오버플로 처리: 시도 폴백 및 조건부 숨기기에서 설명합니다. 참고로, 관련 기본 폴백 스타일은 다음과 같습니다.
~~~css
position-try-order: most-block-size;
position-try-fallbacks:
/* 먼저 위쪽과 span-right를 시도합니다. */
/* 그 다음 아래쪽과 span-left를 시도합니다. */
/* 그 다음 위쪽과 span-left를 시도합니다. */
block-start span-inline-end,
block-end span-inline-start,
block-start span-inline-start;
~~~

## Examples 
### 기본 사용자 지정 선택 사용법
사용자 지정 선택 기능과 최소한의 브라우저 기반 스타일을 사용하려면(그리고 OS에서 제공하는 스타일을 제거하려면), ``<select>`` 요소와 선택 도구 모두에 ``base-select``의 ``appearance`` 값이 설정되어 있어야 합니다.
~~~css
select,
::picker(select) {
    appearance: base-select;
}
~~~
예를 들어, 선택기의 기본 검은색 테두리를 제거할 수 있습니다.
~~~css
::picker(select) {
    border: none;
}
~~~