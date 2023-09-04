import './style.css'
// import init, { p5SVG } from 'p5.js-svg'
import init, { p5SVG } from '../../../src'

init(window.p5)  // using p5 from <script> fix crash from importing p5, don't know why

const sketch = (p: p5SVG) => {

    p.setup = () => {
        p.createCanvas(100, 100, p.SVG)
    }

    p.draw = () => {
        p.background(0)
    }

}

new p5(sketch, document.body)
