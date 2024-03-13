const input_text_returned = document.getElementById('input-text');


const updateUI = (data) => {
  input_text_returned.textContent = data;
};

const p = document.getElementById('warn');
const displayWarn = () => {
  p.textContent = 'Plz enter a valid URL or text';
};

const typeValidation = (value) => {
  const info = {};
  if (value.startsWith('http')) {
    info.type = 'url';
    info.text = value;
  } else {
    info.type = 'text';
    info.text = value;
  }
  return info;
};

const handleChange = () => {
  p.textContent = '';
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const inputValue = document.getElementById('input').value;
  const info = typeValidation(inputValue);

  Client.sendSample(info, 'http://localhost:8081/send_sample');

  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("waiting..."), 200)
  });
  await promise;

  Client.getAnalysis();
};

export { handleSubmit, handleChange, typeValidation, updateUI, displayWarn };