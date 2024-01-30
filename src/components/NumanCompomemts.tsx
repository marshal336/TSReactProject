import React from "react";
import { human } from "../assets/img/image"
import { style } from "../modules/dataStyle"


const NumanCompomemts = () => {

    return (
        <section className={`${style.defaultContainer} ${style.flexBetween} max-sm:flex-col-reverse`}>
            <div className="relative">
                <div className="" />
                <div className="absolute bottom-[30px] right-0 blurNumanName py-[10px] px-[22px]">
                    <h2 className="text-white text-2xl font-poppins">Ronald Richards</h2>
                    <p className={`${style.textSize}`}>Product Manager</p>
                </div>
                <img src={human} alt="" />
            </div>
            <div data-aos="fade-down" className="relative">
                <p className='absolute -left-[50px] -top-[130px] rotate-[19deg] quots-gradient text-[250px]'>“</p>
                <p className={`${style.textSize} max-w-[393px]`}>
                    Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                </p>
            </div>
        </section>
    )
}

export default NumanCompomemts
