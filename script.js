let btnContainer = document.querySelector('.btns') 
let overlay = document.getElementById('overlay')

let loginModal = document.getElementById('loginContainer')
let signUpModal = document.getElementById('signupContainer')

let loginBtn =document.getElementById('login')
let signUpBtn =document.getElementById('signup')



document.addEventListener('click', function (event) {


    // Check if the clicked element is not inside the login or signup modal
    if (!loginBtn.contains(event.target) && event.target !== loginBtn &&
        !signUpBtn.contains(event.target) && event.target !== signUpBtn) {
        loginModal.classList.remove('show');
        signUpModal.classList.remove('showSignup');
        overlay.classList.remove('overlay-show');
    }
});


btnContainer.addEventListener('click', function(event) {
    // Check if the clicked element is one of the buttons
    if (event.target.id === 'login' || event.target.id === 'signup') {
      // Common logic for both buttons
      overlay.classList.add('overlay-show');
  
      // Remove 'show' class from both modals
      loginModal.classList.remove('show');
      signUpModal.classList.remove('showSignup'); // Update the class name here
  
      // Add 'show' class to the specific modal based on the clicked button
      if (event.target.id === 'login') {
        loginModal.classList.add('show');
        document.getElementById('email').focus();
      } else if (event.target.id === 'signup') {
        signUpModal.classList.add('showSignup'); // Update the class name here
        document.getElementById('sgn-name').focus();
      }
    }
  });





