import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link className="Navigation-logo" to={'/'}>
        {/* <img src={LOGO} alt="logo"/> */}
      </Link>
    </div>
  )
}

export default Navigation;