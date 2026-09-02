# CSS: `random()` 함수

> **Limited availability**
>
> `random()` 함수는 아직 일부 주요 브라우저에서 동작하지 않기 때문에 **Baseline 기능이 아닙니다.**
>
> 또한 현재 **실험적(Experimental) 기술**입니다.
>
> 실서비스에서 사용하기 전에는 반드시 브라우저 호환성을 확인해야 합니다.

CSS의 **`random()` 함수**는 지정한 범위 안에서 임의의 값을 생성합니다.

기본적으로 다음과 같은 형태로 사용할 수 있습니다.

```css
random(0, 100)
random(10px, 500px)
random(0deg, 360deg)
```

또한 `step` 값을 지정해서 일정한 간격으로만 값이 나오도록 할 수도 있습니다.

```css
random(0, 100, 10)
```

이 경우 가능한 값은 대략 다음처럼 됩니다.

```text
0
10
20
30
40
...
100
```

CSS `random()`은 다음과 같은 타입에 사용할 수 있습니다.

* `<number>`
* `<integer>`
* `<length>`
* `<percentage>`
* `<angle>`
* `<time>`
* `<frequency>`
* `<resolution>`

예를 들어:

```css
.box{width: random(100px, 500px); transform: rotate(random(0deg, 360deg));}
```

처럼 크기나 회전 각도 등에 랜덤 값을 사용할 수 있습니다.

---

## 문법

가장 기본적인 형태는 다음과 같습니다.

```css
random(MIN, MAX)
```

예:

```css
random(0, 100)
```

또는 단위가 있는 값을 사용할 수도 있습니다.

```css
random(10px, 500px)
```

```css
random(0deg, 360deg)
```

---

## step 지정

세 번째 값으로 `step`을 지정할 수 있습니다.

```css
random(MIN, MAX, STEP)
```

예:

```css
random(0, 100, 10)
```

이 경우:

```text
0
10
20
30
40
...
100
```

처럼 `10` 단위의 값만 생성됩니다.

각도에서도 사용할 수 있습니다.

```css
random(0deg, 360deg, 45deg)
```

가능한 값은 다음과 같습니다.

```text
0deg
45deg
90deg
135deg
180deg
225deg
270deg
315deg
360deg
```

---

## 기본 예제

### 랜덤 너비

```html
<div class="box"></div>
```

```css
.box{width: random(100px, 500px); height: 100px; background: #ddd;}
```

페이지에서 계산될 때 `100px`에서 `500px` 사이의 값이 선택됩니다.

개념적으로는:

```text
100px
   ↓
random()
   ↓
347px
```

같은 식입니다.

---

## 랜덤 회전

```html
<div class="card">CARD</div>
```

```css
.card{width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; background: #ddd; transform: rotate(random(-20deg, 20deg));}
```

`-20deg`에서 `20deg` 사이의 각도가 선택됩니다.

예:

```text
-20deg ~ 20deg

↓ random()

7.8deg
```

---

## 랜덤 위치

```html
<div class="area">
    <div class="particle"></div>
</div>
```

```css
.area{position: relative; width: 500px; height: 300px; background: #111; overflow: hidden;}
.particle{position: absolute; width: 10px; height: 10px; border-radius: 50%; background: white; left: random(0%, 100%); top: random(0%, 100%);}
```

이렇게 하면 요소의 `left`, `top` 위치를 랜덤하게 지정할 수 있습니다.

---

# 매개변수

`random()`은 크게 다음과 같은 구조를 갖습니다.

```text
random(
    공유 방식,
    최소값,
    최대값,
    간격
)
```

공유 방식과 간격은 선택 사항입니다.

---

## 최소값과 최대값

두 값은 필수입니다.

```css
random(100px, 500px)
```

첫 번째 값:

```text
100px
```

은 최소값입니다.

두 번째 값:

```text
500px
```

은 최대값입니다.

즉:

```text
100px <= 결과 <= 500px
```

입니다.

두 값은 같은 데이터 타입으로 계산될 수 있어야 합니다.

예를 들어 다음은 정상적인 형태입니다.

```css
random(10px, 10rem)
```

둘 다 `<length>` 타입이기 때문입니다.

반면 서로 완전히 다른 타입을 혼합하면 정상적인 랜덤 범위로 사용할 수 없습니다.

---

# 반환값

`random()`은 최소값과 최대값 사이의 랜덤 값을 반환합니다.

