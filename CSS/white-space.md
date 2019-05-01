# white-space
white-space 속성은 어떤 요소(element) 안의 공백(whitespace)이 어떻게 처리될지를 나타내는데 사용 됩니다

## 문법
~~~css
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;
~~~

### normal
연속된 공백이 하나로 병합됩니다  
소스 안의 줄바꿈 문자는 다른 공백 문자와 같이 취급됩니다  
줄 박스를 채우기 위해 필요에 따라 줄을 끊습니다

### nowrap 쓰레기
normal과 같이 공백 문자를 병합하지만, 텍스트 줄바꿈(text wrapping)을 하지 않습니다

### pre 미리
연속된 공백이 보존됩니다  
줄은 오로지 소스의 줄바꿈 문자나 ```<br>``` 요소에서만 끊어집니다

### pre-wrap
연속된 공백이 보존됩니다  
줄은 줄바꿈 문자 ```<br>``` 그리고 줄 박스를 채우기 위해 필요에 따라 끊어집니다

### pre-line
연속된 공백이 병합됩니다  
줄은 줄바꿈 문자 ```<br>``` 그리고 줄 박스를 채우기 위해 필요에 따라 끊어집니다


[내용 출처](https://developer.mozilla.org/ko/docs/Web/CSS/white-space)