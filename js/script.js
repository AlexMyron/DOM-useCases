// ---------- localStorage & forms
const refs = {
  form: document.querySelector('.js-form'),
  textarea: document.querySelector('.js-feedback'),
};

const STORAGE_KEY = 'feedback-msg';

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY); // При отправке очищаем localStorage
}

function onTextareaInput(e) {
  const value = e.target.value;
  localStorage.setItem(STORAGE_KEY, value);
}

// При перезагрузке вставляем savedMsg в textarea
function populateTextarea() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  if (savedMsg) {
    refs.textarea.value = savedMsg;
  }
}
// console.log('sent');
