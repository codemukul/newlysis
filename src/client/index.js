import { sendSample, getAnalysis } from './js/requests';
import { handleSubmit, handleChange, typeValidation, updateUI, displayWarn } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// console.log('CHANGE!!');

const btn = document.getElementById('btn');
const input_data = document.getElementById('input');
const input_form = document.getElementById('form');

input_data.addEventListener('click', handleChange);

input_form.addEventListener('submit', handleSubmit);

export { sendSample, getAnalysis };
export { handleSubmit, handleChange, typeValidation, updateUI, displayWarn };