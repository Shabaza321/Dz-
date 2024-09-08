// PHON BLOCK

const phoneInput = document.querySelector('#phone-input)
const phoneButton = document.querySelector('#phone-button)
const phoneSpan = document.querySelector('#phone-result)

    const regExp =/\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}-/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value) {
        phoneSpan.style.color = 'все правильна'
        phoneSpan.innerHTML = 'green'
    }else {
         phoneSpan.style.color = 'все правильна'
        phoneSpan.innerHTML = 'red'
    }

}