import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isLoginValid, setIsLOginValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || /\d/.test(name)) {
      setIsNameValid(false);
      return;
    }

    if (login.length <= 5) {
      setIsLOginValid(false);
      return;
    }

    if (age < 18) {
      setIsAgeValid(false);
      return;
    }

    if (!/^[A_Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsNameValid(true);
    setIsLOginValid(true);
    setIsAgeValid(true);
    setIsEmailValid(true);
    console.log(name, login, age, email);
  };

  const changeName = (e) => {
    setName(e.target.value);
    console.log('48', name.trim() === '' || /\d/.test(name));
  };
  const changeLogin = (e) => {
    setLogin(e.target.value);
    console.log('52', login.length <= 5);
  };
  const changeAge = (e) => setAge(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);

  return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input onInput={changeName} className={isNameValid ? '' : 'invalid'} />
        {!isNameValid && <p>Enter correct name</p>}
        <label>Login</label>
        <input
          onInput={changeLogin}
          className={isLoginValid ? '' : 'invalid'}
        />
        {!isLoginValid && <p>Enter correct login</p>}
        <label>Age</label>
        <input
          type="number"
          onInput={changeAge}
          className={isAgeValid ? '' : 'invalid'}
        />
        {!isAgeValid && <p>Enter correct age</p>}
        <label>Email</label>
        <input
          onInput={changeEmail}
          className={isEmailValid ? '' : 'invalid'}
        />
        {!isEmailValid && <p>Enter correct email</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
