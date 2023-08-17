// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = props => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(props)
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="cart-container">
      <Header />
      <div className="cart-sec-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </div>
  )
}
export default Cart
