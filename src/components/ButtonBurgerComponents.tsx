import { useState } from "react"
import { style } from "../modules/dataStyle"


const ButtonBurgerComponents = () => {
    const [open, setOpen] = useState(false)

    return (
        <div
            onClick={() => setOpen(!open)}
            className={`${style.flexCenter} w-9 h-4 relative z-[2]`}>
            <span className={`absolute top-0 h-[2px] w-7 bg-white 
                ${open
                    ? '-rotate-45 top-[7px] ease-in duration-300'
                    : 'ease-in duration-300'
                }`}></span>
            <span className={`absolute h-[2px] w-7 bg-white
                ${open
                    ? 'scale-0'
                    : ''
                }`}></span>
            <span className={`absolute bottom-0 h-[2px] w-7 bg-white  
                ${open
                    ? 'rotate-45 bottom-[7px] ease-in duration-300'
                    : 'ease-in duration-300'
                }`}></span>
        </div>
    )
}

export default ButtonBurgerComponents
