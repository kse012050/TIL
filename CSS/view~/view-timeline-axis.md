# view-timeline-axis
`view-timeline-axis` CSS 속성은 명명된 뷰 진행 타임라인에 사용할 스크롤 방향을 지정합니다.

## Syntax
~~~css
/* 논리적 속성 값 */
view-timeline-axis: block;
view-timeline-axis: inline;

/* 물리적 속성 값 */
view-timeline-axis: y;
view-timeline-axis: x;

/* 전역 값 */
view-timeline-axis: inherit;
view-timeline-axis: initial;
view-timeline-axis: revert;
view-timeline-axis: revert-layer;
view-timeline-axis: unset;
~~~

### Values
#### `<axis>`
뷰 진행 타임라인에서 사용되는 스크롤 방향을 지정합니다. 값은 `<axis>` 키워드(block, inline, x, y) 중 하나일 수 있습니다. 기본값은 `block`입니다.

## Description
`view-timeline-axis` 속성은 요소의 `box`를 기준으로 하는 명명된 뷰 진행 타임라인의 방향(`<axis>`)을 지정합니다.  
  
기본적으로 CSS `@keyframes` 애니메이션은 시간 기반 기본 타임라인을 따라 진행됩니다. 뷰 진행 타임라인을 통해 애니메이션 진행을 설정하는 경우, `view-timeline-axis` 속성은 타임라인 진행을 제어하는 ​​방향을 지정합니다.  
  
뷰 진행 타임라인의 경우, 타임라인을 따라 애니메이션이 진행되는 방식은 요소(`subject`)의 가시성을 기준으로 합니다. `view-timeline-axis` 속성은 `subject`에 설정됩니다.  
  
`subject`는 스크롤 가능한 요소 안에 중첩되어 있어야 합니다. 스크롤 가능한 요소가 `<axis>` 방향으로 컨테이너를 넘지 않거나, 넘친 부분이 숨겨지거나 잘린 경우 스크롤 진행 타임라인이 생성되지 않습니다.  
  
`view-timeline-axis`는 `view-timeline-inset` 및 `view-timeline-name` 속성과 함께 `view-timeline` 단축 속성의 구성 요소입니다.


## Examples
### 뷰 진행 타임라인의 축 정의
이 예제에서는 클래스가 "animation"인 subject 요소에 `view-timeline-name` 속성을 사용하여 `--subject-reveal`이라는 이름의 뷰 진행 타임라인을 정의합니다. 그런 다음 `animation-timeline: --subject-reveal;` 속성을 사용하여 동일한 요소의 애니메이션에 이 타임라인을 적용합니다.  
  
`view-timeline-axis`의 효과를 보여주기 위해 이 예제에서는 가로 방향(기본값이 아닌) 스크롤 막대를 사용하여 애니메이션을 실행합니다.  
  
#### HTML
예제의 HTML 코드는 아래와 같습니다.
~~~html
<div class="content">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <p>
        Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
        libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue.
    </p>

    <p>
        Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
        dignissim. Tortor aliquam nulla facilisi cras.
    </p>

    <p>
        A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
        nisl vel pretium lectus.
    </p>

    <p>
        Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
        arcu vitae elementum curabitur vitae nunc sed velit.
    </p>

    <div class="subject animation"></div>

    <p>
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
        cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
        dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
        tellus orci ac auctor augue mauris.
    </p>
</div>
~~~

#### CSS
CSS에서 `view-timeline-name` 속성을 사용하여 `subject` 요소를 `--subject-reveal`이라는 이름의 뷰 진행 타임라인의 소스로 설정합니다. 스크롤 축은 `view-timeline-axis: x;`를 사용하여 설정합니다. 또한 표준이 아닌 레거시 가로 및 세로 값을 지원하는 브라우저를 위해 `view-timeline-axis: horizontal;`도 포함합니다.  
  
`content` 상위 요소는 `display: flex;` 및 `flex-flow: column wrap;`을 사용하여 콘텐츠를 배치함으로써 가로 방향으로 넘치도록 합니다.
~~~css
.subject {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background-color: deeppink;
}

.content {
    width: 50%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    }

p {
    font-family: "Helvetica", "Arial", sans-serif;
}

p {
    font-size: 1.3rem;
    line-height: 1.4;
}

