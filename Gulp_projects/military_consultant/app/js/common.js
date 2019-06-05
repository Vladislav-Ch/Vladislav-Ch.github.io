$(function() {

    jQuery(document).ready(function() {
        jQuery('.toggle-nav').click(function(e) {
            jQuery(this).toggleClass('active');
            jQuery('.menu ul').toggleClass('active');

            e.preventDefault();
        });

        // форма обратной связи
        $("#form-send").submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "../mail.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                $("#form-send").trigger("reset");
            });
            return false;
        });

    });



});
