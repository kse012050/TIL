# getWindow().setFlags()
## getWindow()

>Android에서 Window란
사용자 눈에 보이는 모든 것들은 Window를 가집니다  
즉 눈에 보이는 것을 담는 가장 기본적인 공간  
Window에 레이아웃과 뷰들을 올려서 사용하는 것  
>>Activity를 만들면 자동으로 윈도를 생해서 붙여줍니다.  
>>Service는 Window를 가지지 않습니다.

## setFlasge()
> Flasg 깃발  
getWindow().setFlags(???,???)

## WindowManager
> Window는 그 자체로 사용하지 않고 WindowManager 를 통해서 사용합니다   
WindowManager는 ViewManager를 상속 받았기 때문에, 바로 view를 추가/ 수정 / 삭제 할 수 있습니다.  
WindowManager 는 최상위에 떠 있는 뷰(Activity) 입니다

## WindowManager.LayoutParams
### LayoutParams
> LayoutParams 는 뷰가 배치되는 부모,  
즉 레이아웃에 소속되는 속성이며 부모에게 차일드 뷰를 배치할 방법을 지시합니다
### LayoutParams의 속성의 종류

#### FLAG_BLUR_BEHIND
> 윈도우 뒤의 모든것을 흐리게 합니다
#### FLAG_DIM_BEHIND
> 윈도우 뒤의 모든것을 어둡게 합니다
#### FLAG_NOT_FOCUSABLE
> 윈도우에서 키 입력 포커스를갖지 않습니다  
사용자가 키나 다른 버튼의 이벤트를 보낼 수 없습니다  
어떤 포커스 윈도우 대신에 뒤에 남을 것입니다
#### FLAG_NOT_TOUCHABLE
> 윈도우는 터치 이벤트를 절때 받을 수 없습니다
#### FLAG_NOT_TOUCH_MODAL
> 윈도우가 포커스 될 때 조차(FLAG_NOT_FOCUSABLE이 설정되지 않음) 윈도우 외부의 어떤 포인터 이벤트도 윈도우 뒤로 보내는 것을 허락합니다
#### FLAG_LAYOUT_IN_SCREEN
> 윈도우의 전체 화면 내에서, 경계(별명으로 상태표시줄) 주위의 장식을 무시합니다
#### FLAG_DITHER
> 진동 설정을 합니다
#### FLAG_KEEP_SCREEN_ON
> 사용자가 윈도우 표시되는 동안, 화면을 켜고 밝게 해줍니다
#### FLAG_FULLSCREEN
> 모든 화면 장식(상태표시줄 등)이 창이 표시 되는 동안 숨깁니다
#### FLAG_FORCE_NOT_FULLSCREEN
> FLAG_FULLSCREEN 과 화면 장식(상태표시줄 같은) 보여지는 것을 무시합니다
#### FLAG_IGNORE_CHEEK_PRESSES
> 사용자의 뺨이 화면에 닫는 등의 이벤트를 감지 하지 않기 원할 때 필터 설정을 합니다

[getWindow().setFlags(속성출처)](https://darksilber.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-WindowMangerLayoutParams-%EC%86%8D%EC%84%B1)

