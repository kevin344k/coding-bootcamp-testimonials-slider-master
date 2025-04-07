import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

import back_pattern_image from "../assets/images/pattern-bg.svg";
import patter_quotes from "../assets/images/pattern-quotes.svg";
import icon_prev from "../assets/images/icon-prev.svg";
import icon_next from "../assets/images/icon-next.svg";

export default function Carrousel({slider,handleClick}) {


 

  const  handleClickSlider=(dir)=> {
        console.log('click',dir);
       
        handleClick(dir)
        
  
    }






  return (

     <div className={` w-[320px] md:w-[700px] h-screen rounded-lg md:flex md:flex-row-reverse  md:justify-center md:items-center md:h-[calc(100vh-154px)] `}>
      
      <div className=" text-center  flex justify-center items-center relative p-3 md:p-0">
        <div className=" h-auto absolute p-7 ">
          <img
            className="mx-auto size-58 shadow-2xl shadow-[33px 29px 54px 29px hsl(240, 38%, 20%)] relative md:size-80"
            src={slider.avatar}
            alt=""
          />
          <div className="absolute left-[calc(50%-40px)] bottom-2 flex justify-around md:left-[60px] ">
            <motion.button
            whileOver={{scale:1.1}}
            whileTap={{scale:0.9}}
              type="button"
              disabled={slider.id===1}
              className="p-2.5 w-10 rounded-tl-full rounded-bl-full bg-neutral-50   active:bg-neutral-200 hover:cursor-pointer"
              onClick={()=>handleClickSlider('left')}
            >
              
              <img className="h-4 mx-auto" src={icon_prev} alt="" />
            </motion.button>
            <motion.button
              whileOver={{scale:1.1}}
              whileTap={{scale:0.9}}
              type="button"
              disabled={slider.id===4}
              className="p-2.5 w-10 rounded-tr-full rounded-br-full bg-neutral-50 active:bg-neutral-200 hover:cursor-pointer"
              onClick={()=>handleClickSlider('right')}
            >
              <img className="h-4 mx-auto" src={icon_next} alt="" />
            </motion.button>
          </div>
        </div>
        <img className="" src={back_pattern_image} alt="" />
      </div>
      <div className="text-center mt-15 relative p-3 md:w-2/3 md:h-[200px]">
      <div className="md:absolute md:top-0 md:w-[380px]">
               <p className="font-light text-lg md:text-left  ">{slider.text} </p>
      </div>
 
       <div className="md:flex md:justify-start md:items-center md:gap-2 mt-4 md:absolute md:bottom-0 md:w-[380px]">
       <p className="font-fm-inter font-bold text-fm-dark_blue mt-4 md:mt-0">
          {slider.name}
        </p>
        <p className="text-neutral-400 md:text-sm">{slider.job}</p>
       </div>
        <img
          src={patter_quotes}
          alt=""
          className="absolute -top-5 size-16 left-[calc(50%-32px)] md:left-[50px] md:-top-8"
        />
      </div>
     
    </div>

  );
}
