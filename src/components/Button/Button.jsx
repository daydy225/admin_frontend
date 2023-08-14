import './button.css'

const Button = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  )
}

export default Button
