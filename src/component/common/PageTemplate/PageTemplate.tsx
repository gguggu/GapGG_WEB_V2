import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'

interface Props {
  type: String,
  children: JSX.Element
}

const PageTemplate = ({ type, children }: Props) => {
  return (
      <div className="PageTemplate">
        <div className={ type === 'home' ? "PageTemplate-back" 
        : type === 'search' ? "PageTemplate-back search" 
        : "PageTemplate-back compare" }/>
        <div className="PageTemplate-nav">
          <Navigation/>
        </div>
        <div className="PageTemplate-body">
          {children}
        </div>
        <div className="PageTemplate-footer">
          <Footer/>
        </div>
    </div>
  )
}

export default PageTemplate
