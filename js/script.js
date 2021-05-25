// // ---------- localStorage & forms

// // import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.js-form'),
//   textarea: document.querySelector('.js-feedback'),
// };

// const STORAGE_KEY = 'feedback-msg';

// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);

// function onFormSubmit(e) {
//   e.preventDefault();

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY); // При отправке очищаем localStorage
// }

// function onTextareaInput(e) {
//   const value = e.target.value;
//   localStorage.setItem(STORAGE_KEY, value);
// }

// // При перезагрузке вставляем savedMsg в textarea
// function populateTextarea() {
//   const savedMsg = localStorage.getItem(STORAGE_KEY);
//   if (savedMsg) {
//     refs.textarea.value = savedMsg;
//   }
// }

// =====================================

// ---------- localStorage & forms

// import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.js-form'),
  textarea: document.querySelector('.js-feedback'),
  input: document.querySelector('.js-input'),
};

const STORAGE_KEY = 'feedback-msg';
const formData = {};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY); // При отправке очищаем localStorage
}

// При перезагрузке вставляем savedMsg в textarea
function populateTextarea() {
  // const savedMsg = localStorage.getItem(STORAGE_KEY);

  const storage = JSON.parse(localStorage.getItem('formData'));

  if (storage?.message) {
    refs.textarea.value = storage.message;
  }

  if (storage?.userName) {
    refs.input.value = storage.userName;
  }
}

function onFormInput(e) {
  console.log(`key: ${e.target.name} , value: ${e.target.value}`);
  formData[e.target.name] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}
