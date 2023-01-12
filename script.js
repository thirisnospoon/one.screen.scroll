const centerBlock = document.querySelector('.center-block');
let cardList = document.querySelectorAll('.card');

let startTouchY = 0;
let movementLength = 0;

centerBlock.addEventListener('touchstart', (event) => {
    event.preventDefault();
    if (event.target.className = 'card') {
        // alert('1')
        document.body.style.overflow = 'hidden';
        startTouchY = event.touches[0].clientY;
    }
    

});

centerBlock.addEventListener('touchmove', (event) => {
    event.preventDefault();
    let clientY = event.touches[0].clientY;
    movementLength = startTouchY - clientY;


});

centerBlock.addEventListener('touchend', (event) => {
    document.body.style.overflow = 'auto';
    if (movementLength > 0) {
        event.target.nextElementSibling.scrollIntoView({behavior: 'smooth'});
    }
    else {
        event.target.previousElementSibling.scrollIntoView({behavior: 'smooth'});
    }
});