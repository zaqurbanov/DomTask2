import { getErrorMessage, getInputValidation } from "./Task3_ChangeBorder_Style.js";

const inputWidth = document.getElementById('task4InputWidth');
const inputHeight = document.getElementById('task4InputHeight');
const inputBorderWidth = document.getElementById('task4InputBorderWidth');
const task4Btn = document.getElementById('task4Btn');
const errorSpan2 = document.getElementById('errorSpan2');
const box4 = document.getElementById('box4')

const resultTask4 = ()=>{

    task4Btn.addEventListener('click',()=>{

        const inputWidthValue = getInputValidation(inputWidth.value);
        const inputHeightValue = getInputValidation(inputHeight.value);
        const inputBorderWidthValue = getInputValidation(inputBorderWidth.value)

        if(!inputWidthValue  || !inputHeightValue || !inputBorderWidthValue){
            getErrorMessage("please required all input and fullfield",errorSpan2);
            return
        }

        getChangeStyle(inputWidthValue,inputHeightValue,inputBorderWidthValue)

    })


}

const getChangeStyle = (width,height,borderWidth)=>{
        width = 200+width
    box4.style.width =`${width}px`; 
    box4.style.height =`${height}px`;
    box4.style.borderWidth = `${borderWidth}px` 
}

export default resultTask4