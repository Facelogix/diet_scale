# javascript
<h1>다이어트 체중계</h1>
<p> //계산식) 적정체중 = (본인신장-100)*0.9 </p>
<p> //변수명 예)userHeight, userWeight, normal_w </p>
<p> //prompt 현재키, 몸무게 입력받기 </p>
<p> //dom 객체 변수 생성하기 </p>
---

`const height = document.getElementsByClassName('height')`

`const weight = document.getElementsByClassName('weight')`

`const normal = document.getElementsByClassName('normal')`

`const weight2 = document.getElementsByClassName('weight2')`//서순 중요

---
`const userHeight = window.prompt('당신의 현재 신장은?')`

`const userWeight = window.prompt('당신의 현재 몸무게는?')`

`let normal_w = (userHeight-100)*0.9;`

---
//콘솔 출력

`console.log(userHeight, userWeight)`

`console.log(normal_w)`

`console.log(`목표 몸무게=${(userHeight-100)*0.9}kg`)`

`console.log(`최종 감량 목표=${userWeight-normal_w}kg`)`

`console.log(height, weight, normal, weight2)`

---

`height[0].innerHTML = userHeight`

`weight[0].innerHTML = userWeight`

`normal[0].innerHTML = normal_w`

`weight2[0].innerHTML = userWeight-normal_w`


