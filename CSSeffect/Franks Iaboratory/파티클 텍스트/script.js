window.addEventListener('load', function(){
    const textInput = document.getElementById('textInput');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // const text = 'Hello';
    // const textX = canvas.width / 2;
    // const textY = canvas.height / 2;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0.3, 'red')
    gradient.addColorStop(0.5, 'fuchsia')
    gradient.addColorStop(0.7, 'purple')
    // ctx.fillStyle = 'yellow';
    ctx.fillStyle = gradient;
    ctx.strokeStyle = 'white';
    
    ctx.font = '80px Helvetica';
    ctx.textAlign = 'center'; // 글자 가로 배치
    ctx.textBaseline = 'middle'; // 글자 세로 배치
    // ctx.fillText(text, textX, textY);
    // ctx.strokeText(text, textX, textY)

    const maxTextWidth = canvas.width * 0.5;
    const lineHeight = 80;

    function wrapText(text){
        let linesArray = [];
        let lineCounter = 0;
        let line = '';
        let words = text.split(' ');
        for(let i = 0; i < words.length; i++){
            let testLine = line + words[i] + ' ';
            console.log(ctx.measureText(testLine).width);
            if(ctx.measureText(testLine).width > maxTextWidth){
                line = words[i] + ' ';
                lineCounter++;
            }else{
                line = testLine;
            }
            console.log(line);
            
            linesArray[lineCounter] = line;
            // ctx.fillText(testLine, canvas.width / 2, canvas.height / 2 + i * 70);
        }
        let textHeight = lineHeight * lineCounter;
        let textY = canvas.height / 2 - textHeight / 2;
        linesArray.forEach((line, index) => {
            ctx.fillText(line, canvas.width / 2, textY + (index * lineHeight));
        })
    }
    
    // wrapText('Hello, how are you')
    textInput.addEventListener('keyup', function(e){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wrapText(e.target.value);
    })
})