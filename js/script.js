const form = document.querySelector('.form');
const input = form.querySelector('.form__input');
const button = form.querySelector('.form__button-user');



/* const showInputError = () => {
  input.classList.add('form__input-type-error')
}
const hideInputError = () => {
  input.classList.remove('form__input-type-error')
} */

form.addEventListener('submit', evt => {
  evt.preventDefault();
  setSubmitButtonState(false);
})

function setSubmitButtonState (isFromValid){
  if(isFromValid){
    button.removeAttribute('disabled');
    button.classList.remove('form__button-disabled');
  } else {
    button.setAttribute('disabled', true);
    button.classList.add('form__button-disabled');
  }
}

form.addEventListener('input', evt => {
  const isValid = input.value.length > 2 && input.value.length < 40;
  setSubmitButtonState(isValid)
})