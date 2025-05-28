# ``<select>``: The HTML Select element
``<select>`` HTML 요소는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다.

## Try it
[select 데모 내용 확인](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)  
  
위 예시는 일반적인 ``<select>`` 사용법을 보여줍니다. 접근성을 위해 ``<label>``과 연결될 수 있도록 id 속성이 지정되고, 서버에 제출된 관련 데이터 포인트의 이름을 나타내는 name 속성도 지정됩니다. 각 메뉴 옵션은 ``<select>`` 안에 중첩된 ``<option>`` 요소로 정의됩니다.  

각 ``<option>`` 요소에는 해당 옵션이 선택될 때 서버에 전송할 데이터 값을 포함하는 value 속성이 있어야 합니다. value 속성이 지정되지 않으면 값은 기본적으로 요소 내에 포함된 텍스트로 설정됩니다. ``<option>`` 요소에 selected 속성을 포함하면 페이지가 처음 로드될 때 해당 ``<option>`` 요소가 기본적으로 선택됩니다. selected 속성이 지정되지 않으면 첫 번째 ``<option>`` 요소가 기본적으로 선택됩니다.  
  
``<select>`` 요소는 JavaScript에서 HTMLSelectElement 객체로 표현되며, 이 객체는 선택된 ``<option>`` 요소의 값을 포함하는 value 속성을 가집니다.  
  
``<select>`` 요소에는 여러 옵션 선택 가능 여부를 지정하는 multiple 속성과 한 번에 표시할 옵션 수를 지정하는 size 속성 등 고유한 속성을 사용하여 제어할 수 있습니다. 또한 필수, 비활성화, 자동 초점 등 대부분의 일반적인 양식 입력 속성도 사용할 수 있습니다.  
  
``<option>`` 요소를 ``<optgroup>`` 요소 안에 중첩하여 드롭다운 내에 별도의 옵션 그룹을 만들 수 있습니다. 또한 ``<hr>`` 요소를 포함하여 옵션 사이에 시각적 구분 기호를 추가할 수 있습니다.  
  
더 많은 예시는 네이티브 양식 위젯: [드롭다운 콘텐츠](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls)를 참조하세요.

## Attributes ( 속성 )
이 요소에는 [글로벌 속성](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)이 포함됩니다.

### autocomplete
[사용자 에이전트](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)의 자동 완성 기능에 대한 힌트를 제공하는 문자열입니다. 전체 값 목록과 자동 완성 사용 방법에 대한 자세한 내용은 [HTML autocomplete 속성](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)을 참조하세요.

### autofocus
이 부울 속성을 사용하면 페이지가 로드될 때 폼 컨트롤에 입력 포커스가 지정됩니다. 문서에서 하나의 폼 요소만 ``autofocus`` 속성을 가질 수 있습니다.

### disabled
이 부울 속성은 사용자가 컨트롤과 상호 작용할 수 없음을 나타냅니다. 이 속성을 지정하지 않으면 컨트롤은 포함하는 요소(예: ``<fieldset>``)에서 설정을 상속합니다. disabled 속성이 설정된 포함하는 요소가 없으면 컨트롤은 활성화됩니다.

### form
``<select>``와 연결할 ``<form>`` 요소(폼 소유자). 이 속성의 값은 같은 문서에 있는 ``<form>``의 ID여야 합니다. (이 속성이 설정되지 않으면 ``<select>``는 상위 ``<form>`` 요소(있는 경우)와 연결됩니다.)  
  
이 속성을 사용하면 ``<form>`` 내부뿐만 아니라 문서의 어느 곳에서나 ``<select>`` 요소를 ``<form>``에 연결할 수 있습니다. 상위 ``<form>`` 요소를 재정의할 수도 있습니다.

### multiple
이 부울 속성은 목록에서 여러 옵션을 선택할 수 있음을 나타냅니다. 지정하지 않으면 한 번에 하나의 옵션만 선택할 수 있습니다. ``multiple``을 지정하면 대부분의 브라우저는 단일 줄 드롭다운 대신 스크롤 목록 상자를 표시합니다.

### name
이 속성은 컨트롤의 이름을 지정하는 데 사용됩니다.

### required
비어 있지 않은 문자열 값을 가진 옵션을 선택해야 함을 나타내는 부울 속성입니다.

