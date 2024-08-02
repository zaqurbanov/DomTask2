const accardions = document.querySelectorAll('.accardion');


const resultTask7 = ()=>{

        accardions.forEach((accardion)=>{

            accardion.addEventListener('click',getAccardion)
        })

};

const getAccardion = (e)=>{
    clearAccardion()
    const selectedAccardion = e.target.closest('.accardion')
    selectedAccardion.classList.toggle("active")

}

const clearAccardion = ()=>{
    accardions.forEach(accardion=>{
        
        accardion.classList.remove('active')
    })
}
export default resultTask7
