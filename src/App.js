import React from 'react';
import Canvas from './Canvas/Canvas';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Mail from './Mail';
import './App.css';

function App() {
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  return (
    <> 
        <main>
            <div class="titleAndNav">
                <h1>Diana Baghirova </h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </div>
            <Canvas draw={draw} />
        </main>
        <About />
        <Skills />
        <Projects />
        <Mail />
    </>
  )
}

export default App


// import React from 'react'
// import Canvas from './Canvas/Canvas'

// function App() {
  
//   const draw = (ctx, frameCount) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.fillStyle = '#000000'
//     ctx.beginPath()
//     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     ctx.fill()
//   }
  
//   return <Canvas draw={draw} />
// }

// export default App