# background-clip
CSS ``background-clip`` 속성은 요소의 백ㅇ이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정합니다.  
  
요소가 [``background-image``](https://developer.mozilla.org/ko/docs/Web/CSS/background-image) 또는 [``background-color``](https://developer.mozilla.org/ko/docs/Web/CSS/background-color)를 가지지 않으면, ``background-clip``은 ([border-style](https://developer.mozilla.org/ko/docs/Web/CSS/border-style) 또는 [border-image](https://developer.mozilla.org/ko/docs/Web/CSS/border-image) 등으로 인해) 테두리에 투명하거나 반투명한 부분이 존재하는 경우에만 시각적 차이가 발생합니다. 그렇지 않은 경우 테두리가 차이점을 가리킵니다.

## 구문
~~~css
/* 키워드 값 */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* 전역 값 */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
~~~

### 값

### border-box
배경이 테두리의 바깥 경계가지 차지합니다. (Z축 순서 상 테두리 아래 위치)

### padding-box
배경이 안쪽 여백의 바깥 경계까지 차지 합니다. 테두리 밑에는 배경을 그리지 않습니다.

### content-box
배경을 콘텐츠 상자에 맞춰 그립니다.

### text
배경을 전경 텍스트 위에만 그립니다.

[내용출처 MDN background-clip](https://developer.mozilla.org/ko/docs/Web/CSS/background-clip)