예를 들어:

```css
random(10px, 100px)
```

은 다음과 같은 값 중 하나로 계산될 수 있습니다.

```text
27.83px
```

반환되는 값의 타입은 전달한 값과 동일한 타입입니다.

```text
px → length

deg → angle

% → percentage

숫자 → number
```

---

# Random base value

`random()`에서 중요한 개념 중 하나가 **Random base value**입니다.

쉽게 말하면 난수를 만들기 위한 **기준값(seed와 비슷한 개념)** 입니다.

두 `random()` 함수가 같은 base value를 공유하면 결과도 서로 연관되어 움직입니다.

반대로 서로 다른 base value를 가지면 완전히 독립적으로 랜덤 값이 생성됩니다.

---

# `auto`

공유 방식을 생략하면 기본적으로 `auto`처럼 동작합니다.

```css
.box{width: random(100px, 300px);}
```

또는 명시적으로:

```css
.box{width: random(auto, 100px, 300px);}
```

처럼 사용할 수도 있습니다.

기본적으로 요소의 스타일 안에 있는 각각의 `random()`은 고유한 random base value를 갖게 됩니다.

---

# Custom key

사용자 정의 키를 만들 수도 있습니다.

형태는 CSS Custom Property처럼 `--`로 시작합니다.

```css
random(--my-random, 100px, 300px)
```

같은 요소 안에서 같은 key를 사용하는 `random()`은 같은 random base value를 공유합니다.

이 기능을 이용하면 **width와 height를 같은 랜덤 값으로 만들 수 있습니다.**

예:

```html
<div class="box"></div>
```

```css
.box{width: random(--size, 100px, 300px); height: random(--size, 100px, 300px); background: #ddd;}
```

이 경우:

```text
width = 183px
height = 183px
```

처럼 두 값이 같아집니다.

즉 랜덤 크기의 **정사각형**을 만들 수 있습니다.

---

# `element-shared`

`element-shared`를 사용하면 같은 속성을 사용하는 여러 요소가 같은 random base value를 공유합니다.

예:

```html
<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
```

```css
.a,.b,.c{width: random(element-shared, 10px, 200px); height: random(element-shared, 10px, 200px);}
```

이 경우 `.a`, `.b`, `.c`는 모두 동일한 랜덤 `width` 값을 갖습니다.

예:

```text
.a width = 143px
.b width = 143px
.c width = 143px
```

`height`도 세 요소가 동일한 랜덤 값을 공유합니다.

하지만 `width`와 `height`는 서로 독립적으로 계산되므로:

```text
width = 143px
height = 92px
```

처럼 될 수도 있습니다.

---

# Custom key + `element-shared`

두 방식을 동시에 사용할 수도 있습니다.

```css
random(--size element-shared, 100px, 300px)
```

