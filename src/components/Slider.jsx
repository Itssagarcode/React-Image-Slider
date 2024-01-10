import React, { useEffect, useState } from 'react'
import "./Slider.css"
import { FaChevronLeft,  FaChevronRight } from "react-icons/fa";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Slider = () => {
    const [slider, setSlider] = useState(0)
    const data = [img1, img2, img3]

    const HandlePlus = () => {
         setSlider(slider === data.length-1? 0 : slider+1)
    }

    const HandleMinus = () => {
         setSlider(slider === 0 ? data.length-1 : slider-1)      
    }

  useEffect(() => {
    const autoSlider =  setInterval(() =>{
        HandlePlus()
      },2000)
return () => clearInterval(autoSlider)
  },[slider])

  return (
    <div className='slider'>
        {
            data.map((img,i)=>(
            <div className={`slider-image ${slider === i? "block" : "hidden"}`} key={i}>
                <img src={img}  alt="" />

                <div className='btn'>
                    <button onClick={HandleMinus}><FaChevronLeft /></button>
                    <button onClick={HandlePlus}><FaChevronRight /></button>
                </div>
              </div> 
            ))
        }
    </div>
  )
}

export default Slider
