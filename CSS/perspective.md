# perspective
CSS의 속성은 3차원 위치 요소 일부 관점을 제공하기 위해, Z = 0 인 평면과 사용자 사이의 거리를 결정한다.  
perspective Z > 0 인 각 3D 요소가 커집니다.  
Z < 0 인 각 3D 요소는 작아집니다.  
__효과의 강도는 이 속성의 값에 의해 결정됩니다.__


사용자가 뒤에 있는 3D 요소의 일부 (즉, z 축 좌표가 perspective CSS 속성 값보다 큼)는 그려지지 않습니다.

소실점은 소자의 중심에 위치하는 거시 기본이지만, 그 위치는 사용이 변경 될 수 있습니다.(__perspective-origin__)  

보다 값이 다른 부동산을 사용 0 하고 none이 새로 생성, 또한 이 경우 객체는 포함된 position:fixed 요소의 포함 블록으로 작동 합니다.

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/CSS/perspective)

## perspective-origin
CSS의 속성은 시청자가 보게 되는 위치를 결정합니다.  
속성에 의해 소실점으로 사용됩니다.

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
