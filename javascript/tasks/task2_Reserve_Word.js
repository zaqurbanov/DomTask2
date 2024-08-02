const task2Input = document.getElementById('task2Input');
const convertBtn = document.getElementById('convertBtn')
const resultTask2 = document.getElementById('resultTask2');


const task2result = ()=>{
    
    convertBtn.addEventListener("click",()=>{
        const stringValue = task2Input.value
        const stringToArray = stringToArrayFunction(stringValue)
        const reverseArray = reverseArrayFunction(stringToArray)
        const arrayToString = ArrayToStringFunction(reverseArray)
        addResultToDisplay(arrayToString)
        clearInput()
    })


}

const stringToArrayFunction = (string)=>{
    return string.split('');


}
const ArrayToStringFunction = (array)=>{

    return array.join("")
}

const reverseArrayFunction = (array)=>{
    
    const reversedArray =[];
    for (let i = array.length-1; i >=0; i--) {
        reversedArray.push(array[i])
        
    }
        
        return reversedArray


}
const clearInput = ()=>{
    task2Input.value = ""
}

const addResultToDisplay = (string)=>{
    resultTask2.textContent = string

}



export default task2result