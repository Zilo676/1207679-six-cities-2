import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Path} from '../../api';

import Header from '../header/header.jsx';

const SignIn = (props) => {
  const {onChange, email, password, onSubmit} = props;
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={(evt) => {
                  evt.preventDefault();
                  onChange(`email`, evt.target.value);
                }
                } />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={(evt) => {
                  evt.preventDefault();
                  onChange(`password`, evt.target.value);
                }
                } />
              </div>
              <button className="login__submit form__submit button" type="button" onClick={(evt) => {
                evt.preventDefault();
                onSubmit(email, password);
              }
              }>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={Path.MAIN_PAGE} ><span className="locations__item-link">Amsterdam</span></Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

export {SignIn};
