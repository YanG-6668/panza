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

$('.ourCompany__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.ourCompany__tabs').find('.tab__item').removeClass('active-tab').hide();
    $('.ourCompany__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
});