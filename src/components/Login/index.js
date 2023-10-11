import React, { useState } from "react";
import {useLocation} from "wouter"
import useUser from '../../hooks/useUser'
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import "./LoginStyles.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation()
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  return (
    <>
      {isLoginLoading && <Spinner />}
      {!isLoginLoading &&
        <form className="form-log" onSubmit={handleSubmit}>
          <input className="username-log"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input className="password-log"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="button-log">Login</button>
        </form>
      }
      {
        hasLoginError && <strong className="credentials-log">Credentials are invalid ⛔</strong>
      }
    </>
  );
}