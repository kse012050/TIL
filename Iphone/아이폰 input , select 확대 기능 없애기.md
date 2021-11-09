# 아이폰 input , select 확대 기능 없애기

## html
IOS 모바일에서 input selectbox 을 누르면 자동으로 확대 되는 문제  
font-size가 16 이하 이면 focus된 input으로 자동으로 확대
- font-size를 16px로 고정
- ``<meta />`` 를 이용
- transform scale를 이용하여 크기 맞추기  
  
``<meta>`` 를 이용한 것이 제일 깔끔한 듯 하다

~~~html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
~~~

## Vue
~~~js
  head: {
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}
      ]
   }
~~~
~~~html
<script>
export default {
  head() {
    return {
      meta: [
         {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}
      ]
    }
  }
}
</script>
~~~