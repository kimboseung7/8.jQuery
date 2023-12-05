$(function () {
    $(".cal3 input").click(function(){

        const num1 = $("#num1").val();
        const num2 = $("#num2").val();

        let result;
        

       switch($(this).attr('id')){
        case '+':
            result = Number(num1)+Number(num2);
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
       };

       $(".result").text(result);
       //속성값 변경하기
    });
   

});