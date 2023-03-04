import React, { useState } from 'react';

//--------------------2----------------------
/*function App() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [wasNameTouched, setWasNameTouched] = useState(false);
  const [wasLoginTouched, setWasLoginTouched] = useState(false);
  const [wasAgeTouched, setWasAgeTouched] = useState(false);
  const [wasEmailTouched, setWasEmailTouched] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setWasNameTouched(true);
    setWasLoginTouched(true);
    setWasAgeTouched(true);
    setWasEmailTouched(true);

    if (name.trim() === '' || /\d/.test(name)) {
      setIsNameValid(false);
      return;
    }

    if (login.length <= 5) {
      setIsLoginValid(false);
      return;
    }

    if (age < 18) {
      setIsAgeValid(false);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsNameValid(true);
    setIsLoginValid(true);
    setIsAgeValid(true);
    setIsEmailValid(true);
    console.log(name, login, age, email);
  };

  const changeName = (e) => {
    setName(e.target.value);
    if (wasNameTouched) {
      e.target.value == '' ? setIsNameValid(false) : setIsNameValid(true);
    }
  };
  const changeLogin = (e) => {
    setLogin(e.target.value);
    if (wasLoginTouched) {
      e.target.value == '' ? setIsLoginValid(false) : setIsLoginValid(true);
    }
  };
  const changeAge = (e) => {
    setAge(e.target.value);
    if (wasAgeTouched) {
      e.target.value == '' ? setIsAgeValid(false) : setIsAgeValid(true);
    }
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    if (wasEmailTouched) {
      e.target.value == '' ? setIsEmailValid(false) : setIsEmailValid(true);
    }
  };

  const nameLostFocus = () => {
    setWasNameTouched(true);
    if (name.trim() === '' || /\d/.test(name)) {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);
  };

  const loginLostFocus = () => {
    setWasLoginTouched(true);
    if (login.length <= 5) {
      setIsLoginValid(false);
      return;
    }
    setIsLoginValid(true);
  };

  const ageLostFocus = () => {
    setWasAgeTouched(true);
    if (age < 18) {
      setIsAgeValid(false);
      return;
    }
    setIsAgeValid(true);
  };

  const emailLostFocus = () => {
    setWasEmailTouched(true);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);
  };

  return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          onInput={changeName}
          onBlur={nameLostFocus}
          className={!isNameValid && wasNameTouched ? 'invalid' : ''}
        />
        {!isNameValid && <p>Enter correct name</p>}
        <label>Login</label>
        <input
          onInput={changeLogin}
          onBlur={loginLostFocus}
          className={!isLoginValid && wasLoginTouched ? 'invalid' : ''}
        />
        {!isLoginValid && <p>Enter correct login</p>}
        <label>Age</label>
        <input
          type="number"
          onInput={changeAge}
          onBlur={ageLostFocus}
          className={!isAgeValid && wasAgeTouched ? 'invalid' : ''}
        />
        {!isAgeValid && <p>Enter correct age</p>}
        <label>Email</label>
        <input
          onInput={changeEmail}
          onBlur={emailLostFocus}
          className={!isEmailValid && wasEmailTouched ? 'invalid' : ''}
        />
        {!isEmailValid && <p>Enter correct email</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}*/

//--------------------3----------------------

/*import { Formik, Form, Field } from 'formik';
function App() {
  const validateName = (value) => {
    if (!value) {
      return 'Required';
    } else if (value.trim() === '' || /\d/.test(value)) {
      return 'Invalid name format';
    }
  };
  const validateLogin = (value) => {
    if (!value) {
      return 'Required';
    } else if (value.length < 5) {
      console.log(value.length);
      return 'Name must have at least 6 characters';
    }
  };
  const validateAge = (value) => {
    if (!value) {
      return 'Required';
    } else if (value < 18) {
      return 'You are too young';
    }
  };
  const validateEmail = (value) => {
    if (!value) {
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Invalid email address';
    }
  };

  return (
    <div className="wrapper">
      <Formik
        initialValues={{
          name: '',
          login: '',
          age: '',
          email: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({ errors, touched }) => (
          <Form>
            <label>Name</label>
            <Field
              name="name"
              validate={validateName}
              className={errors.name && touched.name ? 'invalid' : ''}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}

            <label>Login</label>
            <Field
              name="login"
              validate={validateLogin}
              className={errors.naloginme && touched.login ? 'invalid' : ''}
            />
            {errors.login && touched.login && <p>{errors.login}</p>}

            <label>Age</label>
            <Field
              name="age"
              validate={validateAge}
              className={errors.age && touched.age ? 'invalid' : ''}
            />
            {errors.age && touched.age && <p>{errors.age}</p>}

            <label>Email</label>
            <Field
              name="email"
              validate={validateEmail}
              className={errors.email && touched.email ? 'invalid' : ''}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}*/

//--------------------4----------------------
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onTouched' });

  const submit = (value) => {
    console.log(value);
    reset();
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(submit)}>
        <label>Name</label>
        <input
          {...register('name', {
            required: 'Required',
            minLength: {
              value: 1,
              message: 'Minimum 1 character',
            },
            pattern: {
              value: /^[A-Z]+$/i,
              message: 'Name should content only latin characters',
            },
          })}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>Login</label>
        <input
          {...register('login', {
            required: 'Required',
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          })}
          className={errors.login ? 'invalid' : ''}
        />
        {errors.login && <p>{errors.login.message}</p>}
        <label>Age</label>
        <input
          {...register('age', {
            required: 'Required',
            min: {
              value: 18,
              message: 'min 18',
            },
          })}
          className={errors.age ? 'invalid' : ''}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
          className={errors.email ? 'invalid' : ''}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
