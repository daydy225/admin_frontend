import './loginForm.css'

const LoginForm = ({ children, onSubmit }) => {
  return (
    <main className="loginContainer">
      <form
        className="loginContainer-left"
        onSubmit={onSubmit}
      >
        <h3>Connexion</h3>
        {children}
      </form>
      <div className="loginContainer-right">
        <span>SOCIETY</span>
      </div>
    </main>
  )
}

export default LoginForm
