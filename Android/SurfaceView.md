# SurfaceView
> 1 . `SurfaceView`는 View를 상속받는 클래스입니다   
일반 View는 onDraw 메서드를 시스템에서 자동으로 호출해줌으로써 화면을 그립니다   
__그래서 화면에 늦게 그려질 수도 있습니다__   
2 . `SurfaceView`는 그리기를 시스템에 맡기는 것이 아니라 스레드를 이용해 강제로 화면에 그림으로써 원하는 시점에 바로 화면에 그릴 수 있습니다  
3 . `SurfaceView`는 애니메이션이나 동영상과 같이 연산처리가 많이 필요한 뷰를 위해 사용합니다  
4 . `SurfaceView`는 더블 버퍼링 기법을 이용하여 SurfaceHolder가 Surface에 미리 그리고 이 Surface가 SurfaceView에 반영되는 방식입니다  
5 . 'SurfaceView'는 자기 영역 부분의 Window를 뚫어서(punch) 자신이 보여지게끔 하고 Window와 View가 블렌딩되어 화면에 보여지게 됩니다

![SurfaceView 이미지](https://mblogthumb-phinf.pstatic.net/MjAxNzA3MThfMzMg/MDAxNTAwMzY4NTYzMTUz.MwDn2xyuHAe-2A86x42JYN5gT6Oo8XzAT3Qtm4vSJcUg.cM-ZCdjioFj_9osza-Hk8M_ZBp6jedgyj_MkxaKdaNMg.PNG.muri1004/surfaceview.png?type=w2)

## public void onDraw (Canvas canvas)
화면을 그려줍니다
## public void surfaceChanged() 
뷰가 변경될 때 호출됩니다
## public void surfaceCreated()
뷰가 생성될 때 호출됩니다
## public void surfaceDestroyed()
뷰가 종료될 때 호출됩니다

~~~java
1 public class MySurfaceView extends SurfaceView implements SurfaceHolder.Callback {
2    Context mContext;
3    SurfaceHolder mHolder;
4    RenderingThread mRThread;
5 
6    public MySurfaceView(Context context) {
7        super(context);
8        mContext = context;
9        mHolder = getHolder();
10        mHolder.addCallback(this);
11        mRThread = new MySurfaceView.RenderingThread();
12    }
13 
14    @Override
15    public void surfaceCreated(SurfaceHolder surfaceHolder) {
16        // Surface가 만들어질 때 호출됨
17        mRThread.start();
18    }
19 
20    @Override
21    public void surfaceChanged(SurfaceHolder surfaceHolder, int format, int width, int height) {
22        // Surface가 변경될 때 호출됨
23    }
24 
25    @Override
26    public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
27        // Surface가 종료될 때 호출됨
28        try {
29            mRThread.join();
30        } catch (InterruptedException e) {
31            e.printStackTrace();
32        }
33    }
34 
35 
36    class RenderingThread extends Thread {
37        Bitmap img_android;
38        public RenderingThread() {
39            Log.d("RenderingThread", "RenderingThread()");
40            img_android = BitmapFactory.decodeResource(mContext.getResources(), R.drawable.android);
41        }
42 
43        public void run() {
44            Log.d("RenderingThread", "run()");
45            Canvas canvas = null;
46            while (true) {
47                canvas = mHolder.lockCanvas();
48                try {
49                    synchronized (mHolder) {
50                        canvas.drawBitmap(img_android, 0, 0, null);
51                    }
52                } finally {
53                    if (canvas == null) return;
54                    mHolder.unlockCanvasAndPost(canvas);
55               }
56            }
57        }
58    } // RenderingThread
59 }
~~~
## 설명
* 1
    * SurfaceView를 상속받는 MySurfaceView 클래스를 정의합니다   
    * 실제 작업 수행은 SurfaceHolder.Callback이 수행하므로 implements 로 callback들의 구현합니다
* 6 ~ 12
    * SurfaceHolder에 addCallback()으로 MySurfaceView 클래스에 있는 callback을 등록합니다
    * View에 rendering을 할 Thread를 생성한다.
* 14 ~ 28
    * @Override라고 annotation이 적혀있는 surfaceCreated(), surfaceChanged(), surfaceDestroyed() 등이 callback을 재정의했습니다
    * SurfaceHolder.Callback을 implements 할시 반드시 override 구현해야할 callback 함수들입니다
    * 함수의 이름에서 알 수 있듯이
        1. surfaceCreated()는 surface가 생성되었을 때 호출되는 함수입니다 
        2. surfaceChanged()는 surface가 변경되었을 때 호출됩니다
        3. surfaceDestroyed()는 surface가 destroy될 때 호출됩니다
    * 따라서 17번 줄을 보면 surfaceCreated() 함수가 호출되면, 즉 surface가 생성되면 RenderingThread를 시작시킨다.
* 31
    * Rendering 작업을 수행할 thread를 정의하고 있습니다
    * SurfaceHolder의 callback 에서 이 thread를 사용해서 작업을 수행합니다
* 33 ~ 36
    * RenderingThread의 생성자가 불릴 때 미리 res/drawable/android.png 파일을 Bitmap으로 만들어놓습니다
    * 이후에 canvas.drawBitmap() 메소드에 사용됩니다
* 38 ~ 51
    * 17번 줄에서 처럼 surfaceCreated() 함수가 호출되면 RenderingThread object에 start()를 호출하는데, start() 내부에서 바로 이 run() 메소드가 불리게 됩니다
    * 42번 줄에서 SurfaceHolder로부터 lockCanvas()로 Canvas object를 얻고, 44번 줄에서 SurfaceHolder에 대해 동기화를 유지하면서 45번 줄에서 Canvas에 위에서 미리 생성해둔 Bitmap을 버퍼에 그립니다
    * 모두 그리고 나면 49번 줄에서 canvas의 내용을 view에 전송합니다

[SurfaceView 출처](https://m.blog.naver.com/PostView.nhn?blogId=muri1004&logNo=221054311714&proxyReferer=https%3A%2F%2Fwww.google.com%2F)

