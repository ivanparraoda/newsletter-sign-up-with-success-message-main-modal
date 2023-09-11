const email = document.getElementById('email');
const btn = document.getElementById('sub');
const main = document.querySelector('.position-content');
const modal = document.querySelector('.modal-container');
const msg = document.querySelector('#error');
const dismiss = document.querySelector('#dismiss');
const mail = document.getElementById('mail-show');

let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!regex.test(email.value)) {
    msg.innerHTML = 'Enter valid email';
    email.style.border = '1px solid red';
    email.style.backgroundColor = 'rgb(255 229 227)';

    setTimeout(() => {
      msg.innerHTML = '';
      email.style.border = '1px solid white';
      email.style.backgroundColor = 'white';
    }, 5000);
  } else {
    main.classList.add('hide');
    modal.classList.remove('hide');
    mail.innerText = email.value;
  }
});

dismiss.addEventListener('click', () => {
  main.classList.remove('hide');
  modal.classList.add('hide');
});

function error() {}
