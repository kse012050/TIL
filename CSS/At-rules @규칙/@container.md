# @container
``@container`` CSS at-rule은 스타일을 포함 컨텍스트에 적용하는 조건부 그룹 규칙입니다. 스타일 선언은 조건에 따라 필터링되고 조건이 참이면 컨테이너에 적용됩니다. 컨테이너 크기 또는 ``<style-feature>`` 값이 변경될 때 조건이 평가됩니다.  
  
``container-name`` 속성은 쿼리 컨테이너 이름 목록을 지정합니다. 이러한 이름은 ``@container`` 규칙에서 어떤 쿼리 컨테이너를 대상으로 필터링하는지에 사용할 수 있습니다. 선택 사항인 대소문자 구분 ``<container-name>``은 쿼리에서 대상으로 하는 쿼리 컨테이너를 필터링합니다.  
  
요소에 적합한 쿼리 컨테이너가 선택되면 ``<container-condition>``의 각 컨테이너 기능이 해당 쿼리 컨테이너에 대해 평가됩니다.

## Syntax ( 문법 )
``@container`` at-rule의 구문은 다음과 같습니다.
~~~css
@container <container-condition># {
  <stylesheet>
}
~~~

예를 들어:

~~~css
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* <container-name>을 선택적으로 사용 가능 */
@container tall (height > 30rem) {
  h2 {
    line-height: 1.6;
  }
}

/* 단일 조건에서 여러 쿼리 */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* 조건 목록 */
@container card (width > 400px), style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}
~~~

### Values ( 값 )
#### ``<container-condition>``
선택 사항인 ``<container-name>``과 ``<container-query>``. ``<stylesheet>``에 정의된 스타일은 조건이 참이면 적용됩니다.

#### ``<container-name>``
선택 사항. 쿼리가 참으로 평가될 때 스타일이 적용될 컨테이너의 이름으로, ``<ident>``로 지정됩니다.

#### ``<container-query>``
컨테이너 크기가 변경될 때 쿼리 컨테이너에 대해 평가되는 기능 세트입니다.

#### ``<stylesheet>``
CSS 선언 세트입니다.

### 컨테이너 쿼리의 논리적 키워드
논리적 키워드는 컨테이너 조건을 정의하는 데 사용할 수 있습니다.  
  
- ``and`` 는 두 개 이상의 조건을 결합합니다.
- ``or`` 는 두 개 이상의 조건을 결합합니다.
- ``not`` 은 조건을 부정합니다. 컨테이너 쿼리당 'not' 조건은 하나만 허용되며 and 또는 or 키워드와 함께 사용할 수 없습니다.

~~~css
@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container not (width < 400px) {
  /* <stylesheet> */
}
~~~

### 명명된 포함 컨텍스트
포함 컨텍스트는 ``container-name`` 속성을 사용하여 명명할 수 있습니다.
~~~css
.post {
    container-name: sidebar;
    container-type: inline-size;
}
~~~

이에 대한 단축 구문은 컨테이너를 ``<name>`` / ``<type>``의 형태로 사용하는 것입니다.  
예:
~~~css
.post {
    container: sidebar / inline-size;
}
~~~

컨테이너 쿼리에서 ``container-name`` 속성은 일치하는 쿼리 컨테이너 이름이 있는 컨테이너 집합을 필터링하는 데 사용됩니다.
~~~css
@container sidebar (width > 400px) {
    /* <stylesheet> */
}
~~~
사용 및 명명 제한에 대한 자세한 내용은 컨테이너 이름 페이지에 설명되어 있습니다.

### Descriptors ( 설명자 )
다음 설명자는 컨테이너 조건 내에서 사용할 수 있습니다.

#### aspect-ratio
컨테이너의 가로 세로 비율을 계산한 것으로, ``<ratio>`` 값으로 표현합니다.

#### block-size
컨테이너의 블록 크기를 ``<length>`` 값으로 표현합니다.

#### height
컨테이너의 높이를 ``<length>`` 값으로 표현합니다.

#### inline-size
컨테이너의 인라인 크기를 ``<length>`` 값으로 표현합니다.

#### orientation
컨테이너의 방향(가로 또는 세로).

#### width
컨테이너의 너비를 ``<length>`` 값으로 표현합니다.

## Examples ( 예제 )
### 컨테이너 크기에 따른 스타일 설정
제목과 텍스트가 있는 카드 구성 요소의 다음 예를 고려하세요.
~~~html
<div class="post">
    <div class="card">
        <h2>Card title</h2>
        <p>Card content</p>
    </div>
