$(document).ready(function(){
    $('#hamburger').click(function(){
        $('ul').toggleClass('active');
        $('nav').toggleClass('active');
        $('#hamburger').toggleClass('iks');     
    })
})