import useSound from "use-sound";
import yippee from "./assets/yippee-tbh.mp3";

const Yippes = () => {
    const [play] = useSound(yippee);
    return <button onClick={play}>Bored?</button>;
}



export default Yippes;
