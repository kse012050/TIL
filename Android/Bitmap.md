# Bitmap
모든 프로그램에서 이미지 관리의 기본이 됩니다  
Bitmap 관련 클래스는 android.graphics.Bitmap 입니다  
클래스들은 android.graphics 패키지에 있으며 여기에 포함된 것입니다  

객체 Factory 관리를 위해 BitmapFactory 클래스가 있습니다  
BitmapFactory는 여러가지 이미지 포맷을 ```decode(풀다)``` 해서 bitmap으로 변환하는 함수들로 되어 있습니다  
그 이름들은 decodeXXX로 되어 있어서 쉽게 원하는 기능의 함수를 찾을 수 있습니다

## BitmapFactory
~~~
BitmapFactory 에서 주로 사용하고 있는 함수와 옵션에 대해 설명하겠습니다
~~~

### BitmapFactory.decodeByteArray()
Camera.PictureCallBack 으로부터 받은 Jpeg 사진
데이터를 가지고 Bitmap 으로 만들어 줄 때 많이 사용합니다
Camera.PictureCallback 에서 들어오는 데이터가 byte[] 배열로 들어오기 때문입니다

### BitmapFactory.decodeFile()
로컬에 존재하는 파일을 그대로 읽어올 때 씁니다  
파일경로를 파라미터로 넘겨주면 FileInputStream 을 만들어서 decodeStream을 합니다

### BitmapFactory.decodeStream()
InputStream 으로부터 Bitmap 을 만들어 줍니다

### BitmapFactory.Options
BitmapFactory 가 사용하는 옵션클래스입니다  
Options 객체를 생성하고 설정하고자 하는 옵션을 넣은후 BitmapFactory 의 함수 실행시 파라미터로 넘기면 됩니다
+ inSampleSize  
    + decode 시 얼마나 줄일지 설정하는 옵션인데 1보다 작을때는 1이 됩니다  
    + 1보다 큰값일 때 1/N 만큼 이미지를 줄여서 decoding 하게 됩니다  
    + 보통 2의 배수로 설정한다.

> 더 자세한 내용은 써보면서 다시 정리하겠습니다

[Bitmap 내용 출처](https://mainia.tistory.com/468)
