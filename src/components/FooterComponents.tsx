import { headFoot } from "../assets/img/image"
import { footerLinks } from "../modules/dataStructure"
import { style } from "../modules/dataStyle"


const FooterComponents = () => {
    return (
        <footer className={`${style.defaultContainer} py-[70px] ${style.flexBetween} !items-start flex-wrap gap-4 max-mdl:flex-col`}>
            <div className="flex flex-col">
                <div className={`flex gap-3 z-[2] pb-[27px]`}>
                    <img src={headFoot} alt='headerLogo' />
                    <h2 className={`text-[22px] font-semibold font-poppins text-threesColor`}>antools.</h2>
                </div>
                <h1 className={`${style.textSize} !text-threesColor pb-5`}>Copyright 2021. Antools</h1>
                <p className={`${style.textSize} max-w-[260px] !text-second`}>Antool is a web collection of information on paid or free Design and Development tools</p>
            </div>
            {footerLinks.map(link => (
                <div key={link.id} className="flex flex-col">
                    <h1 className={`text-[22px] font-semibold font-poppins text-threesColor pb-[20px]`}>{link.title}</h1>
                    <ul>
                        {link.links.map(link => (
                            <li className="leading-9">
                                <a 
                                className={`${style.textSize}`}
                                href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </footer>
    )
}

export default FooterComponents
