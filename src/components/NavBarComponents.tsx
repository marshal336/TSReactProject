import { headFoot } from "../assets/img/image"
import { headerItems } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"
import ButtonComponents from "./ButtonComponents"
import { button } from '../modules/dataStructure'
import ButtonBurgerComponents from "./ButtonBurgerComponents"
import { useState } from "react"

const NavBarComponents = () => {
  const [close, setClose] = useState(false)

  return (
    <nav className={`${style.defaultContainer} ${style.flexBetween} pt-[38px] pb-[116px]`}>
      <div className={`${style.flexCenter} gap-3 z-[2]`}>
        <img src={headFoot} alt='headerLogo' />
        <h2 className={`text-[22px] font-semibold font-poppins text-threesColor`}>antools.</h2>
      </div>
      <ul className={`${style.flexCenter} gap-10 ${style.textSize} max-mdl:hidden`}>
        {headerItems.map(item => (
          <li key={item.id}>
            <a
              className={`hover:text-white`}
              href='/'>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className={`${style.flexCenter} gap-2 max-mdl:hidden`}>
        <div>
          <ButtonComponents
            name={button[0]}
          />
        </div>
        <div>
          <ButtonComponents
            name={button[1]}
          />
        </div>
      </div>
      <div className={`mdl:hidden max-mdl:absolute w-full 
      ${!close
      ? '-top-[1000%] ease-in duration-300'
      : 'top-0 ease-in duration-300'
      }
      min-h-screen bg-main left-0 p-10 pt-[90px]`}>
        <div className={`max-mdl:block hidden`}>
          <ul className={`${style.flexCenter} flex-col gap-10 ${style.textSize}`}>
            {headerItems.map(item => (
              <li key={item.id}>
                <a
                  className={`hover:text-white max-mdl:text-2xl`}
                  href='/'>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`max-mdl:flex flex-col gap-6 hidden pt-7 `}>
          <div>
            <ButtonComponents
              name={button[0]}
            />
          </div>
          <div>
            <ButtonComponents
              name={button[1]}
            />
          </div>
        </div>
      </div>
      <div 
      className={`max-mdl:block hidden`}
      onClick={() => setClose(!close)}>
        <ButtonBurgerComponents />
      </div>
    </nav>
  )
}

export default NavBarComponents
