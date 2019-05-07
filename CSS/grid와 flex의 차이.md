# Block Formatting Context(이하 BFC)
Visual Formatting Model [MDN문서](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Visual_formatting_model), 문서에 따르면 CSS의 근간을 이루는 내용인데 이는 BFC로 구성되어 진다  

블록 엘리먼트는 블록 컨테이너를 포함하는데 둘은 다소 다르다  

블록컨테이너는 자신만의 컨텍스트(레이아웃)을 갖게되어 자식들을 그 문맥에 맞게 배치한다  

말이 어려운데 특정 조건에 의해 생성된다  

아래는 MDN 문서에 나와있는 BFC의 생성 조건이다
- 루트 또는 이를 포함하는 요소
- float(float이 none이 아닌 요소)
- 절대위치로 지정된 요소(position이 absolute 또는 fixed인 요소)
- 테이블 셀(display:table-cell 인 요소, HTML table cell의 기본 값)
- 데이블 캡션 (display:table-caption 인 요소, HTML table caption의 기본 값)
- overflow가 visible이 아닌 요소
- flex box (display:flex 똔ㄴ inline-flex 인 요소)

> 갑자기 레이아웃 이야기부터 하겠다

그동안 CSS에는 Grid를 나이스하게 풀만한 방법이 존재하지 않았다  
그래서 여러가지 방법을 동원되었는데 아래와 같다
- float
- display:inline-block
- display:table

```display``` 속성은 인라인 블록인 척, 테이블인 척 하게끔 시키는 속성이다  
float은 레이아웃의 흐름을 벗어나 위에 둥둥뜨게하는 효과가 있다  

float 속성은 레이어링을 위해, display 속성의 경우에는 태그(마크업)와 display 속성을 디커플링을 존재했다고 생각되는데 여튼 이를 핵처럼 이용해서 그리드류의 레이아웃을 생성했다  

이는 크로스 브라우징 보장 + 몇가지 정책(12컬럼)과 UI 컴포넌트를 조합한 것이 부트스트랩같은 UI 프레임워크다  

과거에 대한 설명은 여기까지하고 그리드를 정리해 보자

# Grid
Flex가 1차원 레이아웃이라면 Grid는 2차원 레이아웃이다  
```display:grid``` 로 시작된다

## 컨테이너
속성
- grid-template-columns 컬럼별 넓이를 띄어쓰기로 구분해서 선언한다  
1fr 1fr 1fr  
repeat(auto-fill, 200px)  
repeat(3, minmax(200px, auto))  
repeat(auto-fit,minmax(200px, 1fr))  
1fr auto 1fr

- grid-template-rows
- gird-template-areas : 2차원 배열과 같이 이름을 명명해서 template-area를 선언
- column-gap
- row-gap
- grid-gap 위 두가지를 합친 것

정렬 속성
- justify-items __grid에만 존재하며 나머지 정렬 속성은 flex와 같다__
- justify-content space-evenly
- align-items
- align-content
justify-content 속성이 메인축의 정렬을 의미한다면 align-items는 교차축에 대한 정렬을 의미한다 align-content 는 줄넘김에 발생했을 시 교차축에서 아이템 간의 정렬을 의미한다

Item
- flex-grow  
메인축 확장 비율
- flex-shrink  
메인축 축소 비율
- flex-basis  
아이템에 대한 넓이
- flex number로 선언하면 컨테이너에 속한 아이템들의 flex / flex 합 비율만큼 가져가게 된다

## Position
상당히 자주쓰였고 은근히 다 이해되리만큼 직관적인거 같으나 사실은 모르고 있을 수도 있다

자신만의 레이아웃을 갖는 BFC와 연결되어 있어 이 부분에 관해 명확한 이해가 필요해 보인다

BFC가 생성되면 자식드을 포함해서 같은 레이어를 공유한다고 생각하면 된다

- ```static``` , 기본 값으로 흐름을 벗어나지 않는다
- ```absolute``` , 흐름을 벗어나 자신만의 BFC를 구축한다
- ```relative``` , static과 유사하게 흐름을 유지하나 BFC를 새로 구축한다
- ```fixed``` , 흐름을 벗어나 viewport 좌표로 둥둥 ( 스크롤등과 무관하게 ) 떠다닌다
- ```sticky``` , 이건 실제로 경험하지 못했는데 ```static```과 유사하나 지정된 좌표이내로 스크롤이 들어가게 된다 ```fixed``` 와 같이 흐름을 벗어나 떠나다니게 된다

## Multi-column layout
신문 처럼 다단의 레이아웃

### 속성들
- ```column-count```
- ```column-width```
두 속성을 함께 쓰면  ```column-count```는 최대 컬럼 수로 사용된다

[내용출처](https://medium.com/@deptno/css3-grid-flex-position-layout-%EC%A0%95%EB%A6%AC-b22820120132)