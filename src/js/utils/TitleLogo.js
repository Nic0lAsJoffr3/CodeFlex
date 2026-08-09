const Canvas = document?.getElementById("TitleLogo");
if (Canvas != null) {
    Canvas.width = 420;
    Canvas.height = 150;
    const x = Canvas.width;
    const y = Canvas.height;
    const ctx = Canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const root = getComputedStyle(document.documentElement);

    const Speed = 3
    const CodeBG = {
        x: -420
    }
    var yTextFlex = 0;


    const Green = root.getPropertyValue("--GreenColor-main").trim();
    const Orange = root.getPropertyValue("--OrangeColor-main").trim();

    setInterval(() => {
        if (CodeBG.x < -210) {
            CodeBG.x += Speed;
        }

        var textCode = (CodeBG.x > -380 ? "C" : "");
        textCode += (CodeBG.x > -330 ? "O" : "");
        textCode += (CodeBG.x > -280 ? "D" : "");
        textCode += (CodeBG.x > -230 ? "E" : "");

        var textFlex = (CodeBG.x > -380 ? "F" : "");
        textFlex += (CodeBG.x > -330 ? "L" : "");
        textFlex += (CodeBG.x > -280 ? "E" : "");
        textFlex += (CodeBG.x > -230 ? "X" : "");

        var xTextFlex = (CodeBG.x > -330 ? 17 : 0);
        xTextFlex += (CodeBG.x > -280 ? 25 : 0);



        if (CodeBG.x > -250) {
            yTextFlex += 5;
        }

        ctx.clearRect(0, 0, x, y);

        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.roundRect(CodeBG.x, y / 6, x, y * 2 / 3, 20)
        ctx.fill();

        ctx.font = "50px 'Press Start 2P'";

        ctx.fillStyle = Green;
        ctx.textAlign = "left";
        ctx.fillText(textCode, 5, 26.5 + y / 6 + (y * 2 / 3) / 2);

        ctx.fillStyle = Orange;
        ctx.textAlign = "center";
        ctx.fillText(textFlex, 320, 26.5 + y / 6 + (y * 2 / 3) / 2);

        ctx.fillText("<", 270 - xTextFlex, 26.5 + y / 6 + (y * 2 / 3) / 2 + yTextFlex);
        ctx.fillText(">", 370 + xTextFlex, 26.5 + y / 6 + (y * 2 / 3) / 2 - yTextFlex);


    }, 10);
}
else {
    console.error("Canvas Não Encontrado!");
}