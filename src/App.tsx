import BecomeComponents from "./components/BecomeComponents"
import FooterComponents from "./components/FooterComponents"
import HeroComponents from "./components/HeroComponents"
import NavBarComponents from "./components/NavBarComponents"
import NewcomerComponents from "./components/NewcomerComponents"
import NumanCompomemts from "./components/NumanCompomemts"
import PopularComponents from "./components/PopularComponents"
import TrustedComponents from "./components/TrustedComponents"
import { style } from "./modules/dataStyle"

const App = () => {
  return (
    <div className={`${style.mainContainer}`}>
      <NavBarComponents />
      <HeroComponents />
      <PopularComponents/>
      <TrustedComponents/>
      <NewcomerComponents/>
      <NumanCompomemts/>
      <BecomeComponents/>
      <FooterComponents/>
    </div>
  )
}
export default App
