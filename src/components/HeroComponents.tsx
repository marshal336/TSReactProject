import { hero, search } from "../assets/img/image";
import { button, heroIcons } from "../modules/dataStructure";
import { style } from "../modules/dataStyle";
import ButtonComponents from "./ButtonComponents";

const HeroComponents = () => {
  return (
    <section
      className={`${style.flexBetween} ${style.defaultContainer} 
        max-lg:flex-col max-lg:gap-[40px]`}
    >
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className={`flex flex-col`}
      >
        <h1 className={`${style.titleSize} pb-7`}>
          Awesome tools for <br /> Designer & Developer
          <span className="text-main">.</span>
        </h1>
        <p className={`${style.textSize} max-w-[487px] pb-16`}>
          Antool is a web collection of information on paid or free Design and
          Development tools
        </p>
        <form
          className={`${style.flexBetween} max-w-[497px]
                    bg-input py-2 px-4 rounded-15 gap-3 
                    max-ldm:flex-col max-mdl:py-5 max-ldm:gap-9 mb-[110px] max-ldm:mb-[50px]`}
          action=""
        >
          <div className="flex gap-3">
            <img src={search} alt="" className="" />
            <input
              className={`bg-transparent border-none outline-none max-mdl:text-2xl max-ssm:text-base`}
              placeholder="find more than 430+ tools..."
              type="text"
            />
          </div>
          <div className={`max-ldm:w-full`}>
            <ButtonComponents name={button[2]} />
          </div>
        </form>
        <div className="flex gap-2">
          {heroIcons.map((hero) => (
            <div key={hero.id}>
              <img src={hero.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[489px]">
        <img src={hero} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default HeroComponents;
