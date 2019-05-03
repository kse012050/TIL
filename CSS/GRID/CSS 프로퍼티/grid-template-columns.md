# grid-template-columns
CSS 속성은 라인 이름을 정의하고 크기 조정기능을 추적하는 그리드 ___열___

~~~css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: unset;
~~~

## none
키워드는 명시적인 격자가 없음을 의미합니다  
모든 열은 내재적으로 생성되며 해당 열의 크기는 ``` grid-auto-columns``` 속성에 의해 결정됩니다

## length
음수가 아닌 길이입니다

## percentage
```percentage``` 표 컨테이너의 인라인 크기를 기준을 ㅗ음수가 아닌 값입니다  
그리드 컨테이너의 크기가 트랙의 크기에 따라 다르면 백분율로 처리해야합니다  
트랙의 본질적 크기 기여도는 그리드 컨테이너의 크기에 맞게 조정될 수 있으며 트랙의 최종크기는 백분율을 고려한 최소량만큼 증가시킬 수 있습니다

## flex
유닛 ```fr``` 이 트랙의 굴곡 요소를 지정하는 음이 아닌 치수입니다  
각 ```<flex>``` 크기가 조정된 트랙은 플렉스 팩터에 비례하여 나머지 공간의 일부를 차지합니다  
```minmax()``` 표기법을 벗어나면 자동 최소값 (즉, 최소값)을 의미합니다 ```minmax(auto,<flex>)```

## max-content
그리드 트랙을 차지하는 그리드 아이템의 ___가장 큰 최대 컨텐트 기여도___ 를 나타내는 키워드입니다

## min-content
그리드 트랙을 차지하는 그리드 아이템의 ___최소 컨텐츠 기여도___ 를 나타내는 키워드 입니다

## minmax(min, max)
min 보다 크거나 같고 max 보다 작거나 같은 크기 범위를 정의하는 함수 최대 ```<flex>``` 값은 트랙의 굴곡 요소를 설정합니다  
최소한으로는 유효하지 않습니다

## auto
키워드가 최대인 경우 ___최대 콘텐츠___ 와 ___동일한 키워드___ 입니다  
최소한 그리드 트랙을 차지하는 그리드 항목의 최대 최소 크기 (```min-width``` / 로 지정 ```min-height```)를 나타냅니다
> 참고 : ```auto``` 트릭 크기(및 ```auto``` 트랙 크기 만)는 ```align-content``` 및 ```justify-content``` 속성에 의해 확장 될 수 있습니다

## fit-content([ ```<length>``` | ```<percentage>``` ])
트랙 크기가 인수 보다 클 경우 인수가 클램프된다는 점을 제외하고는 유사하게 계산된 수식을 나타냅니다

## repeat( [ ```<positive-integer>``` | auto-fill | auto-fit ] , ```<track-list>``` )
반복되는 패턴을 나타내는 많은 수의 열을보다 컴팩트 한 형식으로 작성할 수 있도록 트랙 목록의 반복 된 조각을 나타냅니다

## 예제
~~~css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
~~~

~~~html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
~~~

[mozilla 내용 출처](https://developer.mozilla.org/ko/docs/Web/CSS/grid-template-columns)

> 위의 예제는 링크를 타고 가서 확인해주세요


