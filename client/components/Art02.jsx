import React, {useEffect} from 'react'
import canvasSketch from "canvas-sketch";
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
import {Button} from "@material-ui/core";

function Art02 () {

  const settings = {
    dimensions: [ 600, 600 ]
  };
  
  // const degToRad = (degrees) => {
  //   return degrees / 180 * Math.PI;
  // }
  
  // const randomRange = (min, max) => {
  //   return Math.random() * (max - min) + min;
  // }
  
  const sketch = () => {
    return ({ context, width, height }) => {
      context.fillStyle = 'white';
      context.fillRect(0, 0, width, height);
  
      context.fillStyle = "black"
  
      const cx = width * 0.5;
      const cy = height * 0.5;
  
      // Nice variation:
      // const cx = width * 0;
      // const cy = height * 0;
      // const radius = width * 0.8;
  
      const w = width * 0.01;
      const h = height * 0.1;
      let x, y;
  
      const num = 40;
      const radius = width * 0.3;
  
      for (let i = 0; i < num; i++) {
        const slice = math.degToRad(360 / num);
        const angle = slice * i;
  
        x = cx + radius * Math.sin(angle);
        y = cy + radius * Math.cos(angle);
  
        //rects
        context.save();
        context.translate(x, y);
        context.rotate(-angle);
        context.scale(random.range(0.1, 2), random.range(0.2, 0.5))
  
        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
        context.fill();
        context.restore();
  
        //arcs
        context.save();
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.lineWidth = random.range(5, 20);
        context.beginPath();
  
        context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
        context.stroke();
        context.restore();
      }
    };
  };

  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current
    });
  }, [ref]);

  const shuffle = () => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current
    });
  }
    
  return (
    <div className="grid-item">
      <h1>The Circle</h1>
      <canvas ref={ref} />
      <br></br>
      <Button variant="contained" style={{backgroundColor: "#B388FF",}} onClick={shuffle}>shuffle</Button>

    </div>
  )
}

export default Art02