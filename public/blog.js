const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("image").onchange = function(){
    const image = document.getElementById("image").files[0];
    const image_url = window.URL.createObjectURL(image);

    drawImageOnCanvas(image_url, canvas, ctx);
}

function drawImageOnCanvas(image_url, canvas, ctx){
    const image = new Image(canvas.width, canvas.height);
    image.onload = function(){
        ctx.drawImage(image, 0, 0 , canvas.width, canvas.height);
    }
    image.src = image_url;
}