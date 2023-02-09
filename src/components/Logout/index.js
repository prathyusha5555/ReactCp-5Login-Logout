import './index.css'

const Logout = props => {
  const {onLogout} = props
  const onClickLogout = () => {
    onLogout()
  }
  return (
    <button className="logout-button" onClick={onClickLogout} type="button">
      Logout
    </button>
  )
}
export default Logout
