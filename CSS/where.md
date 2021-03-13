# :where()
``:where()`` CSS 의사 클래스 함수는 선택자 목록을 인수로 취하고 해당 목록의 선택자 중 하나가 선택할 수있는 모든 요소를 선택합니다.

~~~css
/* 머리글 안에있는 모든 단락을 선택합니다.
    또는 마우스를 가져가는 바닥 글 요소 */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 위의 내용은 다음과 같습니다. */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
~~~

``:where()``와 ``:is()``의 차이점은 ``:where()``는 항상 0의 특이성을 갖는 반면, ``:is()``는 인수에서 가장 구체적인 선택 자의 특이성을 취한다는 것입니다.

## Forgiving Selector Parsing (선택기 구문 분석 허용)
사양은 ``:is()`` 및 ``:where()``를 관용 선택자 목록을 허용하는 것으로 정의합니다.

선택자 목록을 사용할 때 CSS에서 선택자 중 하나라도 유효하지 않으면 전체 목록이 유효하지 않은 것으로 간주됩니다. ``:is()`` 또는 ``:where()``를 사용하는 경우 하나가 구문 분석에 실패하면 전체 선택기 목록이 유효하지 않은 것으로 간주되는 대신 올바르지 않거나 지원되지 않는 선택기가 무시되고 다른 선택기가 사용됩니다.

~~~css
:where(:valid, :unsupported) {
  ...
}
~~~

:unsupported를 지원하지 않는 브라우저에서도 올바르게 구문 분석되고 ``:valid``와 일치합니다.

~~~css
:valid, :unsupported {
  ...
}
~~~
``:valid``를 지원하더라도 ``:unsupported``를 지원하지 않는 브라우저에서는 무시됩니다.

## Examples

### Comparing ``:where()`` and ``:is()``    (:where()와 :is() 비교)
이 예제는 ``:where()``의 작동 방식을 보여주고 ``:where()``와 ``:is()``의 차이점도 보여줍니다.  
  
다음 HTML을 사용하십시오.

~~~HTML
<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>Here is my main content. This <a href="https://mozilla.org">contains a link</a>.
  </section>

  <aside class="is-styling">
    <p>Here is my aside content. This <a href="https://developer.mozilla.org">also contains a link</a>.
  </aside>

  <footer class="is-styling">
    <p>This is my footer, also containing <a href="https://github.com/mdn">a link</a>.
  </footer>
</article>

<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>Here is my main content. This <a href="https://mozilla.org">contains a link</a>.
  </section>

  <aside class="where-styling">
    <p>Here is my aside content. This <a href="https://developer.mozilla.org">also contains a link</a>.
  </aside>

  <footer class="where-styling">
    <p>This is my footer, also containing <a href="https://github.com/mdn">a link</a>.
  </footer>
</article>
~~~
다소 비판적인이 예에서는 각각 섹션, 옆, 바닥 글을 포함하는 두 개의 기사가 있습니다. 하위 요소를 표시하는 데 사용되는 클래스에 따라 다릅니다.  
  
내부의 링크를 더 간단하게 선택하지만 여전히 구별되도록하려면 다음과 같은 방식으로 ``:is()`` 또는 ``:where()``를 사용할 수 있습니다.
~~~CSS
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
~~~
그러나 나중에 간단한 선택기를 사용하여 바닥 글의 링크 색상을 재정의하려면 어떻게해야합니까?
~~~CSS
footer a {
  color: blue;
}
~~~

빨간색 링크에서는 작동하지 않습니다. ``:is()`` 내부의 선택자는 전체 선택 자의 특이성에 포함되고 클래스 선택자는 요소 선택자보다 더 높은 특이성을 갖기 때문입니다.

그러나 ``:where()`` 내부의 선택자는 특이성이 0이므로 주황색 바닥 글 링크는 간단한 선택기에 의해 무시됩니다.

__참고 :__ 이 예제는 GitHub에서도 찾을 수 있습니다. [is-where](https://mdn.github.io/css-examples/is-where/)를 참조하십시오.

[내용출처 MDN where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)