let promise = new Promise(function(resolve, reject){
    resolve();
});

promise
.then(function(){
    console.log('Suceess 1')
})
.then(function(){
    console.log('Suceess 2')
})
.catch(function(){
    console.log('Error 1')
})
//Success 1,2가 출력됨
//resolve는 then을 호출

//then은 함수 체이닝 기술을 가지고 있음
//then은 여러번 쓸 수 있다

//resolve를 실행하면 fullfilled 상태가 된다