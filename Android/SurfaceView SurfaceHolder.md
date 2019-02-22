# SurfaceHolder
1. 디스플레이 표면을 보유하는 누군가에 추상 인터페이스입니다  
2. 표면 크기 및 형식을 제어하고 표면의 픽셀을 편집하며 표면의 변화를 모니터링 할 수 있습니다  
3. 이 인터페이스는 일반적으로 __SurfaceView__ 클래스를 통해 사용할 수 있습니다  
4. 실행중인 스레드가 아닌 다른 스레드에서 이 인터페이스를 사용할 떄는 SurfaceView메서드 ```lockCanvas()``` 와Callback.surfaceCreated() 를 자세히 읽어야합니다 

## lockCanvas()
~~~
public abstract Canvas lockCanvas ()
~~~
표면의 픽셀 편집을 시작합니다  
반환된 Canvas를 사용하여 표면의 비트 맵에 그릴 수 있습니다  
표면이 작성되지 않았던 경우, 또는 표면을 편집 할 수 없는 경우는 null가 리턴됩니다  
__Callback.surfaceCreated__ Surface를 사용할 수 있는 시기를 찾으려면 일반적으로 구현해야 합니다    
Surface의 내용은 __unlockCanvas()__ 와 __lockCanvas() 사이에서 절대로 보존되지 않기 때문에__ Surface 영역 내의 모든 픽셀을 작성해야합니다

[안드로이드 디벨로퍼](https://developer.android.com/reference/android/view/SurfaceHolder)

[안드로이드 SDK API](https://stuff.mit.edu/afs/sipb/project/android/docs/reference/android/view/SurfaceHolder.html)

[lockCanvas()](https://developer.android.com/reference/android/view/SurfaceHolder.html#lockCanvas())