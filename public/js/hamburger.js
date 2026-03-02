//hamburger

var button = document.querySelector('.hamburger');
var navUL = document.querySelector('nav ul');

button.addEventListener("click", function() {
    navUL.classList.toggle(`nav-active`);
    button.classList.toggle(`nav-active`);
});

document.addEventListener("click", function(event) {
    var target = event.target;
    if (navUL.classList.contains(`nav-active`) && 
        button.classList.contains(`nav-active`) &&
        !navUL.contains(target) && !button.contains(target)){
            navUL.classList.remove(`nav-active`);
            button.classList.remove(`nav-active`);
        }
    else {
        return;
    }
});