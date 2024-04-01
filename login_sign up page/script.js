document.getElementById('signUp').addEventListener('click', function() {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('right-panel-active');
});
