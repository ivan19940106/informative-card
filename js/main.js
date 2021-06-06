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
        var vp = document.getElementById("viewportMeta").getAttribute("content");
        document.getElementById("viewportMeta").setAttribute("content", "width=375");
        
        html2canvas(document.getElementById('card-screenshot')).then(function(canvas){
            document.body.appendChild(canvas);
        }).then(function () {
            document.getElementById("viewportMeta").setAttribute("content", vp);
        });
    }
});