import './index.css'

const Login = props => {
  const {onLogin} = props
  const onClickLogin = () => {
    onLogin()
  }
  return (
    <button className="login-button" onClick={onClickLogin} type="button">
      Login
    </button>
  )
}
export default Login
