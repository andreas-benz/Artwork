import React, {useEffect} from 'react'
import canvasSketch from "canvas-sketch";
import {Button} from "@material-ui/core";

function Art01 () {

  const settings = {
    dimensions: [ 600, 600 ]
  };
  
  const sketch = () => {
    return ({ context, width, height }) => {
      
      context.fillStyle = 'black';
      context.fillRect(0, 0, width, height);
      context.lineWidth = width * 0.01;
      context.strokeStyle = "white"
  
      const w = width * 0.1;
      const h = height * 0.1;
      const gap = width * 0.03;
      const ix = width * 0.17;
      const iy = height * 0.17;
  
      const off = width * 0.02;
  
      let x, y;
      
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;
      
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();
                 
          if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + off / 2, y + off / 2, w - off, h - off)
            context.stroke();          
          }
        }
      }
    };
  };

  const ref = React.useRef();
  
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
      <h1>The Square</h1>
      <canvas ref={ref} />
      <br></br>
      <Button variant="contained" style={{backgroundColor: "#B388FF",}} onClick={shuffle}>shuffle</Button>
    </div>
  )
}

export default Art01