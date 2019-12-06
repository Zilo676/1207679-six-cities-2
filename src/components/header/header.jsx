import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from '../../reducer/user/selectors';

const Header = (props) => {
  const email = props.user.email;
  const avatarUrl = props.user[`avatar_url`];

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="img/logo.svg" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img className="user__avatar" src={`https://htmlacademy-react-2.appspot.com/six-cities` + avatarUrl} alt="" width="81" height="41" />
                  </div>
                  <span className="header__user-name user__name">{email}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
});

export {Header};

export default connect(mapStateToProps, null)(Header);
