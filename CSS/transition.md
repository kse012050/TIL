# transition
__화면 이동(transition)은 변형(fransform)되는 중간의 상태를 의미__ 한다고 할 수 있습니다.  
즉, __어떤한 변형(transform)이 일어나는 동안의 상태를 화면이동__ 이라고 하고, 이에 대해서 시간을 지정해 줄 수 있습니다.  
예를 들어서 마우스를 오버했을 때 어떤 변형을 일으키고 싶은데, 그 상태를 제어할 때 사용한다고 생각하면 됩니다.

> ``CSS 드랜지션과 CSS 애니메이션은 어떻게 다를까?``
> CSS transition 을 CSS 애니메이션 모듈과 혼동하면 안됩니다.  
> transition은 요소가 한 상태에서 다른 상태로 변형될 때(hover 효과와 같은 종류) 이 변화가 일정 시간동안 애니메이션화하거나 transitioned, 즉 __변천 과정을 겪는 것__ 을 말하고, CSS 애니메이션 모듈은 완전히 별개로 훨씬 더 규모가 크고 복잡하며 다양한 능력을 가지고 있습니다.  

> CSS 애니메이션 모듈에 대한 내용은 추후 정리하겠습니다.

## transition-property
화면 이동에 영향을 받는 속성으로 이 값을 지정하면 특정 사항에 대해서만 화면 이동 효과가 나타납니다.(어떤 속성을 트랜지션 할 것인지 적어주세요)

## transition-duration 
CSS 효과가 반영되는데 걸리는 시간, 즉 화면 이동이 종료 되기 까지 걸리는 시간(트랜지션이 일어나는 지속시간)

## transition-timing-function
타이밍 함수(어떤 움직임으로 반영할 것인지)

## transition-delay
트랜지션 지연시간(애니메이션을 지연시킬 때)

## transition(속기형) 
transition-duration(일어나는 지속시간)은 필수값입니다.  
초기 값이 0초이면 너무 즉각적으로 변화를 일으키기 때문에  

~~~CSS
/* 권장 속성 순서 */ /* transition: prop dur timfn delay; */ div { 
    transition: opacity .5s linear 2s;
     transition: linear .5s opacity 2s;
      transition: linear opacity .5s 2s;
       transition: .5s 2s opacity linear; 
    }
~~~

[내용출처](https://webclub.tistory.com/624)