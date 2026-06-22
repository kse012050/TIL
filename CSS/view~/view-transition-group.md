# ::view-transition-group() CSS 의사 요소 (Pseudo-element)

### Baseline 2025 (최신 지원)
> **Newly available:** 2025년 10월부터 이 기능은 최신 기기 및 브라우저 버전 전체에서 작동합니다. 이전 버전의 기기나 브라우저에서는 작동하지 않을 수 있습니다.

`::view-transition-group()` CSS 의사 요소는 단일 뷰 전환(View Transition) 스냅샷 그룹을 나타냅니다.

뷰 전환이 일어나는 동안, `::view-transition-group()`은 뷰 전환 의사 요소 트리(The view transition pseudo-element tree)에 설명된 대로 관련 의사 요소 트리에 포함됩니다. 이 요소는 언제나 `::view-transition` 내부의 자식 요소로만 존재하며, 자식으로는 `::view-transition-image-pair()`를 가집니다.

`::view-transition-group()`은 브라우저 기본(UA) 스타일시트에서 다음과 같은 기본 스타일을 부여받습니다.

~~~css
:root::view-transition-group(*) {
    position: absolute;
    top: 0;
    left: 0;

    animation-duration: 0.25s;
    animation-fill-mode: both;
}
~~~

기본적으로 선택된 요소들은 처음에는 "이전(old)" 뷰 상태를 나타내는 `::view-transition-old()` 의사 요소의 크기와 위치를 반영합니다. 만약 이전 뷰 상태가 없다면 "이후(new)" 뷰 상태를 나타내는 `::view-transition-new()` 의사 요소의 크기와 위치를 반영합니다.

이전(old)과 이후(new) 뷰 상태가 모두 존재하는 경우, 뷰 전환 스타일시트의 스타일은 이 의사 요소의 너비(width)와 높이(height)를 이전 뷰 상태의 테두리 상자(border box) 크기에서 이후 뷰 상태의 테두리 상자 크기로 애니메이션화합니다.

> 💡 **참고:** 뷰 전환 스타일은 뷰 전환이 일어나는 동안 동적으로 생성됩니다. 자세한 내용은 명세(Specification)의 '전환 의사 요소 설정(setup transition pseudo-elements)' 및 '의사 요소 스타일 업데이트(update pseudo-element styles)' 섹션을 참조하세요.

또한, 요소의 `transform` 속성은 이전 뷰 상태의 화면 공간(screen space) 변형에서 이후 뷰 상태의 화면 공간 변형으로 애니메이션화됩니다. 이 스타일은 애니메이션 속성의 값이 전환이 시작되는 시점에 결정되기 때문에 동적으로 생성됩니다.

---

## 구문 (Syntax)

~~~css
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
    /* ... */
}
~~~

### 매개변수 (Parameters)

* `*` (전체 선택자)
    * 페이지에 있는 모든 뷰 전환 그룹을 선택합니다.
* `root`
    * `:root`에 적용된 `view-transition-name`은 이 의사 요소가 기본 루트 뷰 전환 그룹과 일치하도록 만니다. 이는 브라우저(UA)가 전체 페이지에 대한 뷰 전환을 포함하기 위해 생성하는 스냅샷 그룹입니다. `view-transition-name` 속성을 통해 고유한 뷰 전환 스냅샷 그룹이 할당되지 않은 모든 요소가 이 그룹에 포함됩니다.
* `<pt-name-selector>`
    * `view-transition-name` 속성의 값으로 설정된 `<custom-ident>`입니다.
* `<pt-class-selector>`
    * 앞에 마침표(`.`)가 붙은, `view-transition-class` 속성의 값으로 설정된 `<custom-ident>`입니다.

지정된(named) 뷰 전환 의사 요소의 명시도(Specificity)는 타입 선택자(Type Selector)의 명시도와 같습니다. 단, 전체 선택자(`*`)가 매개변수로 사용된 경우 명시도는 0이 됩니다.

---

## 예시 (Examples)

~~~css
::view-transition-group(embed-container) {
    animation-duration: 0.3s;
    animation-timing-function: ease;
    z-index: 1;
}

::view-transition-group(.card) {
    animation-duration: 1s;
}
~~~