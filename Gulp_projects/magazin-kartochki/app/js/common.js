$(document).ready(function(){
    $(".minus-btn").click(function(){
        var $input = $(this).parent().parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count + "шт");
        $input.change();
        return false;
    });

    $('.plus-btn').click(function () {
        var $input = $(this).parent().parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});