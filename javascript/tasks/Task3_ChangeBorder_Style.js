
const widthInput = document.getElementById("divWidth");
const heightInput = document.getElementById('divHeight');
const borderWidthInput = document.getElementById('borderWidth');
const errorSpan = document.getElementById('errorSpan');
const borderStyleSelect = document.getElementById('task3BorderStyle');
const borderColorSelect = document.getElementById('task3BorderColor');
const colorSelect  = document.getElementById('task3Color');
const backgroundColorSelect = document.getElementById("task3BackgroundColor")
const task3Btn = document.getElementById('task3Btn');
const box3 = document.getElementById('box3');
const resetStyle = document.getElementById('task3ResetStyle');


const resultTask3 = ()=>{

    task3Btn.addEventListener('click',()=>{
       const widthInputValue = getInputValidation(widthInput.value);
       const heightInputValue = getInputValidation(heightInput.value);
        const borderWidthInputValue = getInputValidation(borderWidthInput.value)
        const borderStyleSelectValue = borderStyleSelect.value;
        const borderColorSelectValue = borderColorSelect.value;
        const backgroundColorSelectValue = backgroundColorSelect.value;
        
        if(!widthInputValue  || !heightInputValue || !borderWidthInputValue){
            getErrorMessage("please required all input and fullfield",errorSpan);
            return
        }
        getChangeStyle(widthInputValue,heightInputValue,borderWidthInputValue,borderStyleSelectValue,borderColorSelectValue,backgroundColorSelectValue);

    })


resetStyle.addEventListener('click',resetStyleFunction)
}

const resetStyleFunction = ()=>{
    widthInput.value = "";
    heightInput.value = "";
    borderWidthInput.value = "";
    borderStyleSelect.value = "";
    borderColorSelect.value = "";
    backgroundColorSelect.value = "";
    box3.style.width = "150px";
    box3.style.height = "150px";
    box3.style.backgroundColor="azure";
    box3.style.border = " 1px dotted black"
}

const getChangeStyle=(width,height,borderWidth,borderStyle,borderColor,backgroundColor)=>{

    box3.style.width = `${width}px`
    box3.style.height = `${height}px`
    box3.style.borderWidth = `${borderWidth}px`
    box3.style.borderStyle = borderStyle;
    box3.style.borderColor = borderColor;
    box3.style.backgroundColor = backgroundColor;

}

 export const getInputValidation=(params)=>{

    let result = "";
    if(isNaN(params) || !params )  result = false;

    result = Number(params)
    return result


}
export const getErrorMessage = (message,errorSpan)=>{
    errorSpan.textContent = message
}

export default resultTask3