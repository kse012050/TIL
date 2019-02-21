# setContentView()
> Activity 클래스를 작성할 때, 일반적으로 setContentView()를 가장 먼저 호출 합니다   
setContentView()는 3개의 오버로드 메서드가 구현 되어 있습니다

## 1. void setContentView(int layoutResID)   
>- layout resource를 인자로 받습니다   
>- 이후  LayoutInflater 를 통해 inflate 되어지고 이후 최상단 뷰에 add 됩니다
## 2. void setContentView(View view)
>- view 를 인자로 받습니다
>- 특정 view 로 content 를 구성 하고 싶을 경우 사용 됩니다
#### 주의사항
~~~
인자로 사용 될 view 의 width, height 를 별도로 지정하여 사용하고자 하여도, 함수 내부적으로 기본 LayoutParam 상의 width, height 를 MATH_PARENT 로 설정 하기 때문에 항상 MATH_PARENT 로 content view 가 설정 된다는 점입니다
특정 크기로 지정하고 싶다면 별도의 LayoutParam 을 구성하여 3. 메소드를 사용해야 합니다.
~~~
## 3. void setContentView(View view, ViewGroup.LayoutParams params)
>- view 와 LayoutParam 을 인자로 받습니다 
>- 2번에서 언급한 바와 같이 별도의 LayoutParam 으로 content view 를 구성하고 싶을 때 사용합니다

[setContentView() 내용 출처](https://m.blog.naver.com/PostView.nhn?blogId=pistolcaffe&logNo=221285539895&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
