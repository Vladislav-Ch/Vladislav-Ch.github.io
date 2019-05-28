jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.top-header-menu ul').toggleClass('active');

        e.preventDefault();
    });
});