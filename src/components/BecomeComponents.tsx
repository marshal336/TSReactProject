import { button } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"
import ButtonComponents from "./ButtonComponents"


const BecomeComponents = () => {
    return (
        <section className={`${style.defaultContainer} py-[250px] max-lg:py-[150px] max-md:py-[70px]`}>
            <div className="flex flex-col text-center mb-[100px]">
                <h1 className={`${style.titleSize} pb-6`}>Become a contributor?</h1>
                <p className={`${style.textSize} m-auto max-w-[427px]`}>Join us and get tips & tricks to become a great Designer and Developer</p>
            </div>
            <form
                className={`${style.flexBetween} max-w-[497px] m-auto
                    bg-input py-2 px-4 rounded-15 gap-3 
                    max-ldm:flex-col max-mdl:py-5 max-ldm:gap-9 mb-[110px] max-ldm:mb-[50px]`}
                action="">
                <div className="flex gap-3">
                    <input
                        className={`bg-transparent border-none outline-none max-mdl:text-2xl max-ssm:text-base`}
                        placeholder="Enter your email..."
                        type="text"
                    />
                </div>
                <div className={`max-ldm:w-full`}>
                    <ButtonComponents
                        name={button[6]}
                    />
                </div>
            </form>
        </section>
    )
}

export default BecomeComponents
