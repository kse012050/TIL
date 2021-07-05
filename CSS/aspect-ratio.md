# aspect-ratio

__종횡비__ CSS 속성은 상자의 __기본 종횡비를 설정__ 하며, 자동 크기 및 기타 레이아웃 기능 계산에 사용됩니다.

~~~css
aspect-ratio: 1 / 1;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: unset;
~~~

## Values
### [``<auto>``](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
고유 종횡비로 대체 된 요소는 해당 종횡비를 사용합니다. 그렇지 않으면 상자에 기본 종횡비가 없습니다. [고유 종횡비](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)를 포함하는 크기 계산은 항상 콘텐츠 상자 크기와 함께 작동합니다.

### [``<ratio>``](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio)
상자의 기본 가로 세로 비율은 지정된 ``너비`` / ``높이`` 비율입니다. 선호하는 종횡비를 포함하는 크기 계산은 상자 크기 조정으로 지정된 상자의 크기(box-sizing)로 작동합니다.

## Example (예제)
### 종횡비 값의 예
~~~css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
~~~

## 가로 세로 비율에 너비와 높이 매핑
브라우저는 ``너비`` 및 ``높이`` 속성을 허용하는 ``대체 요소`` 및 기타 관련 요소에 적용되는 내부 ``종횡비`` 속성을 추가했습니다. 이것은 브라우저의 내부 UA 스타일 시트에 나타납니다.  
  
Firefox에서 내부 스타일 시트 규칙은 다음과 같습니다.
~~~css
img, input[type="image"], video, embed, iframe, marquee, object, table {
    aspect-ratio: attr(width) / attr(height);
}
~~~

[내용출처 MDN CSS aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)