</div>
~~~
컨테이너 컨텍스트는 ``container-type`` 속성을 사용하여 만들 수 있으며, 이 경우 ``.post`` 클래스의 ``inline-size`` 값을 사용합니다. 그런 다음 ``@container`` at-rule을 사용하여 ``650px``보다 좁은 컨테이너에서 ``.card`` 클래스가 있는 요소에 스타일을 적용할 수 있습니다.
~~~css
/* 인라인 크기에 기반한 컨테이너 컨텍스트 */
.post {
    container-type: inline-size;
}

/* 컨테이너가 650px보다 좁은 경우 스타일 적용 */
@container (width < 650px) {
    .card {
        width: 50%;
        background-color: gray;
        font-size: 1em;
    }
}
~~~

[화면은 공식 사이트에서..](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

### 명명된 컨테이너 컨텍스트 만들기
다음은 제목과 텍스트가 있는 카드 구성 요소인 HTML 예제입니다.
~~~html
<div class="post">
    <div class="card">
        <h2>Card title</h2>
        <p>Card content</p>
    </div>
</div>
~~~
먼저, ``container-type`` 및 ``container-name`` 속성을 사용하여 컨테이너 컨텍스트를 만듭니다. 이 선언의 단축 구문은 컨테이너 페이지에 설명되어 있습니다.
~~~css
.post {
    container-type: inline-size;
    container-name: summary;
}
~~~
다음으로, 컨테이너 쿼리에 이름을 추가하여 해당 컨테이너를 대상으로 지정합니다.
~~~css
@container summary (min-width: 400px) {
    .card {
        font-size: 1.5em;
    }
}
~~~

### 중첩된 컨테이너 쿼리
단일 컨테이너 쿼리에서 여러 컨테이너를 대상으로 지정할 수 없습니다. 동일한 효과가 있는 중첩된 컨테이너 쿼리를 사용할 수 있습니다.  
  
다음 쿼리는 ``요약``이라는 컨테이너가 ``400px``보다 넓고 ``800px``보다 넓은 조상 컨테이너가 있는 경우 true로 평가되고 선언된 스타일을 적용합니다.
~~~css
@container summary (min-width: 400px) {
    @container (min-width: 800px) {
        /* <stylesheet> */
    }
}
~~~

### 컨테이너 스타일 쿼리
> __실험적: 이것은 실험적 기술입니다.__  
> 이것을 프로덕션에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.

컨테이너 쿼리는 컨테이너 요소의 계산된 스타일을 평가할 수도 있습니다. 컨테이너 스타일 쿼리는 하나 이상의 style() 함수 표기법을 사용하는 @container 쿼리입니다. 스타일 기능을 스타일 쿼리로 결합하는 부울 구문과 논리는 CSS 기능 쿼리와 동일합니다.
~~~css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
    /* <stylesheet> */
}
~~~
각 style()의 매개변수는 단일 ``<style-feature>``입니다. ``<style-feature>``는 유효한 CSS 선언, CSS 속성 또는 ``<custom-property-name>``입니다.

~~~css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
    /* <stylesheet> */
}
~~~
값이 없는 스타일 기능은 계산된 값이 주어진 속성의 초기 값과 다를 경우 true로 평가됩니다.  
  
``style()`` 함수의 인수로 전달된 ``<style-feature>``가 선언인 경우, 선언의 값이 쿼리되는 컨테이너에 대한 해당 속성의 계산된 값과 같으면 스타일 쿼리가 true로 평가됩니다. 그렇지 않으면 false로 해결됩니다.  
  
다음 컨테이너 쿼리는 컨테이너 요소의 ``--accent-color``의 계산된 값이 ``파란색``인지 확인합니다.
~~~css
@container style(--accent-color: blue) {
    /* <stylesheet> */
}
~~~

> __참고__: 사용자 지정 속성의 값이 ``파란색``인 경우, 해당 속성이 @property로 색상으로 정의되어 브라우저가 계산된 값을 올바르게 비교할 수 있도록 하지 않는 한, 해당하는 16진수 코드 ``#0000ff``는 일치하지 않습니다.

단축형 속성을 쿼리하는 스타일 기능은 계산된 값이 각 롱핸드 속성과 일치하면 true이고, 그렇지 않으면 false입니다. 예를 들어, ``@container style(border: 2px solid red)``는 해당 단축형을 구성하는 12개의 롱핸드 속성(``border-bottom-style`` 등)이 모두 true이면 true로 해석됩니다.  
  
글로벌 ``revert`` 및 ``revert-layer``는 ``<style-feature>``의 값으로 유효하지 않으며 컨테이너 스타일 쿼리가 false가 됩니다.

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)