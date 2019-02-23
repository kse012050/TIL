우선 __dip__ 와 __dp__ 의 개념부터 알아보겠습니다  

### dip(Dots per inch)
1인치 안에 얼마나 많은 픽셀이 들어가 있는지 정합니다?  
160dp가 mdpi이며 이 경우에 1dp가 1픽셀입니다  
갯수가 많아질수록 hdpi, xhdpi로 명칭이 달라지며 그럴수록 1dp가 1.5픽셀 혹은 2픽셀이 됩니다

### dp(Density-independant Pixes)
dpi와 관련해 생각하면 됩니다  
dpi를 기준으로 픽셀을 환산한 단위 입니다  

## drawble / drawble-nodpi 의 차이점
간단한 테스트 앱으로 만들어 확인하겠습니다  

![drawable / drawable-nodpi 의 차이점 이미지](https://mblogthumb-phinf.pstatic.net/20130712_109/regako_1373613645936IM3XD_PNG/2dp.png?type=w2)

3번째 부터 마지막 6번째까지는 픽셀과 dp의 차이를 알 수 있는 부분입니다  
이미지가 어느 폴더에 있건 48px(48px설정) , 96px(48dp설정)의 크기로 표현됩니다  
__주의해서 볼 것은 처음 두 이미지 입니다__  
wrap_content를 사용해 이미지 원본크기 그래도를 보여달라는 설정을 해주었을 때, __drawable__에 있으면 이미지를 __두배__ 로 확대 했고, __nodpi__ 의 경우는 48px 이미지 크기 그래도 여줍니다  
즉 drawable에 있는 이미지는 비록 그 크기가 px이라고 하더라도 폰에서 자체적으로 단위만 dp로 바꾼 다음에 이 dp값을 픽셀로 재환산해서보여준다는 것을 알 수 있습니다  

### 1dp = 1px 인 폰에서 이 앱을 테스트 해보겠습니다
![1dp = 1px 인 폰 테스트](https://mblogthumb-phinf.pstatic.net/20130712_4/regako_1373613957233OJGTY_PNG/1dp.png?type=w2)

여기선 px와 dp 가 같기 때문에 전부 똑같은 크기로 나옵니다  

## drawable
drawable을 wrap_content하면 자동으로 사이즈를 키워준다는 것을 알 수 있습니다

### drawable을 px로 설정한다면?
drawable을 px로 설정한다면 px크기로 그대로 나올 것입니다  

하지만 여기서 문제는 원본크기px를 dp로 확대를 하고 이걸 다시 px크기로 줄이게 됩니다  
그렇게 된다면 이미지 화질이 망가지고 뭉개질 수 있습니다

[drawable/drawble-nodpi 차이점 내용 출처](https://m.blog.naver.com/PostView.nhn?blogId=regako&logNo=130172021554&proxyReferer=https%3A%2F%2Fwww.google.com%2F)