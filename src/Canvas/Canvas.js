import React, { useRef, useEffect } from 'react';
import '../App.css';

const Canvas = props => {
  
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);
  
  useEffect(() => {
    
    const cvs = document.querySelector('canvas');
const ctx = cvs.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined
}

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

window.addEventListener('resize', () => {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
});

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

const maxRadius = 50;
const colorArray = [
    '#ffaa33',
    '#99ffaaa'
];


class Circle {
    constructor (x, y, r, dx, dy){
        this.x = x;
        this.y = y;
        this.c = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.minRadius = r;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    draw (){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle="rgba(80, 65, 150, 0.5)";
        ctx.strokeStyle = "rgba(133, 132, 164, 0.5)";
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
    }

    movement (){
    
        if( mouse.x - this.x < 75 && mouse.x - this.x > -75 && mouse.y - this.y < 75 && mouse.y - this.y > -75) {
            this.dx = -3*this.dx;
            this.dy = -3*this.dy;
        } else {
            this.x += this.dx;
            this.y += this.dy;
        }
 
        if (!(this.x > width - this.radius || this.x < 0  + this.radius || this.y > height - this.radius || this.y < 0 + this.radius)){
            this.draw();
        }
    }
}

let bubbles = [];

for (let i = 0; i < 1000; i++){
    let radius = Math.random() * 10 + 3;
    let x = Math.random() * (width - radius * 2) + radius;
    let y = Math.random() * (height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3 ; 
    let dy = (Math.random() - 0.5) * 3;
    bubbles.push(new Circle(x , y , radius , dx , dy));
}

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "rgba(26, 20, 67, 1)";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    for (let i=0; i<bubbles.length; i++){
        bubbles[i].movement();
    }
}

animate();
    
    
  }, [draw])
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas;