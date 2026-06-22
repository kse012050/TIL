# ::view-transition-new() CSS 의사 요소 (Pseudo-element)

### Baseline 2025 (최신 지원)
> **Newly available:** 2025년 10월부터 이 기능은 최신 기기 및 브라우저 버전 전체에서 작동합니다. 이전 버전의 기기나 브라우저에서는 작동하지 않을 수 있습니다.

`::view-transition-new()` CSS 의사 요소는 뷰 전환(View Transition)의 "이후(new)" 뷰 상태, 즉 전환이 일어난 후의 상태를 실시간 스냅샷 형태로 나타냅니다.

뷰 전환이 일어나는 동안, 표현할 "이후" 뷰 상태가 존재한다면 뷰 전환 의사 요소 트리(The view transition pseudo-element tree)에 설명된 대로 관련 의사 요소 트리에 `::view-transition-new()`가 포함됩니다. 이 요소는 언제나 `::view-transition-image-pair()` 내부의 자식 요소로만 존재하며, 자체적인 자식 요소는 절대 가지지 않습니다.

이 요소는 대체 상자 요소(Replaced element)이므로 `object-fit`이나 `object-position` 같은 속성으로 제어할 수 있습니다. 또한 콘텐츠 크기와 동일한 고유 치수(Natural dimensions)를 가집니다.

브라우저 기본(UA) 스타일시트에는 다음과 같은 기본 스타일이 포함되어 있습니다.

~~~css
:root::view-transition-old(*),
:root::view-transition-new(*) {
    position: absolute;
    inset-block-start: 0;
    inline-size: 100%;
    block-size: auto;

    animation-duration: inherit;
    animation-fill-mode: inherit;
    animation-delay: inherit;
}

/* 이미지가 2개일 때 블렌딩 처리를 위한 키프레임 */
@keyframes -ua-mix-blend-mode-plus-lighter {
    from {
        mix-blend-mode: plus-lighter;
    }
    to {
        mix-blend-mode: plus-lighter;
    }
}

@keyframes -ua-view-transition-fade-in {
    from {
        opacity: 0;
    }
}
~~~

> 💡 **참고:** `::view-transition-new()`를 애니메이션화하기 위해 추가적인 뷰 전환 스타일도 설정됩니다. 이 스타일들은 뷰 전환이 일어나는 동안 동적으로 생성됩니다. 자세한 내용은 명세(Specification)의 '전환 의사 요소 설정(setup transition pseudo-elements)' 및 '의사 요소 스타일 업데이트(update pseudo-element styles)' 섹션을 참조하세요.

---

## 구문 (Syntax)

~~~css
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
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
figcaption {
    view-transition-name: figure-caption;
}

@keyframes grow-x {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}

@keyframes shrink-x {
    from {
        transform: scaleX(1);
    }
    to {
        transform: scaleX(0);
    }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
    height: auto;
    right: 0;
    left: auto;
    transform-origin: right center;
}

::view-transition-old(figure-caption) {
    animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
    animation: 0.25s 0.25s linear both grow-x;
}
~~~