// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="container1">
    <div className="left-container">
      <img
        alt="wave"
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="para">Wave</h1>
    </div>
    <div>
      <Link className="para1" to="/">
        Home
      </Link>
      <Link className="para1" to="/about">
        About
      </Link>
      <Link className="para1" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
