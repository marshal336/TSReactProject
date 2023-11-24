import { style } from "../modules/dataStyle"
import { buttonType } from "../modules/interface"

interface ButtonProps {
    name: buttonType
}
const ButtonComponents = ({ name }: ButtonProps) => {
    return (
        <a
            href=""
            className={`${style.flexCenter} ${style.textSize} py-3 px-7 
            ${name.backgound} rounded-lg ${name.hover} ${name.border} max-mdl:text-2xl ${name.textColor}`}>
            {name.label}
        </a>
    )
}

export default ButtonComponents
