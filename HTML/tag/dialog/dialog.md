# `<dialog>`: 대화 상자 요소
__HTML ``<dialog>`` 요소__ 는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및 기타 다른 상호작용 가능한 컴포넌트를 나타냅니다.

## 특성
이 요소는 전역 특성을 포함합니다.
> __경고__ : tabindex 특성을 <dialog> 요소에 사용해서는 안됩니다.

### open
대화 상자가 활성 상태이며 상호작용할 수 있음을 나타냅니다. ``open`` 특성이 없을 때 대화 상자가 사용자에게 보여서는 안됩니다.

## 사용 일람
- method="dialog" 특성을 사용한 `<form>` 요소는 제출 시 대화 상자를 닫습니다. 이 때, 대화 상자의 returnValue 속성은 양식을 제출할 때 사용한 버튼의 value으로 설정됩니다.
- CSS ::backdrop 의사 요소를 사용하면, HTMLDialogElement.showModal() 메서드를 사용해 활성화한 <dialog> 요소의 뒤에 스타일을 적용할 수 있습니다. 예를 들면, 모달 대화 상자가 활성화되어 있는 동안 접근할 수 없는 뒤쪽 요소를 어둡게 만들 때 사용합니다.

[예제 확인 및 자료출처 MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog)