# view-transition-name
``view-transition-name`` CSS 속성은 선택된 요소에 고유한 식별 이름([``<custom-ident>``](https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident))을 제공하고 루트 뷰 전환과 별도의 뷰 전환에 참여하게 합니다. none 값이 지정된 경우에는 뷰 전환이 발생하지 않습니다.

## Syntax
~~~css
/* <custom-ident> 값 예시 */
view-transition-name: header;
view-transition-name: figure-caption;

/* 키워드 값 */
view-transition-name: none;
~~~

## Values
### ``<custom-ident>``
선택한 요소가 루트 뷰 전환과 별도의 뷰 전환에 참여하도록 하는 식별 이름입니다. 식별자는 고유해야 합니다. 렌더링된 두 요소의 view-transition-name이 동시에 동일한 경우, [ViewTransition.ready](https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/ready)는 전환을 거부하고 전환을 건너뜁니다.
> __참고__: ``<custom-ident>``는 ``자동``으로 지정될 수 없습니다.

### none
선택한 요소는 뷰 전환에 참여하지 않습니다.

## Examples
~~~css
figcaption {
    view-transition-name: figure-caption;
}
~~~

[내용출처 MDN view-transition 부분 지정](https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name)