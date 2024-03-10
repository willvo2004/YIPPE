
import useSound from "use-sound"
import cat from "./assets/catimage.png"
import hat from "./assets/hat.webp"
import tada from "./assets/tada.mp3"
import "./HappyBirthday.css"

const HappyBirthday = () => {
    const [play] = useSound(tada);
    return (
        <>
        <img src={cat} onClick={play}/>
        <img src={hat} id="hat" />
        </>
    )
}

export default HappyBirthday
