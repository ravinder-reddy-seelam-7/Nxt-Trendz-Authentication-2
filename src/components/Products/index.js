// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = props => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(props)
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="products-container">
      <Header />
      <div className="products-sec-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-image"
        />
      </div>
    </div>
  )
}
export default Products
