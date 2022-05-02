const form = document.querySelector('#user-login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalNumberInput = document.querySelector('#pers_number');
const mobileNumberInput = document.querySelector('#mob_number');
const positionInput = document.querySelector('input[name="text"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  try {
         console.log(emailInput.value);
} catch (e) {
         console.log('catch error', e);
     }
const isEmailValid = validateEmail();
const isPasswordValid = validatePassword();
const isPersonalnumberValid = validatePersonalNumber();
const isMobilenumberValid = validateMobileNumber();
const isPosition = validatePosition();
   if(isEmailValid && isPasswordValid&&isMobilenumberValid&&isPersonalnumberValid&&isPosition){
       console.log('Call to backend api');
       const modal = document.querySelector('#user-login-form')
       modal.classList.remove('show')
       modal.reset()
     }
     });

function validateEmail(){
        if(!emailInput.value){
           emailInput.classList.add('has-error');
           emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
           return false;
        }
        if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
           emailInput.classList.add('has-error');
           emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
           return false;
        }
        emailInput.classList.remove('has-error');
        emailInput.parentNode.querySelector('.error-message').innerText = '';
         return true;
        }

function validatePassword(){
        if(!passwordInput.value){
            passwordInput.classList.add('has-error');
            passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
            return false;
        }
        if(passwordInput.value.length < 8){
           passwordInput.classList.add('has-error');
           passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
           return false;
        }
        passwordInput.classList.remove('has-error');
        passwordInput.parentNode.querySelector('.error-message').innerText = '';
        return true;
        }

function validatePersonalNumber(){
        if(!personalNumberInput.value){
            personalNumberInput.classList.add('has-error');
            personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter personal number';
            return false;
        }
        if(personalNumberInput.value.length !== 11){
            personalNumberInput.classList.add('has-error');
            personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Pesronal number must be 11 char';
           return false;
        }
        personalNumberInput.classList.remove('has-error');
        personalNumberInput.parentNode.querySelector('.error-message').innerText = '';
        return true;
        }

function validateMobileNumber(){
        if(! mobileNumberInput.value){
            mobileNumberInput.classList.add('has-error');
            mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
            return false;
            }
            if( mobileNumberInput.value.length !== 9){
                mobileNumberInput.classList.add('has-error');
                mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Mobile number must be 9 char(ex. 599256060)';
               return false;
            }
            mobileNumberInput.classList.remove('has-error');
            mobileNumberInput.parentNode.querySelector('.error-message').innerText = '';
            return true;
            }
            
function validatePosition(){
            if( positionInput.value.length >30){
                positionInput.classList.add('has-error');
                positionInput.parentNode.querySelector('.error-message').innerText = 'position charachters maximum must be 30';
                return false;
            }
            positionInput.classList.remove('has-error');
            positionInput.parentNode.querySelector('.error-message').innerText = '';
            return true;
            }
                    



const showModalBtn = document.querySelector('#showModalBtn')
showModalBtn.addEventListener('click', openModal)


function openModal(){
    const modal = document.querySelector('#user-login-form')
    modal.classList.add('show')
 
}








