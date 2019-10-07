function changeLogInButtonColor () {

const thisIsYourUsername = document.getElementsByClassName("username2")[0];
const thisIsYourPassword = document.getElementsByClassName("password2")[0];

thisIsYourUsername.addEventListener('keyup', function() {

        if (thisIsYourUsername.value.length > 0 && thisIsYourPassword.value.length > 0) {
            document.getElementsByClassName("loginButton")[0].style.opacity = '1';
        }   
        else if (thisIsYourUsername.value.length === 0 || thisIsYourPassword.value.length === 0) {
            document.getElementsByClassName("loginButton")[0].style.opacity = '0.3';
        }
    
});

thisIsYourPassword.addEventListener('keyup', function() {

        if (thisIsYourUsername.value.length > 0 && thisIsYourPassword.value.length > 0) {
            document.getElementsByClassName("loginButton")[0].style.opacity = '1';
        }   
        else if (thisIsYourUsername.value.length === 0 || thisIsYourPassword.value.length === 0) {
            document.getElementsByClassName("loginButton")[0].style.opacity = '0.3';
        }
    
});

}
changeLogInButtonColor();