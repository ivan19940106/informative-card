$(document).ready(function(){
    $('.prev-page-btn').click(function(e){
        e.preventDefault();
        window.history.back();
    });
});