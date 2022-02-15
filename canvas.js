const canva = document.getElementById("ahorcado");
    const ctx = canva.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black"; 

    ctx.beginPath();
    ctx.moveTo(130, 20);
    ctx.lineTo(130, 150);
    ctx.moveTo(130, 20);
    ctx.lineTo(200, 20);
    ctx.moveTo(140, 150);
    ctx.lineTo(120, 150);
    ctx.stroke();