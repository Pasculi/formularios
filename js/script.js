const form = document.querySelector('.form');
const input = form.querySelector('#form__input-name');
const inputError = form.querySelector(`.${input.id}-error`)
const button = form.querySelector('.form__submit-user');


function showInputError(input, inputError){
  input.classList.add('form__input-type-error')
    inputError.classList.add('form__input-error')
    console.log(input.validationMessage)
    inputError.textContent = input.validationMessage;
}
function hideInputError (input){
  input.classList.remove('form__input-type-error')
  inputError.classList.remove('form__input-error');
  inputError.textContent = "";

}
function isValid(){
  if(!input.validity.valid){
    showInputError(input, inputError)
    setSubmitButtonState(false)
  }else{
    hideInputError (input)
    setSubmitButtonState(true)
  }
}

function setSubmitButtonState(isFormValid){
  if(isFormValid){
    button.removeAttribute('disabled');
    button.classList.remove('form__button-disabled')
  }else{
    button.setAttribute('disabled', true);
    button.classList.add('form__button-disabled')
  }
}
form.addEventListener('submit', evt =>{
  evt.preventDefault();
  form.reset();
  setSubmitButtonState(false);
})

input.addEventListener('input', isValid )

