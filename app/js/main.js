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
$(function() {

    $('.ourCompany__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.ourCompany__tabs').find('.tab__item').removeClass('active-tab').hide();
        $('.ourCompany__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.service__tabs .second-tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.service__tabs').find('.second-tab__item').removeClass('active-tab').hide();
        $('.service__tabs .second-tabs').find('.second-tab').removeClass('second-active-t');
        $(this).addClass('second-active-t');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.peopleSay__items').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 1500,
        fade: true
    });

    var mixer = mixitup('.work__inner-box');
});