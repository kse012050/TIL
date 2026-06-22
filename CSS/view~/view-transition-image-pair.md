# ::view-transition-image-pair() CSS 의사 요소 (Pseudo-element)

### Baseline 2025 (최신 지원)
> **Newly available:** 2025년 10월부터 이 기능은 최신 기기 및 브라우저 버전 전체에서 작동합니다. 이전 버전의 기기나 브라우저에서는 작동하지 않을 수 있습니다.

`::view-transition-image-pair()` CSS 의사 요소는 뷰 전환(View Transition)의 전환 전후 상태인 "이전(old)" 뷰 상태와 "이후(new)" 뷰 상태를 담는 컨테이너를 나타냅니다.

뷰 전환이 일어나는 동안, `::view-transition-image-pair()`는 뷰 전환 의사 요소 트리(The view transition pseudo-element tree)에 설명된 대로 관련 의사 요소 트리에 포함됩니다. 이 요소는 언제나 `::view-transition-group()` 내부의 자식 요소로만 존재합니다. 자식 요소로는 `::view-transition-new()` 또는 `::view-transition-old()`를 가질 수 있으며, 둘 다 가질 수도 있습니다.

브라우저 기본(UA) 스타일시트에는 다음과 같은 기본 스타일이 포함되어 있습니다.

~~~css
:root::view-transition-image-pair(*) {
    position: absolute;
    inset: 0;

    animation-duration: inherit;
    animation-fill-mode: inherit;
    animation-delay: inherit;
}
~~~

뷰 전환이 일어나는 동안, 뷰 전환 스타일시트의 `::view-transition-image-pair()`에는 `isolation: isolate`가 설정됩니다. 이는 자식 요소들이 일반적이지 않은 블렌드 모드(non-normal blend modes)로 혼합될 때 다른 시각적 출력에 영향을 주지 않도록 격리하기 위함입니다.

---

## 구문 (Syntax)

~~~css
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
    /* ... */
}
~~~

### 매개변수 (Parameters)

* `*` (전체 선택자)
    * 페이지에 있는 모든 뷰 전환 그룹을 선택합니다.
* `root`
    * 이 의사 요소가 브라우저(UA)가 전체 페이지에 대한 뷰 전환을 포함하기 위해 생성하는 기본 루트 뷰 전환 스냅샷 그룹과 일치하도록 만듭니다. `view-transition-name` 속성을 통해 고유한 뷰 전환 스냅샷 그룹이 할당되지 않은 모든 요소가 이 그룹에 포함됩니다.
* `<pt-name-selector>`
    * `view-transition-name` 속성의 값으로 설정된 `<custom-ident>`입니다.
* `<pt-class-selector>`
    * 앞에 마침표(`.`)가 붙은, `view-transition-class` 속성의 값으로 설정된 `<custom-ident>`입니다.

---

## 예시 (Examples)

~~~css
::view-transition-image-pair(root) {
    isolation: auto;
}

::view-transition-image-pair(.card) {
    isolation: isolate;
}
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::view-transition-image-pair)