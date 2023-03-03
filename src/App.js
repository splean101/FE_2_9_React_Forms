import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (e) => setName(e.target.value);
  const changeLogin = (e) => setLogin(e.target.value);
  const changeAge = (e) => setAge(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);

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
      setLogin(false);
      return;
    }

    if (age < 18) {
      setAge(false);
      return;
    }

    if (!/^[A_Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(name)) {
      setIsEmailValid(false);
      return;
    }

    setIsNameValid(true);
    setIsLOginValid(true);
    setIsAgeValid(true);
    setIsEmailValid(true);
    console.log(name, login, age, email);
  };

  return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input onInput={changeName} className={isNameValid ? '' : 'invalid'} />
        <label>Login</label>
        <input onInput={changeLogin} className={isLoginValid ? '' : 'invalid'}/>
        <label>Age</label>
        <input type="number" onInput={changeAge} className={isAgeValid ? '' : 'invalid'}/>
        <label>Email</label>
        <input onInput={changeEmail} className={isEmailValid ? '' : 'invalid'}/>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
