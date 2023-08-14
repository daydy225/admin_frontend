import './input.css'

const Input = ({ placeholder, type, name }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}

export default Input
