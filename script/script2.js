//원시데이터(논리형 데이터 true(1), false(0))
let a = false
let b = 1
console.log(a==b)
//원시데이터(null, undefined(정의되지않음))
let c = 10 // 선언, 대입 o
let d // 선언 o , 대입 x
c = null //대입된 후 특정상황에 따라 값을 제거할 경우
console.log(c) // null
console.log(d) // undefined
console.log('-------------------------------')
let e = 10
let f = '0'
console.log(e+f)
console.log('-------------------------------')
//산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3
console.log(num1,num2,num3,num4,num5)
console.log('-----------------------------')
let box1 = 1
//box1 = box1+10
box1 += 10
console.log(box1) // 11
console.log('-----------------------------')
let box2 = 0
box2 = box2+10 // box2 +=10
console.log(box2) // 10
box2 = box2-5 // box2 -=5
console.log(box2) // 5
box2 = box2*2 // box2 *=2
console.log(box2)// 10
box2 +='살 입니다 어쩌라고'
//window.alert(box2)
console.log('-----------------------------')
let box3 = 10
console.log(box3)
let box4 =box3++
console.log(box4, box3)