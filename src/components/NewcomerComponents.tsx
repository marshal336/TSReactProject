import { button, newcomerCard } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"
import ButtonComponents from "./ButtonComponents"


const NewcomerComponents = () => {
  return (
    <section className={`${style.defaultContainer} mt-[200px] max-mdl:nt-[100px] 
    ${style.flexBetween} !items-start gap-20 max-mdl:flex-col`}>
        <div className="flex flex-col">
            <h1 className={`${style.titleSize} pb-8`}>Newcomer Tools</h1>
            <p className={`${style.textSize} pb-16 max-w-[427px]`}>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
            <div className="max-w-[200px]">
                <ButtonComponents
                    name={button[5]}
                />
            </div>
        </div>
            <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1 m-auto'>
                {newcomerCard.map(card => (
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
    </section>
  )
}

export default NewcomerComponents
