
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

// Draw the Olympic rings
drawCircle(150, 100, 50, "blue");
drawCircle(250, 100, 50, "black");
drawCircle(350, 100, 50, "red");
drawCircle(200, 150, 50, "yellow");
drawCircle(300, 150, 50, "green");
