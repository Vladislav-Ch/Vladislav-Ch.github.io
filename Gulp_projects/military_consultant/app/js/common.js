$(function() {

    jQuery(document).ready(function($) {
        jQuery('.toggle-nav').click(function(e) {
            jQuery(this).toggleClass('active');
            jQuery('.menu ul').toggleClass('active');

            e.preventDefault();
        });

        // форма обратной связи
        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "../mail.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                $('form').trigger("reset");
            });
            return false;
        });

        //modal https://getbootstrap.com/docs/3.3/javascript/#modals-related-target
        $('#callme').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('service')
            var modal = $(this)
            modal.find('div.service2').text(recipient)
            modal.find('input[name=service]').val(recipient)
        });

        $('#phone').mask("8(999) 999-9999");
    });



});
