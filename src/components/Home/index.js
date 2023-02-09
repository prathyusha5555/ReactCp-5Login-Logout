import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  onLogout = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="app-container">
        <div className="text-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout onLogout={this.onLogout} />
          ) : (
            <Login onLogin={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
