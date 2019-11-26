# Counters
## 가운터 값 조작하기
CSS counter를 사용하려면 먼저 `counter-reset` 속성( 초깃값 0 ) 을 사용하여 초기화 해야합니다.  
동일한 속성으로 ㅏㅄ을 특정 값으로 바꿀 수도 있습니다.  
초기화 된 counter의 값은 `counter-increment`에 따라 증가하거나 감소합니다.  
counter의 이름으로 "none", "inherit", "initial"은 사용 불가합니다.(이런 이름을 사용하면 선언은 무시됩니다.)

## 가운터 표시하기
Counter의 값은 `content` 속성에서 `counter()` 나 `counters()` 함수를 사용하여 표시할 수 있습니다.

### counter()
`counter()` 함수는 'counter(name)' 와 'counter(name, style)' 두 가지 형태로 사용할 수 있습니다.  
생성된 텍스트는 가상 요소가 속한 범위에 있는 이름(name)의 가장 안쪽 counter의 값입니다.  
텍스트는 지정된 서식(기본값은 십진수`decimal`)으로 뿌려집니다.

### counters()
`counters()` 함수도 'counters(name, string)' 나 'counters(name, string, style)' 두 가지 형태로 사용할 수 있습니다.  
생성된 텍스트는 가상 요소가 속한 모든 범위에서 지정된 이름을 가진 counters의 값으로, 바깥 쪽부터 안쪽까지 값이 주어지며 지정된 무자열로 구분됩니다.  
counters는 지정된 스타일(기본값은 십진수`decimal`)로 랜더링 됩니다.

## 사용 방법
### counter-reset
요소 {counter-reset: 가운터 이름 / 시작 숫자;}

### counter-increment
요소 {counter-increment: 가운터 이름 / 증감 숫자;}

### content
요소 {content:counter(카운터 이름);}