예:

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css
.box{width: random(--size element-shared, 100px, 300px); height: random(--size element-shared, 100px, 300px); background: #ddd;}
```

이 경우:

```text
첫 번째 box
width  = 180px
height = 180px

두 번째 box
width  = 180px
height = 180px

세 번째 box
width  = 180px
height = 180px
```

처럼 **모든 요소가 같은 크기의 정사각형**이 될 수 있습니다.

---

# `fixed`

고정된 base value를 지정할 수도 있습니다.

```css
random(fixed 0.5, 1em, 40vw)
```

`fixed` 뒤에는 `0`에서 `1` 사이의 숫자를 지정합니다.

```text
0 <= fixed value <= 1
```

예:

```css
.box{width: random(fixed 0.5, 100px, 500px);}
```

같은 조건이라면 항상 같은 base value를 기반으로 계산됩니다.

일반적인 랜덤 UI보다는 재현 가능한 랜덤 결과가 필요할 때 사용할 수 있는 방식입니다.

---

# Custom Property와 random()

일반 CSS Custom Property에 `random()`을 저장할 수도 있습니다.

```css
:root{--random-size: random(1px, 100px);}
```

하지만 중요한 점이 있습니다.

```css
--random-size: random(1px, 100px);
```

는 **랜덤 결과값 자체를 저장하는 것이 아닙니다.**

사실상 다음 함수 표현식을 저장합니다.

```text
random(1px, 100px)
```

그리고:

```css
.box{width: var(--random-size); height: var(--random-size);}
```

처럼 사용할 경우 각 위치에서 `random()`이 다시 해석될 수 있습니다.

즉 반드시 width와 height가 같아진다고 생각하면 안 됩니다.

---

# `@property`와 random()

등록된 Custom Property에서는 동작 방식이 다릅니다.

```css
@property --defaultSize{
    syntax: "<length> | <percentage>";
    inherits: true;
    initial-value: random(100px, 200px);
}
```

`@property`로 등록하면 계산된 랜덤 값을 저장할 수 있습니다.

예:

```html
<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
```

```css
@property --defaultSize{
    syntax: "<length> | <percentage>";
    inherits: true;
    initial-value: random(100px, 200px);
}

.a,.b,.c{width: var(--defaultSize); height: var(--defaultSize); background: #ddd;}
```

이 경우 등록된 `--defaultSize` 값을 width와 height가 함께 사용할 수 있습니다.

---

# 접근성

`random()`은 어떤 값이 나올지 정확하게 알 수 없기 때문에 접근성을 고려해야 합니다.

특히 색상에 랜덤 값을 사용할 때 주의해야 합니다.

예를 들어:

```css
.text{color: hsl(random(0, 360) 100% 50%);}
```

처럼 작성하면 배경색에 따라 텍스트 대비가 너무 낮아질 수 있습니다.

즉:

```text
랜덤 색상
+
랜덤하지 않은 배경

↓

우연히 대비가 낮은 조합 생성 가능
```

이라는 문제가 있습니다.

따라서 텍스트, 버튼, 상태 표시 등 중요한 UI에서는 랜덤 값을 제한된 안전한 범위에서 사용하는 것이 좋습니다.

---

# 예제 1: 랜덤 색상의 원

MDN의 기본 예제와 비슷한 형태입니다.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

```css
.badge{display: inline-block; width: 5em; aspect-ratio: 1 / 1; border-radius: 50%; background: hsl(random(element-shared, 0, 360) 50% 50%);}
.badge.desaturated{background: hsl(random(element-shared, 0, 360) 10% 50%);}
.badge.unique{background: hsl(random(0, 360) 50% 50%);}
```

여기서:

```css
random(element-shared, 0, 360)
```

을 사용하는 기본 `.badge`와 `.desaturated`는 같은 hue 계열을 공유합니다.

따라서:

```text
badge
hue = 220

desaturated
hue = 220
```

처럼 같은 색 계열을 사용할 수 있습니다.

하지만:

```css
.badge.unique{background: hsl(random(0, 360) 50% 50%);}
```

는 각각 독립적인 랜덤 hue를 사용합니다.

---

# 예제 2: 별이 랜덤하게 배치되는 배경

`random()`이 실제 UI에서 꽤 재미있게 쓰일 수 있는 예제입니다.

```html
<div class="space">
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
</div>
```

```css
.space{position: relative; width: 100%; height: 400px; overflow: hidden; background: #050510;}
.star{position: absolute; width: random(--star-size, 2px, 8px); height: random(--star-size, 2px, 8px); top: random(0%, 100%); left: random(0%, 100%); border-radius: 50%; background: white;}
```

여기서:

```css
width: random(--star-size, 2px, 8px);
height: random(--star-size, 2px, 8px);
```

처럼 동일한 custom key를 사용했습니다.

따라서 각 별은:

```text
width = height
```

가 되어 항상 원형을 유지합니다.

하지만 각 별의 크기는 서로 다를 수 있습니다.

```text
star 1 → 3px × 3px
star 2 → 7px × 7px
star 3 → 4px × 4px
```

위치는:

```css
top: random(0%, 100%);
left: random(0%, 100%);
```

으로 독립적으로 랜덤하게 결정됩니다.

---

# 예제 3: 랜덤 카드 회전

포트폴리오나 갤러리 UI에서 사용할 수 있는 형태입니다.

```html
<div class="cards">
    <div class="card">01</div>
    <div class="card">02</div>
    <div class="card">03</div>
    <div class="card">04</div>
</div>
```

```css
.cards{display: flex; gap: 30px; padding: 50px;}
.card{width: 140px; height: 180px; display: flex; align-items: center; justify-content: center; background: #eee; transform: rotate(random(-8deg, 8deg));}
```

각 카드마다 다른 회전값이 만들어질 수 있습니다.

```text
Card 1 → -3.2deg
Card 2 → 6.1deg
Card 3 → 1.7deg
Card 4 → -7.4deg
```

자연스럽게 흩어놓은 카드 같은 UI를 만들 수 있습니다.

---

# 예제 4: 랜덤 값에 step 적용

랜덤한 회전 각도를 만들되 `45deg` 단위로만 움직이게 만들 수도 있습니다.

```html
<div class="shape"></div>
```

```css
.shape{width: 100px; height: 100px; background: #ddd; transform: rotate(random(0deg, 360deg, 45deg));}
```

가능한 값은:

```text
0deg
45deg
90deg
135deg
180deg
225deg
270deg
315deg
360deg
```

중 하나가 됩니다.

---

# 예제 5: 랜덤 크기의 정사각형

같은 custom key를 사용하면 width와 height가 같은 random base value를 공유하게 할 수 있습니다.

```html
<div class="random-box"></div>
```

```css
.random-box{width: random(--box-size, 100px, 300px); height: random(--box-size, 100px, 300px); background: #ddd;}
```

예를 들어 결과가:

```text
width = 237px
height = 237px
```

처럼 됩니다.

핵심은:

```css
--box-size
```

라는 동일한 key를 사용했다는 점입니다.

---

# 예제 6: 랜덤 파티클

```html
<div class="particle-wrap">
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
</div>
```

```css
.particle-wrap{position: relative; width: 600px; height: 400px; overflow: hidden; background: black;}
.particle{position: absolute; width: random(--particle-size, 4px, 15px); height: random(--particle-size, 4px, 15px); top: random(0%, 100%); left: random(0%, 100%); border-radius: 50%; background: white; opacity: random(0.3, 1);}
```

각 파티클은:

* 크기 랜덤
* X 위치 랜덤
* Y 위치 랜덤
* 투명도 랜덤

으로 생성됩니다.

예:

```text
Particle 1
size = 7px
top = 23%
left = 81%
opacity = 0.6

Particle 2
size = 13px
top = 74%
left = 15%
opacity = 0.9
```

---

# 기존 JavaScript 랜덤과 비교

기존에는 CSS에 랜덤 값을 적용하려면 JavaScript를 사용하는 경우가 많았습니다.

예:

```javascript
const x = Math.random() * 100;
const y = Math.random() * 100;

element.style.left = `${x}%`;
element.style.top = `${y}%`;
```

CSS `random()`을 사용하면:

```css
.element{left: random(0%, 100%); top: random(0%, 100%);}
```

처럼 CSS 자체에서 처리할 수 있습니다.

즉:

```text
기존

JavaScript
↓
Math.random()
↓
style 변경


CSS random()

CSS
↓
random()
↓
CSS 값 계산
```

이라는 차이가 있습니다.

다만 현재는 브라우저 호환성이 충분하지 않기 때문에 `Math.random()`을 완전히 대체한다고 생각하면 안 됩니다.

---

# 핵심 정리

`random()`의 가장 기본적인 사용법은:

```css
random(MIN, MAX)
```

입니다.

예:

```css
.box{width: random(100px, 500px);}
```

간격을 지정하려면:

```css
random(MIN, MAX, STEP)
```

예:

```css
.box{transform: rotate(random(0deg, 360deg, 45deg));}
```

그리고 같은 랜덤 base value를 공유하려면 custom key를 사용할 수 있습니다.

```css
.box{width: random(--size, 100px, 300px); height: random(--size, 100px, 300px);}
```

여러 요소에서 값을 공유하려면:

```css
.box{width: random(element-shared, 100px, 300px);}
```

처럼 사용할 수 있습니다.

전체적으로 보면:

```text
random()
↓
CSS에서 랜덤 값 생성

random(min, max)
↓
범위 지정

random(min, max, step)
↓
범위 + 간격 지정

random(--key, min, max)
↓
같은 요소의 여러 속성에서 random base 공유

random(element-shared, min, max)
↓
여러 요소에서 random base 공유
```

입니다.

가장 중요한 점은 현재 `random()`이 아직 **Experimental / Limited availability** 기능이라는 것입니다.

따라서 학습이나 실험적인 포트폴리오에서는 재미있게 활용할 수 있지만, 실제 서비스에서는 브라우저 호환성을 반드시 확인하는 것이 좋습니다.

## 관련 문서

* [CSS random()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random)
* [CSS Values and Units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_values_and_units)
* [CSS Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/Functions)
* [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length)
* [CSS angle](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/angle)
* [CSS percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/percentage)
* [CSS @property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property)
* [CSS hsl()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/hsl)
