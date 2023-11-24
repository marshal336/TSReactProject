
import { button, popularCard } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"
import ButtonComponents from "./ButtonComponents"


const PopularComponents = () => {
    return (
        <section className={`${style.defaultContainer} mt-[200px]`}>
            <div className={`flex flex-col text-center gap-6 mb-[90px]`}>
                <h1 className={`${style.titleSize}`}>Most Popular Tools</h1>
                <p className={`${style.textSize} max-w-[427px] m-auto`}>Tools for the best Designers and Developers
                    most popularly used in the world
                </p>
            </div>
            <div className='grid grid-cols-3 gap-6 max-grid:grid-cols-2 max-mdl:grid-cols-1'>
                {popularCard.map(card => (
                    <div
                        key={card.id}
                        className={`p-8 hover:bg-hoverColor rounded-15 max-w-[392px] relative 
                        overflow-hidden hover:-translate-y-5 hover:ease-in duration-300 max-grid:m-auto`}>
                        <div className={`rounded-full rotate-90 absoluteCircle`} />
                        <div className={`flex gap-8 pb-8`}>
                            <img src={card.logo} alt="" />
                            <div>
                                <h2 className={`text-2xl font-medium text-threesColor`}>{card.title}</h2>
                                <p className={`text-fourColor leading-normal text-lg max-ssm:text-xs`}>{card.subTitle}</p>
                            </div>
                        </div>
                        <p className={`${style.textSize} pb-8`}>{card.text}</p>
                        <div className={`${style.flexBetween} max-ldm:flex-col max-ldm:gap-4`}>
                            <div className={`flex gap-6`}>
                                <img src={card.iconOne} alt="" />
                                <img src={card.iconTwo} alt="" />
                            </div>
                            <div className="max-ldm:w-full">
                                <ButtonComponents
                                    name={button[3]}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-[184px] m-auto pt-[100px]">
                <ButtonComponents
                    name={button[4]}
                />
            </div>
        </section>
    )
}

export default PopularComponents
