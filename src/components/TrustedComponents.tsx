import { trustedImages } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"


const TrustedComponents = () => {
    return (
        <section className={`${style.defaultContainer} mt-[200px] max-mdl:mt-[100px] p-[55px] bg-primary rounded-3xl relative overflow-hidden`}>
            <div className="absoluteCircleLeft" />
            <h1 className={`${style.titleSize} text-center !text-2xl`}>Trusted more than 150+ brand</h1>
            <div className={`${style.flexBetween} py-[56px] flex-wrap gap-3 max-mdl:justify-center max-mdl:py-[30px]`}>
                {trustedImages.map(image => (
                    <div key={image.id} className="">
                        <img src={image.icon} alt="" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrustedComponents
