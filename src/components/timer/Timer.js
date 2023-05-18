import './timer.scss';

const Timer = ({ time }) => {
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time / 10) % 100);
  
  return (
	<div className="timer">
	  {minutes.toString().padStart(2, "0")}:
	  {seconds.toString().padStart(2, "0")}:
	  {milliseconds.toString().padStart(2, "0")}
	</div>)
};

export default Timer;
