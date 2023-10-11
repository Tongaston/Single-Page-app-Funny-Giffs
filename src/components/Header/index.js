import React from 'react'
import { useRoute, Link } from 'wouter'

import useUser from '../../hooks/useUser'

import './Header.css'

export default function Header() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButton = ({ isLogged }) => {
    return isLogged
      ? <Link to='#' onClick={handleClick}>
        Logout
      </Link>
      : <>
        <Link to='/login'>
          Sign In
        </Link>
        <Link to='/register'>
          Sign Up
        </Link>
      </>
  }

  const content = match
    ? null
    : renderLoginButton({ isLogged })


  return (
    <header className='gf-header'>
      {content}
    </header>
  )
}