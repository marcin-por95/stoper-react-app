import Timer from "./components/timer/Timer";
import Button from "./components/button/Button";
import './app.scss';
import { useEffect, useState } from "react";


const App = () => {
  const [start, setStart] = useState(Date.now());
  const [now, setNow] = useState(start);
  const [number, setNumber] = useState(0);
  const counter = now - start;
  const [clockStarted, setClockStarted] = useState(false);
  useEffect(() => {
	let intervalID;
	if (clockStarted) {
	  intervalID = setInterval(() => setNow(Date.now()), 1);
	}
	return () => clearInterval(intervalID);
  }, [clockStarted]);
  const startClock = () => {
	setClockStarted(true);
	setStart(prevState => prevState + counter);
  }
  const stopClock = () => {
	if (!clockStarted) {
	  return;
	}
	setClockStarted(false);
  }
  const resetClock = () => {
	setClockStarted(false);
	const newDate = Date.now();
	setStart(newDate)
	setNow(newDate);
  }
  return (
	<div className="app-container">
	  <Timer time={ counter }/>
	  <div className="buttonWrapper">
		<Button onClick={ startClock }>
		  Start
		</Button>
		<Button onClick={ stopClock }>
		  Stop
		</Button>
		<Button onClick={ resetClock }>
		  Reset
		</Button>
	  </div>
	</div>
  );
};

export default App;
