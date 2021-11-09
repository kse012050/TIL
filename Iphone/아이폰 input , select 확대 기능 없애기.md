# 아이폰 input , select 확대 기능 없애기

## html
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