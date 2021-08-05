import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typewriter from "typewriter-effect";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const lakeList = [
//   "poo",
//   "pee",
//   "pee"
// ];

// function App(){
//   const [status, setStatus] = useState("Open") 
//   return(
//     <div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus("Open")}>Open</button>
//       <button onClick={() => setStatus("Closed")}>Closed</button>
//     </div>
//   );
// }

// Implement For Loop here later for usability 
const description = "Hello";


function Typewriters(){
  return(
    <div>
      <Typewriter 
      onInit={(typewriter)=> {
        for (let i = 0; i < 100; i++){
        typewriter.typeString("Student")
        .start()
        .pauseFor(2000)
        .deleteAll()
        .typeString("Programmer")
        .start()
        .pauseFor(2000)
        .deleteAll()
        .typeString("Enthusiast")
        .pauseFor(2000)
        .deleteAll()
        }
        typewriter.typeString("Student")
      }
    }
      />
    </div>
  );
}

function Shadow() {
  return (
    <div>
    className='w-100 hover-shadow'
    alt=''
    style={{ maxWidth: '22rem' }}
    </div>
  );
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

ReactDOM.render(
  <Typewriters/>,
  document.getElementById('type-description')
);

// ReactDOM.render(
//   <Shadow/>,
//   document.getElementById('intro_image')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
