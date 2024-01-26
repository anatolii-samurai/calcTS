const equally = document.getElementById('equally');
const firstItem = document.getElementById('first_item') as HTMLInputElement;
const secondItem = document.getElementById('second_item')as HTMLInputElement;
const selectOperation = document.getElementById('symbols')as HTMLInputElement;
const resultEnd = document.querySelector('.result')as HTMLInputElement;
const answers = document.querySelector('.answers')as HTMLInputElement;

// const OPERATION : {sum: string| number; subtr: string| number ; multi: string| number; division:string| number} = {
//     sum: '+',
//     subtr: '-',
//     multi: '*',
//     division: '/'
// };

enum OPERATION  {
    sum ='+',
    subtr = '-',
    multi = '*',
    division = "/"
};

   const sum = (a:number,b: number) :number => {
        return a + b;
    }
    const subtr = (a:number,b: number) :number => {
        return a - b;
    } 
    const division = (a:number,b: number) :number => {
        return a / b;
    } 
    const multi = (a:number,b: number) :number => {
        return a * b;
    }
    function calculate (a:number, b:number,operation:any){
        // if (operation == OPERATION.sum) {
        //     return sum(a,b);
        // }
         switch (operation){
         case OPERATION.sum:
           return sum(a,b);
      case OPERATION.subtr:
          return subtr(a,b);
          
      case OPERATION.multi:
           return multi(a,b);
           
         case OPERATION.division:
          return division(a,b);
          
         default:
             break;
        }
       
    }  

    equally?.addEventListener('click',(e)=>{
        e.preventDefault();
        const a:number = parseInt(firstItem.value);
        const b:number = parseInt(secondItem.value);
        const operation:any = selectOperation.value;
        // const operationNum:number = parseInt(operation)
        if (a == null || b == null){
            alert('Введите значение')
        }else{
            let result = calculate(a,b,operation)!;
            console.log(calculate(a,b,operation));
            
            resultEnd.textContent = `${result}`;
            const newAnswer = document.createElement('li');
            newAnswer.textContent = `${result}`;
            answers.append(newAnswer);
            newAnswer.addEventListener("click",(e) =>{
                let target = e.target as HTMLElement;
                target?.remove()
            })
        }
        
    })


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
