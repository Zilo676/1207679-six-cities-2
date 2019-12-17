import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUser} from '../../reducer/user/selectors';
import {BASE_URL, Path} from '../../api';

const Header = (props) => {
  const email = Object.keys(props.user).length === 0 ? `Sign in` : props.user.email;
  const avatarUrl = Object.keys(props.user).length === 0 ? `` : props.user.avatarUrl;
  const link = Object.keys(props.user).length === 0 ? Path.LOGIN : Path.FAVORITES;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={Path.MAIN_PAGE} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="/img/logo.svg" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={link} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img className="user__avatar" src={BASE_URL + avatarUrl} alt="" width="81" height="41" />
                  </div>
                  <span className="header__user-name user__name">{email}</span>
                </Link>
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
