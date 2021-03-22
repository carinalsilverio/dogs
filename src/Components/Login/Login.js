import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordReset'
import LoginPasswordReset from './LoginPasswordLost'

const Login = () => {
  return <div>
          <Route>
            <Route path="/" element={<LoginForm/>} />
            <Route path="criar" element={<LoginCreate/>} />
            <Route path="perdeu" element={<LoginPasswordLost/>} />
            <Route path="resetar" element={<LoginPasswordReset/>} />
          </Route>

      </div>
};  

export default Login;
