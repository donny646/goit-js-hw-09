const formData = {
  email: '',
  message: '',
};

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', setData);

function setData(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

const savedData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
}

form.addEventListener('submit', submitData);

function submitData(event) {
  event.preventDefault();

  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
  formData.email = '';
  formData.message = '';
}
