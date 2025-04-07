import "./App.css";
import avatar_tanya from "./assets/images/image-tanya.jpg";
import avatar_jhon from "./assets/images/image-john.jpg";
import Carrousel from "./components/Carrousel";
import pattern_curve from "./assets/images/pattern-curve.svg";
import {motion} from "framer-motion"; // eslint-disable-line no-unused-vars
import {   useState } from "react";
function App() {
  const [x,setX]=useState(0)
  const [index,setIndex]=useState(0)


  const sliders = [
    {
      id:1,
      name: "Tanya Sinclair",
      job: "UX Engineer",
      text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ",
      avatar: avatar_tanya,
    },
    {
      id:2,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      avatar: avatar_jhon,
    },
    {
      id:3,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      avatar: avatar_tanya,
    },
    {
      id:4,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      avatar: avatar_jhon,
    },
  ];


const containerAll=window.innerWidth<=768?320*sliders.length:700*sliders.length





const handleClick=(dir)=> {


  const size=window.innerWidth<=768?320:700


  if (dir==='right') {
    if (index<sliders.length-1) {
      setX(x-size)
      
    }else{
      setX(0)
      setIndex(0)
    }
    
  }

  if (dir==='left') {
    if (index<sliders.length-1) {
      setX(x+size)
      setIndex(index-1)
    }else{
      setX(0)
      setIndex(0)
    }
    
  }
 
 

  };


  return (

    <motion.div 
    initial={{opacity:0,scale:0.8}}
    transition={{duration:0.5}}
    animate={{opacity:1,scale:1}}
    className="w-screen  relative ">
          <div className={`w-[320px] md:w-[700px]   m-auto h-screen  relative overflow-hidden`}>
     <motion.div animate={{x}}   transition={{ type: "spring" }} className={`absolute  overflow-x-hidden w-[${containerAll}px]`}>
     <div className={`   flex  `} >
        {sliders.map((slider, index) => (
          <Carrousel key={index} slider={slider}  handleClick={handleClick}></Carrousel>
        ))}
      </div>
     </motion.div>
    
    </div>
    <img className="absolute left-0 bottom-0" src={pattern_curve} alt="" />
    </motion.div>
  );
}
export default App;
