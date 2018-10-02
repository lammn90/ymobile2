$(document).ready(function () {
    $('#menuToggle').on('click', function () {
        $(this).toggleClass('open');
        $('#menuBeToggled').stop().slideToggle(400);
    })
});