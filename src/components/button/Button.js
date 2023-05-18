import './button.scss'
const Button = ({ children, onClick }) => {
  return (<button onClick={ onClick } className="stop-watch-button">{ children }</button>)
};

export default Button;