### size
컨트롤이 스크롤 목록 상자로 표시되는 경우(예: ``multiple``을 지정한 경우), 이 속성은 목록에서 한 번에 표시되어야 하는 행 수를 나타냅니다. 브라우저는 select 요소를 스크롤 목록 상자로 표시할 필요는 없습니다. 기본값은 ``0``입니다.  
  
> __참고__: HTML 사양에 따르면 크기의 기본값은 ``1``이어야 합니다. 그러나 실제로는 이 값이 일부 웹사이트를 손상시키는 것으로 나타났으며, 현재 다른 브라우저에서는 이런 값을 사용하지 않으므로 Mozilla는 당분간 Firefox에서 ``0``을 반환하기로 결정했습니다.

## Usage notes ( 사용 참고 사항 )
### 여러 옵션 선택
데스크톱 컴퓨터에서는 ``multiple`` 속성을 가진 ``<select>`` 요소에서 여러 옵션을 선택하는 여러 가지 방법이 있습니다.  
  
마우스 사용자는 ``Ctrl``, ``Command`` 또는 ``Shift`` 키(운영 체제에 따라 다름)를 누른 상태에서 여러 옵션을 클릭하여 선택하거나 선택 해제할 수 있습니다.  
  
> __경고__: 아래 설명된 키보드를 사용하여 여러 개의 비연속 항목을 선택하는 메커니즘은 현재 Firefox에서만 작동하는 것으로 보입니다.  
>  
> macOS에서는 ``Ctrl`` + ``Up`` 및 ``Ctrl`` + ``Down`` 단축키가 Mission Control 및 애플리케이션 창의 OS 기본 단축키와 충돌하므로, 이 단축키를 해제해야 작동합니다.  
  
키보드 사용자는 다음과 같은 방법으로 여러 개의 연속된 항목을 선택할 수 있습니다.
- ``<select>`` 요소에 초점을 맞춥니다(예: ``Tab`` 키 사용).
- 선택하려는 범위의 상단 또는 하단에 있는 항목을 선택합니다. ``Up`` 및 ``Down`` 커서 키를 사용하여 옵션을 위아래로 이동합니다.
- ``Shift`` 키를 누른 상태에서 ``Up`` 및 ``Down`` 커서 키를 사용하여 선택한 항목의 범위를 늘리거나 줄입니다.  
  
키보드 사용자는 다음을 통해 여러 개의 비인접 항목을 선택할 수 있습니다.  
- ``<select>`` 요소에 포커스를 둡니다(예: ``Tab`` 키 사용).
- ``Ctrl`` 키를 누른 상태에서 ``Up`` 및 ``Down`` 커서 키를 사용하여 "포커스" 선택 옵션, 즉 선택 시 선택될 옵션을 변경합니다. "포커스" 선택 옵션은 키보드 포커스 링크와 마찬가지로 점선 윤곽선으로 강조 표시됩니다.
- ``스페이스바``를 눌러 "포커스" 선택 옵션을 선택/해제합니다.

## Styling with CSS ( CSS로 스타일링하기 )
``<select>`` 요소는 역사적으로 CSS로 생산적으로 스타일을 지정하는 것이 매우 어려웠기 때문에, [완전히 사용자 정의 가능한 select 요소](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)를 만들 수 있는 기능이 도입되었습니다.

### 레거시 선택 스타일링
최신 사용자 지정 기능(또는 사용할 수 없는 레거시 코드베이스)을 지원하지 않는 브라우저에서는 ``상자 모델``, ``표시되는 글꼴`` 등을 조작하는 것으로 제한됩니다. 또한 ``appearance`` 속성을 사용하여 기본 시스템 모양을 제거할 수 있습니다.  
  
하지만 기존 ``<select>`` 요소를 사용하는 브라우저에서는 일관된 결과를 얻기가 어렵습니다. 모든 기능을 제어하려면 폼 위젯 스타일을 지정하는 데 유용한 라이브러리를 사용하거나, 비시맨틱 요소, JavaScript, ``WAI-ARIA``를 사용하여 시맨틱을 제공하는 자체 드롭다운 메뉴를 만들어 보는 것이 좋습니다.  
  
