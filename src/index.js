var equally = document.getElementById('equally');
var firstItem = document.getElementById('first_item');
var secondItem = document.getElementById('second_item');
var selectOperation = document.getElementById('symbols');
var resultEnd = document.querySelector('.result');
var answers = document.querySelector('.answers');
// const OPERATION : {sum: string| number; subtr: string| number ; multi: string| number; division:string| number} = {
//     sum: '+',
//     subtr: '-',
//     multi: '*',
//     division: '/'
// };
var OPERATION;
(function (OPERATION) {
    OPERATION["sum"] = "+";
    OPERATION["subtr"] = "-";
    OPERATION["multi"] = "*";
    OPERATION["division"] = "/";
})(OPERATION || (OPERATION = {}));
;
var sum = function (a, b) {
    return a + b;
};
var subtr = function (a, b) {
    return a - b;
};
var division = function (a, b) {
    return a / b;
};
var multi = function (a, b) {
    return a * b;
};
function calculate(a, b, operation) {
    // if (operation == OPERATION.sum) {
    //     return sum(a,b);
    // }
    switch (operation) {
        case OPERATION.sum:
            return sum(a, b);
        case OPERATION.subtr:
            return subtr(a, b);
        case OPERATION.multi:
            return multi(a, b);
        case OPERATION.division:
            return division(a, b);
        default:
            break;
    }
}
equally === null || equally === void 0 ? void 0 : equally.addEventListener('click', function (e) {
    e.preventDefault();
    var a = parseInt(firstItem.value);
    var b = parseInt(secondItem.value);
    var operation = selectOperation.value;
    // const operationNum:number = parseInt(operation)
    if (a == null || b == null) {
        alert('Введите значение');
    }
    else {
        var result = calculate(a, b, operation);
        console.log(calculate(a, b, operation));
        resultEnd.textContent = "".concat(result);
        var newAnswer = document.createElement('li');
        newAnswer.textContent = "".concat(result);
        answers.append(newAnswer);
        newAnswer.addEventListener("click", function (e) {
            var target = e.target;
            target === null || target === void 0 ? void 0 : target.remove();
        });
    }
});
// equally?.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const firstValue = firstItem?.value;
//     const firstValueNum:number = parseInt(firstValue)
//     const secondValue = secondItem?.value;
//     const secondValueNum:number = parseInt(secondValue) 
//     const newCalc = new Calc(firstValueNum,secondValueNum);
//     if (newCalc.a == null || newCalc.b == null){
//         alert('Введите значение')
//     }else{
//         let operation = selectOperation?.value;
//         let result = newCalc.operation;
//         console.log(result);
//         resultEnd.textContent = result
//         const newAnswer = document.createElement('li');
//         newAnswer.innerHTML = result;
//         answers?.append(newAnswer);
//         newAnswer.addEventListener("click",(e) =>{
//            const target = e.target as HTMLInputElement;
//             target.remove()
//         })
//     }
// })
