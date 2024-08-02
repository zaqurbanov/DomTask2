const num1 = document.getElementById("num1");
const num2 = document.getElementById('num2');
const task1Result = document.getElementById('resultTask1');
const calculateBtns = document.querySelectorAll('.calculatebt1')

calculateBtns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        const sign = e.target.value
        const number1 = getNum1();
        const number2 = getNum2();
        
        let result =  calculate(number1,number2,sign);
        clearInput()
        resultTask1(result)


    })
    
})


const calculate=(numParam1,numParam2,signParam)=>{

    let result = ""
    switch (signParam) {
        case "+":
           result = numParam1 + numParam2
            break;
        case "-":
             result = numParam1 - numParam2
            break;

        case "*":
        result = numParam1 * numParam2
            break;

            case "/":
         result = numParam1 / numParam2
            break;
        default:
            break;
    }
  
    return result

}

const getNum1 = ()=>{
    if(isNaN(num1.value)) return Number (0)
    return Number( num1.value)
}
const getNum2 = ()=>{
    if(isNaN(num2.value)) return Number (0)

    return Number( num2.value)
}

const clearInput = ()=>{
    num1.value = 0;
    num2.value = 0
}
const resultTask1 = (result)=>{
    
    task1Result.textContent = result
   
    }
export default resultTask1