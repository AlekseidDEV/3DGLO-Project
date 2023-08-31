const inputValid = () => {
    const selectForm = document.querySelector('.calc-item.calc-type')
    const inputSquare = document.querySelector('.calc-item.calc-square')
    const inputCalc = document.querySelector('.calc-item.calc-count')
    const inputCalcDay = document.querySelector('.calc-item.calc-day')
    const nameInputHeader = document.getElementById('form1-name')
    const nameInputFooter = document.getElementById('form2-name')
    const userInputMessege = document.getElementById('form2-message')
    const inputEmailHeader = document.getElementById('form1-email')
    const inputEmailFooter = document.getElementById('form2-email')
    const inputPhoneHeader = document.getElementById('form1-phone')
    const inputPhoneFooter = document.getElementById('form2-phone')


    const textValid = (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]+/g, '');
    }

    const emailValid = (e) => {
        e.target.value = e.target.value.replace(/[^-a-zA-Z@_.!~*']/g, '')
    }

    const phoneNumberValid = (e) => {
        e.target.value = e.target.value.replace(/[^-0-9()]/g, '')
    }

    const cleanInput = (value) => {
        if(value === '1' || value === '2' || value === '3'){
            inputSquare.value = ''
            inputCalc.value = ''
            inputCalcDay.value = ''
        }
    }
    
    selectForm.addEventListener('change', (e) => {
        cleanInput(e.target.value)
    })

    inputSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/^\D/g , '')
    })
    inputCalc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/^\D/g , '')
    })
    inputCalcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/^\D/g , '')
    })

    nameInputHeader.addEventListener('input' , textValid)
    nameInputFooter.addEventListener('input', textValid)
    userInputMessege.addEventListener('input', textValid)
    inputEmailHeader.addEventListener('input', emailValid)
    inputEmailFooter.addEventListener('input', emailValid)
    inputPhoneHeader.addEventListener('input', phoneNumberValid)
    inputPhoneFooter.addEventListener('input', phoneNumberValid)
}

export default inputValid