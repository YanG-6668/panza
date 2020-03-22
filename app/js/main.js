const trigger = document.querySelector('.trigger');
const input = document.querySelector('.input');

trigger.addEventListener('click', () => {
    if (!input.classList.contains('input-open')) {
        input.classList.add('input-open');
    } else {
        input.classList.remove('input-open');
        trigger.innerHTML = '<i class="icon-search"></i>';
    }
});