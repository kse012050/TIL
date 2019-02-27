# this와 this() 개념과 차이 / super와 super() 개념과 차이


## this와 this()의 차이점
### this
현재 클래스의 인터턴스를 의미합니다  
즉, 현재 클래스의 멤버변수를 지정할 때 사용됩니다

### this()
현재 클래스에 정의된 생성자를 부를 때 사용합니다  

>사용 예제  

![this()의 사용예제](https://t1.daumcdn.net/cfile/tistory/2340333E57A89C5B2D)

## super와 super()의 차이점

### super
부모클래싀 필드값이나 메서드를 직접 부를 때 사용합니다  
즉, 자식클래스에서 상속받은 부모클래스의 멤버변수를 참조할 떄 사용됩니다  

### super()
자식 클래스가 자신을 생성할 때 부모클래스의 생성자를 불러 __초기화__ 할 때 사용됩니다

>사용 예제  

![super() 사용 예제](https://t1.daumcdn.net/cfile/tistory/24148C4457A89D2135)

> 실행 결과
!(super() 실행 결과)[https://t1.daumcdn.net/cfile/tistory/2777B64457A89D2303]

## 정리
this는 현재클래스에 있는 멤버변수 나 메서드(생성자)를 사용하는 것이고  
super는 현재클래스에서 부모클래스의 멤버변수나 메서드(생성자)를 사용하는 것 입니다

[this와 super 참고 자료](https://neoroid.tistory.com/10)

[this와 super 내용 출처](https://ithub.tistory.com/66)


