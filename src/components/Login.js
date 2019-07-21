import React from 'react';

const Login = () => {
  return (
    <div>
      <form action='/' method='POST'>
         <label htmlFor='email'>Email</label>
         <input type='email' name='email' />
         <label htmlFor='password'>Email</label>
         <input type='password' name='password' />
         <input type='submit' value='Login!'></input>
      </form>
    </div>
  );
};

export default Login;