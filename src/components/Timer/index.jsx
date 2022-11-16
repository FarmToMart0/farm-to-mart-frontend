import React,{useState,useEffect} from 'react';
const calculateTimeLeft = (date) => {
    let year = new Date().getFullYear();
    let difference = +new Date(date) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
 function Timer({date}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft(date));
  }, 1000);

  return () => clearTimeout(timer);
});
const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});
    



    return (
        <div>
             {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}

export default Timer;