# HTML attribute: accept
accept 속성은 허용할 파일 유형을 설명하는 하나 이상의 파일 유형 또는 고유한 파일 유형 지정자의 쉼표로 구분된 목록을 값으로 사용합니다.

## Overview ( 개요 )
accept 속성은 파일 ``<input>`` 유형의 속성입니다. ``<form>`` 요소에서 지원되었지만 파일을 위해 제거되었습니다.  
  
지정된 파일 유형은 여러 가지 방식으로 식별될 수 있으므로 특정 유형의 파일이 필요할 때 철저한 유형 지정자 세트를 제공하거나 와일드카드를 사용하여 모든 형식의 유형이 허용됨을 표시하는 것이 유용합니다.  
  
예를 들어 Microsoft Word 파일을 식별할 수 있는 방법은 여러 가지가 있으므로 Word 파일을 허용하는 사이트는 다음과 같은 <input>을 사용할 수 있습니다.  

~~~html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
~~~
반면 미디어 파일을 수락하는 경우 해당 미디어 유형의 모든 형식을 포함할 수 있습니다.

~~~html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
~~~
accept 속성은 선택한 파일 유형의 유효성을 검사하지 않습니다. 사용자가 올바른 파일 유형을 선택하도록 안내하기 위해 브라우저에 대한 힌트를 제공합니다. (대부분의 경우) 사용자가 파일 선택기에서 이 옵션을 무시하고 원하는 파일을 선택한 다음 잘못된 파일 형식을 선택할 수 있는 옵션을 전환할 수 있습니다.  
  
이 때문에 예상 요구 사항이 서버 측에서 검증되었는지 확인해야 합니다.  

## 예
파일 입력 유형을 설정하면 열리는 기본 파일 선택기가 올바른 파일 유형의 파일만 선택할 수 있어야 합니다. 대부분의 운영 체제는 기준과 일치하지 않고 선택할 수 없는 파일을 밝게 합니다.

~~~html
<p>
    <label for="soundFile">Select an audio file:</label>
    <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
    <label for="videoFile">Select a video file:</label>
    <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
    <label for="imageFile">Select some images:</label>
    <input type="file" id="imageFile" accept="image/*" multiple />
</p>
~~~
마지막 예에서는 여러 이미지를 선택할 수 있습니다. 자세한 내용은 [multiple](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple) 속성을 참조하십시오.  

## 고유한 파일 형식 지정자
__고유한 파일 유형 지정자__ 는 파일 유형의 ``<input>`` 요소에서 사용자가 선택할 수 있는 파일 유형을 설명하는 문자열입니다. 각각의 고유한 파일 유형 지정자는 다음 형식 중 하나를 취할 수 있습니다.  
  
- 마침표(".") 문자로 시작하는 대소문자를 구분하지 않는 유효한 파일 이름 확장자입니다. 예: ``.jpg``, ``.pdf`` 또는 ``.doc`` 
- 확장자가 없는 유효한 MIME 유형 문자열입니다.  
- 문자열 ``audio/*``는 "모든 오디오 파일"을 의미합니다.  
- 문자열 ``video/*``는 "모든 비디오 파일"을 의미합니다.  
- 문자열 ``image/*``는 "모든 이미지 파일"을 의미합니다.   

accept 속성은 쉼표로 구분된 이러한 고유한 파일 유형 지정자 중 하나 이상을 포함하는 문자열을 값으로 사용합니다. 예를 들어 표준 이미지 형식과 PDF 파일을 모두 포함하여 이미지로 표시할 수 있는 콘텐츠가 필요한 파일 선택기는 다음과 같습니다.

~~~html
<input type="file" accept="image/*,.pdf" />
~~~

## 파일 입력 사용
### 기본적인 예
~~~html
<form method="post" enctype="multipart/form-data">
    <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="file" name="file" multiple />
    </div>
    <div>
        <button>Submit</button>
    </div>
</form>
~~~
  
사용자의 장치나 운영 체제에 관계없이 파일 입력은 사용자가 파일을 선택할 수 있는 파일 선택기 대화 상자를 여는 버튼을 제공합니다.  
  
위와 같이 ``multiple`` 속성을 포함하면 여러 파일을 한 번에 선택할 수 있음을 지정합니다. 사용자는 선택한 플랫폼에서 허용하는 방식(예: ``Shift`` 또는 ``Control``을 누른 상태에서 클릭)으로 파일 선택기에서 여러 파일을 선택할 수 있습니다. 사용자가 ``<input>``당 하나의 파일만 선택하게 하려면 ``multiple`` 속성을 생략하십시오.

## 허용되는 파일 형식 제한
종종 사용자가 임의의 유형의 파일을 선택할 수 있기를 원하지 않을 것입니다. 대신 특정 유형의 파일을 선택하기를 원하는 경우가 많습니다. 예를 들어 파일 입력을 통해 사용자가 프로필 사진을 업로드할 수 있는 경우 JPEG 또는 PNG와 같은 웹 호환 이미지 형식을 선택하기를 원할 수 있습니다.  
  
허용되는 파일 유형은 허용된 파일 확장자 또는 MIME 유형의 쉼표로 구분된 목록을 사용하는 accept 속성을 사용하여 지정할 수 있습니다. 몇 가지 예:  

- accept="image/png" 또는 accept=".png" — PNG 파일을 허용합니다.
- accept="image/png, image/jpeg" 또는 accept=".png, .jpg, .jpeg" — PNG 또는 JPEG 파일을 허용합니다.
- accept="image/*" — image/* MIME 유형의 모든 파일을 허용합니다. (또한 많은 모바일 장치에서 카메라를 사용할 때 사용자가 카메라로 사진을 찍을 수 있습니다.)
- accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" — MS Word 문서 냄새가 나는 모든 것을 허용합니다.  
  
보다 완전한 예를 살펴보겠습니다.
~~~html
<form method="post" enctype="multipart/form-data">
    <div>
        <label for="profile_pic">Choose file to upload</label>
        <input
        type="file"
        id="profile_pic"
        name="profile_pic"
        accept=".jpg, .jpeg, .png" />
    </div>
    <div>
        <button>Submit</button>
    </div>
</form>
~~~
[내용출처 MDN input file 형식 제한](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)
