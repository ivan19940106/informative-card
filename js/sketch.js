    var coverImage;

    function preload(){
        coverImage = loadImage('../images/nami.jpeg');
    }

    function setup() {
        var imageCanvas = createCanvas(parseInt($('.image-content').css('width')), parseInt($('.image-content').css('height')));
        imageCanvas.parent('canvas-for-p5');
        background('#EFE7DA');
        image(coverImage, 0, 0);
        noLoop();
    }

    function draw() {
        drawMosaic();
    }

    function mousePressed(){
        drawMosaic();
    }

    function drawMosaic(){
        noStroke();
        background('#EFE7DA');
        image(coverImage, 0, 0);
        var mouseXPositive = 0;
        if(mouseX<=5){
            mouseXPositive = 5;
        } else {
            mouseXPositive = mouseX;
        }
        let span = map(mouseXPositive, 0, width, 10, 100);
        for(var i=0;i<coverImage.width;i+=span){
            for(var j=0;j<coverImage.height;j+=span){
                let color = coverImage.get(i, j);
                fill(color);
                // rect(i, j, span);
                ellipse(i, j, span);
            }
        }
    }