``:open`` 의사 클래스를 사용하면 열린 상태, 즉 드롭다운 옵션 목록이 표시되는 ``<select>`` 요소에 스타일을 적용할 수 있습니다. 이는 ``multiple`` 속성이 설정된 여러 줄의 ``<select> ``요소에는 적용되지 않습니다. 이러한 요소는 드롭다운이 아닌 스크롤 목록 상자로 렌더링되는 경향이 있으므로 열린 상태가 아닙니다.  
  
레거시 ``<select>`` 스타일 지정에 대한 자세한 내용은 다음을 참조하세요.
- [HTML 양식 스타일 지정](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [HTML 양식의 고급 스타일 지정](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- ``<select>`` 요소의 크기를 포함된 옵션에 따라 지정하는 방법을 제어하는 [​​field-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing) 속성입니다.

## Accessibility ( 접근성 )
``<select>`` 내의 ``<hr>``은 현재 접근성 트리에 노출되지 않아 보조 기술에 노출되지 않으므로 순전히 장식적인 것으로 간주해야 합니다.

## Examples
### 기본 선택
다음 예제에서는 세 가지 값을 가진 드롭다운 메뉴를 만듭니다. 두 번째 옵션이 기본적으로 선택됩니다.
~~~html
<!-- 처음에는 두 번째 값이 선택됩니다 -->
<select name="choice">
    <option value="first">첫 번째 값</option>
    <option value="second" selected>두 번째 값</option>
    <option value="third">세 번째 값</option>
</select>
~~~

### Result
[사이트 확인](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)

### 그룹화 옵션으로 선택
다음 예제에서는 ``<optgroup>``과 ``<hr>``을 사용하여 그룹화 기능을 갖춘 드롭다운 메뉴를 만들어 사용자가 드롭다운의 내용을 더 쉽게 이해할 수 있도록 합니다.
~~~html
<label for="hr-select">Your favorite food</label> <br />

<select name="foods" id="hr-select">
    <option value="">Choose a food</option>
    <hr />
    <optgroup label="Fruit">
        <option value="apple">Apples</option>
        <option value="banana">Bananas</option>
        <option value="cherry">Cherries</option>
        <option value="damson">Damsons</option>
    </optgroup>
    <hr />
    <optgroup label="Vegetables">
        <option value="artichoke">Artichokes</option>
        <option value="broccoli">Broccoli</option>
        <option value="cabbage">Cabbages</option>
    </optgroup>
    <hr />
    <optgroup label="Meat">
        <option value="beef">Beef</option>
        <option value="chicken">Chicken</option>
        <option value="pork">Pork</option>
    </optgroup>
    <hr />
    <optgroup label="Fish">
        <option value="cod">Cod</option>
        <option value="haddock">Haddock</option>
        <option value="salmon">Salmon</option>
        <option value="turbot">Turbot</option>
    </optgroup>
</select>
~~~

### Result
[사이트 확인](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)

### 여러 기능을 사용한 고급 선택
다음 예시는 더 복잡하며, ``<select>`` 요소에서 사용할 수 있는 더 많은 기능을 보여줍니다.
~~~html
<label>
    Please choose one or more pets:
    <select name="pets" multiple size="4">
        <optgroup label="4-legged pets">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster" disabled>Hamster</option>
        </optgroup>
        <optgroup label="Flying pets">
            <option value="parrot">Parrot</option>
            <option value="macaw">Macaw</option>
            <option value="albatross">Albatross</option>
        </optgroup>
    </select>
</label>
~~~

### Result
[사이트 확인](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)

다음과 같은 내용을 확인할 수 있습니다.
- ``multiple`` 속성을 포함했기 때문에 여러 옵션을 선택할 수 있습니다.
- ``size`` 속성은 한 번에 4줄만 표시되므로 스크롤하여 모든 옵션을 볼 수 있습니다.
- ``<optgroup>`` 요소를 포함하여 옵션을 여러 그룹으로 구분했습니다. 이는 순전히 시각적인 그룹화이며, 일반적으로 그룹 이름은 굵게 표시되고 옵션은 들여쓰기되어 표시됩니다.
- "Hamster" 옵션에는 ``비활성화``된 속성이 포함되어 있어 선택할 수 없습니다.

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)