.animation {
    view-timeline-name: --subject-reveal;
    view-timeline-axis: x;
    view-timeline-axis: horizontal;

    animation: appear 1ms linear both;
    animation-timeline: --subject-reveal;
}

@keyframes appear {
    from {
        opacity: 0;
        transform: scaleX(0);
    }

    to {
        opacity: 1;
        transform: scaleX(1);
    }
}
~~~

#### Result
하단의 가로 막대를 스크롤하면 스크롤하는 동안 대상 요소가 애니메이션 효과를 보여줍니다.  
[예제 결과](https://developer.mozilla.org/en-US/play?uuid=5242a211041eaeb140ae8d15e57671caf040fb0c&state=pVVNb9tGEP0rAwJFE8BirCa90G4QAw3aQ9tD3UML6JDhckROvB%2F07CxlxdB%2FL5Yf8pd8aS%2FSYnfnzXtvZrj3RafOFlVx2fAAxmKMP20KE7yS103xceMBLvvxD%2BC3IOSA%2B5gcNMEGgcgK6EjPwAQfyShpEsCGe46GfQtkWc8gUgNNAOIUXWgmMCXXBwH2hhtukldIChbrIASkEz6Bw9YjoOXbhOVI5l1m84TWnxxThNvEEQYUHtfoxo3bRMBNCZ8VLLfJIiRr0ZkgPQk4tBQTNgi9BPYTmuWaJIBP3kyibhMqsFeSJrk5QwmfLesTsIZbzzGyAyMYZ42juqzNhjqIcoQtpZZRYeABXYqACpjaRK%2BJ%2B3nymZocQSI4%2Bz%2FyG30hLeGamvGOjFb0QsrJTTYMyfZJUWnCO9Is4a8gGmQ2NyNai7BFw5YjjypeI3UFJKjg0WX%2BloymCEk8QpOrYIIf0NrHqxL%2B4LqbuR9tndA8RwsD2SPvCfC15NfYsmYrF%2BIPZay5Jp%2BrhGISDKxIQJYceU2uhN9fXJwQT90GkwRrzu08nYyGj3XIPf2c3OPpian%2BSkYBPTtUDn5TfLx81%2FDwwsZHc%2BLZASXQJD1HoJai4kMlkTyhh75DIRVcxsKUcCUmTWgmSS7%2BxNYE36Y8Pkk4gnTBm9xsE8xAtoTreXSXuGWUlzYxo2VXuTfBUx6kVnDgBoE9bElmm3L3%2FTIfSFJJD4Png19G3doUIYhhQAOYzNh36YHhIzsXp4qzwsRYVEW5%2BHmfL%2B240a6C9%2Bfn%2Fd1F3uiI204r%2BOG441Ba9hWcAyYN41aN5qaVkHyzMnmgKmiI%2Bp79zcXGH3JZyvmb9yTLj%2BffPcnx4VmOlYY%2Bc5k3G469xX0FW0vTTl6stjbsKjDBJudhJ9iPRy32Fayn0JFBP6XeBq%2BrLTq2%2Bwo2xa9kB1I2uCnOYFNcCaPNy4g%2BriIJb0%2FFR%2F5GFazL90JuzGbZ02qRsS4%2FHGUfm3SKHph2K2VHY4BHRxWsVnMFVkIDob14eRHvOFZw9%2BpJF4S%2FBa9jcL50TFsB9j2hwNrFkSUK1EG7iye3jngn2YxKPt3QfivoKC6Ikx0S3LQCCD0a1n0F5xdzYwr6uA3iKogGLf395vzteHSYWGp4Ebp%2BNXR9DD1s%2FCeLexLwYRVT3weZ%2B6oOzb6qatrmt%2B1%2BGbW5a2obzM0CT3e6Qsutr8BQfnzmgx6bhn1bwXqu7CH%2FfJqzRPBB4c2pErDvSFjfLmlPUQGYpyB33j8hCdQSdjG%2FboGi%2F15hUaMdwZeXab7kl7Qn0X25KS4W0JfTt%2BsIdT4%2FnFBxUsFDE%2F1HEUd4Sy2aPQxoE0XYBvm%2FevZkbdg9E3QYP2Jf8zesOCu0I0dFVdg8g8XhXw%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FReference%2FProperties%2Fview-timeline-axis%2F)  
  
[내용출처 MDN view-timeline-axis animation 방향](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-timeline-axis)