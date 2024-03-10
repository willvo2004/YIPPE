import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Yippes from './Yippes';
import HappyBirthday from './HappyBirthday';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [countdownFinished, setCountdownFinished] = useState(false); // New state variable

  const countDownDate = new Date("Mar 10, 2024 00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        // Countdown finished
        setCountdownFinished(true);
        clearInterval(interval); // Stop the interval when countdown finishes
      } else {
        const seconds = Math.floor(distance % (1000 * 60) / 1000);
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!countdownFinished ? (
        <>
          <p>{hours} : {minutes} : {seconds}</p>
          <Yippes />
        </>
      ) : (
        <HappyBirthday />
      )}
    </>
  );
}

export default App;