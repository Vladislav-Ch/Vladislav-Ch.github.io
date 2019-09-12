$(document).ready(function($){

    // Клик по ссылке открыть
    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    // Клик по ссылке "Закрыть".
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    // Клик по фону, но не по окну.
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });



    //запустить видео
    $(function () {
        $('#play-video').click(function () {
            $('iframe').removeClass('hide')
            $('.photosession-video').addClass('hide')
        })
    })

    //маски
    $(function(){
        //маска телефона
        $("#phone").mask("8(999) 999-9999");
        //маска номера карты
        $("#card-number").mask("9999 9999 9999 9999");
        //маска Срок действия
        $('#mask-card-date').mask('99/99');
        //CVV2/CVC2
        $('#mask-card-code').mask('999');
    });

    //показать все фото
    $(function () {
        $('.photo-item').slice(0, 8).show();
        $('.load-more-photo').on('click', function (e) {
            e.preventDefault();
            $('.photo-item:hidden').slice().slideDown();
        })
    })
    // //слайдер
    window.addEventListener("resize", function() {
        if (window.innerWidth <= 768) {
            $('.single-item').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }

    });

    checkParams();
    $('#date, #name, #surname, #phone, #email, #card-number, #mask-card-date, #mask-card-code, #cb').change(checkParams);

})

function checkParams() {
    let date = $('#date').val();
    let name = $('#name').val();
    let surname = $('#surname').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let card_number = $('#card-number').val();
    let mask_card_date = $('#mask-card-date').val();
    let mask_card_code = $('#mask-card-code').val();
    let checkbox = $('#cb');

    //если все поля заполненны - разблокируем кнопку
    if(date.length != 0 && name.length != 0 &&
        surname.length != 0 && phone.length != 0 &&
        email.length != 0 && card_number.length != 0 &&
        mask_card_date.length != 0 && mask_card_code.length != 0 && checkbox.prop('checked')) {
        $('#btn-ok').removeAttr('disabled');
    } else {
        $('#btn-ok').attr('disabled', 'disabled');
    }
}