setTimeout(function callback() {
    console.log('첫번째 타이머 종료');
},5000);

setTimeout(function callback() {
    console.log('두번째 타이머 종료');
});

setTimeout(function callback(){
    console.log('세번째 타이머 종료')
})

// --> 비동기함수이므로 5초가 걸림 동시에 작동