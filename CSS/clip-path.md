# clip-path
기본 문법 clip-path(0% 0%, 0% 0%, 0% 0%)  

0% 0% 하나당 꼭지점의 위치가 됩니다  

## 원
원을 그리기 위해선 at 를 이용합니다  
clip-path: circle(0% at 0% 0%)
+ 첫번째 나오는 0% 는 원의 크기를 조정합니다
+ at 이후에 나오는 0% 0% 는 원의 위치를 조정합니다

## 타원
clip-path: circle(0% 0% at 0% 0%)
+ 첫번째 0% 는 원의 wdith를 지정합니다
+ 두번째 0% 는 원의 height를 지정합니다
+ at 이후에 나오는 0% 0% 원의 위치를 지정합니다

> 아직까진 IE에서 호환하지 않아 사용하긴 어려울 것 같습니다  

[clip-path 참고 자료](https://bennettfeely.com/clippy/)
            
