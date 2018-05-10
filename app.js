
//Grab Elements
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = screen.width;
canvas.height = screen.height;

//Event Listeners
addEventListener('resize', () => {
    canvas.width = screen.width;
    canvas.height = screen.height;
    draw();
})

//DRAW
function draw() {
    
    //Fill Circles
    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 200, 0, Math.PI * 2, false)
    c.fillStyle = 'rgba(227, 72, 42, 1)';
    c.shadowColor = 'black';
    c.shadowBlur = 20;
    c.lineWidth = 1;
    c.fill();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 140, 0, Math.PI * 2, false)
    c.fillStyle = 'rgba(237, 96, 50, 1)';
    c.shadowBlur = 0;
    c.fill();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 60, 0, Math.PI * 2, false)
    c.fillStyle = 'rgba(235, 83, 46, 1)';
    c.fill();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 45, 0, Math.PI * 2, false)
    c.fillStyle = 'rgba(37, 19, 12, 1)';
    c.fill();
    c.closePath();

    c.beginPath()
    c.arc((innerWidth / 2) + 29, (innerHeight / 2) - 48, 20, 0, Math.PI * 2, false)
    c.fillStyle = 'rgba(255, 255, 255, 0.4)';
    c.fill();
    c.closePath();

    //Inner Stroke Rings
    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 120, 0, Math.PI * 2, false)
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 130, 0, Math.PI * 2, false)
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 175, 0, Math.PI * 2, false)
    c.strokeStyle = 'rgba(198, 43, 24, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 180, 0, Math.PI * 2, false)
    c.strokeStyle = 'rgba(198, 43, 24, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 185, 0, Math.PI * 2, false)
    c.strokeStyle = 'rgba(198, 43, 24, 1)';
    c.stroke();
    c.closePath();

    //Outer Stroke Rings
    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 265, 0.1, Math.PI * 2, false)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.lineWidth = 3;
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 275, 0.2, Math.PI * 2, false)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 315, 1.99 * Math.PI, 1.6 * Math.PI, false)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 325, 1.99 * Math.PI, 1.6 * Math.PI, false)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 335, Math.PI * 1.8, 0.2, true)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 435, Math.PI * 1.5, 0.2, true)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.lineWidth = 3;
    c.stroke();
    c.closePath();

    c.beginPath()
    c.arc(innerWidth / 2, innerHeight / 2, 375, Math.PI * 1.7, 0.2, true)
    c.strokeStyle = 'rgba(50, 51, 46, 1)';
    c.lineWidth = 3;
    c.stroke();
    c.closePath();

    //Curves
    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 40, innerHeight / 2 + 70) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 50, innerHeight / 2 + 50, innerWidth / 2 + 90, innerHeight / 2 + 30, innerWidth / 2 + 133, innerHeight / 2 + 113);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 80, innerHeight / 2 + 40) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 90, innerHeight / 2 + 80, innerWidth / 2 + 70, innerHeight / 2 + 50, innerWidth / 2 + 107, innerHeight / 2 + 137);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 40, innerHeight / 2 + 70) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 50, innerHeight / 2 + 50, innerWidth / 2 - 90, innerHeight / 2 + 130, innerWidth / 2 - 133, innerHeight / 2 + 113);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 80, innerHeight / 2 + 10) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 90, innerHeight / 2 + 80, innerWidth / 2 - 70, innerHeight / 2 + 50, innerWidth / 2 - 107, innerHeight / 2 + 137);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 40, innerHeight / 2 - 100) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 80, innerHeight / 2 - 50, innerWidth / 2 + 90, innerHeight / 2 - 100, innerWidth / 2 + 133, innerHeight / 2 - 113);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 120, innerHeight / 2 - 50) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 100, innerHeight / 2 - 80, innerWidth / 2 + 70, innerHeight / 2 - 50, innerWidth / 2 + 107, innerHeight / 2 - 137);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 120, innerHeight / 2 - 50) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 100, innerHeight / 2 - 80, innerWidth / 2 - 70, innerHeight / 2 - 50, innerWidth / 2 - 107, innerHeight / 2 - 137);
    c.strokeStyle = 'rgba(206, 53, 40, 1)';
    c.stroke();

    //Wavy Lines

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 200, innerHeight / 2 - 80, innerWidth / 2 - 120, innerHeight / 2 - 250, innerWidth / 2 - 142, innerHeight / 2 - 142);
    c.strokeStyle = 'white';
    c.lineWidth = 2;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 200, innerHeight / 2 - 80, innerWidth / 2 - 250, innerHeight / 2 - 120, innerWidth / 2 - 142, innerHeight / 2 - 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 1000, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 200, innerHeight / 2 - 80, innerWidth / 2 + 550, innerHeight / 2 - 320, innerWidth / 2 + 142, innerHeight / 2 - 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 500, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 100, innerHeight / 2 - 180, innerWidth / 2 + 350, innerHeight / 2 - 520, innerWidth / 2 + 142, innerHeight / 2 - 142);
    c.strokeStyle = 'white';
    c.lineWidth = 2;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 1000, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 200, innerHeight / 2 + 80, innerWidth / 2 + 550, innerHeight / 2 + 320, innerWidth / 2 + 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 400, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 500, innerHeight / 2 + 80, innerWidth / 2 + 350, innerHeight / 2 + 520, innerWidth / 2 + 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 2;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 200, innerHeight / 2 + 80, innerWidth / 2 - 550, innerHeight / 2 + 320, innerWidth / 2 - 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 400, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 10, innerHeight / 2 + 40, innerWidth / 2 - 350, innerHeight / 2 + 520, innerWidth / 2 - 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 2;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 400, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 140, innerHeight / 2 - 50, innerWidth / 2 - 350, innerHeight / 2 + 520, innerWidth / 2 - 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 140, innerHeight / 2 - 50, innerWidth / 2 - 350, innerHeight / 2 + 520, innerWidth / 2 - 142, innerHeight / 2 + 142);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 140, innerHeight / 2 - 50, innerWidth / 2 - 250, innerHeight / 2 + 320, innerWidth / 2, innerHeight / 2 + 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 140, innerHeight / 2 - 50, innerWidth / 2 + 150, innerHeight / 2 + 520, innerWidth / 2, innerHeight / 2 + 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 + 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 140, innerHeight / 2 + 50, innerWidth / 2 + 250, innerHeight / 2 + 250, innerWidth / 2, innerHeight / 2 + 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 40, innerHeight / 2 - 50, innerWidth / 2 - 250, innerHeight / 2 - 320, innerWidth / 2, innerHeight / 2 - 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 - 140, innerHeight / 2 - 50, innerWidth / 2 - 150, innerHeight / 2 - 520, innerWidth / 2, innerHeight / 2 - 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2, innerHeight / 2 - 1000) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 40, innerHeight / 2 - 50, innerWidth / 2 + 50, innerHeight / 2 - 250, innerWidth / 2, innerHeight / 2 - 202);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 40, innerHeight / 2 - 50, innerWidth / 2 + 250, innerHeight / 2 - 120, innerWidth / 2 + 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 140, innerHeight / 2 - 50, innerWidth / 2 + 450, innerHeight / 2 + 320, innerWidth / 2 + 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 + 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 40, innerHeight / 2 - 50, innerWidth / 2 + 750, innerHeight / 2 + 250, innerWidth / 2 + 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 40, innerHeight / 2 + 50, innerWidth / 2 - 350, innerHeight / 2 - 120, innerWidth / 2 - 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 140, innerHeight / 2 + 50, innerWidth / 2 - 450, innerHeight / 2 - 120, innerWidth / 2 - 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    //moveTo = End Point
    c.moveTo(innerWidth / 2 - 1000, innerHeight / 2) ;
    //Starting point x, starting point y, etc...
    c.bezierCurveTo(innerWidth / 2 + 40, innerHeight / 2 + 50, innerWidth / 2 - 350, innerHeight / 2 - 150, innerWidth / 2 - 202, innerHeight / 2);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();


}

draw();