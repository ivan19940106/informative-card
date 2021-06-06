$(document).ready(function(){
    var today = new Date();
    var thisYear = today.getFullYear();
    $('.copyright-year').text(thisYear);

    $('.prev-page-btn').click(function(e){
        e.preventDefault();
        window.history.back();
    });

    if(window.location.search == '?ss=on'){
        $('.save-screenshot').addClass('show');
    }

    $('.save-screenshot').click(function(e){
        e.preventDefault();
        screenshot();
    });

    function screenshot(){
        html2canvas(document.getElementById('card-screenshot')).then(function(canvas) {
            document.body.appendChild(canvas);
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'image.jpg';
            a.click();
        });
    }
});