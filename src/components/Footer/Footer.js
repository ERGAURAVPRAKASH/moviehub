import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div>Movie Hub</div>
      <div> 
        No &#169;, API used: <a href='http://www.omdbapi.com' target="_blank" rel="noreferrer">http://www.omdbapi.com</a> by ~Gaurav Prakash <i className="fa fa-envelope" aria-hidden="true"></i> : <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ergauravprakash@gmail.com" target="_blank" rel="noreferrer"><i>ergauravprakash@gmail.com</i></a>
      </div>
    </div>
  )
}

export default Footer