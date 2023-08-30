const inputValid = () => {
    const selectForm = document.querySelector('.calc-item.calc-type')
    const inputBlock = document.querySelector('.calc-block')

    const validCalcInput = (value) => {
        
    }
    
    inputBlock.addEventListener('input', (e) => {
        if(e.target.nodeName === 'INPUT') validCalcInput(e.target.value)
    })
}

export default inputValid