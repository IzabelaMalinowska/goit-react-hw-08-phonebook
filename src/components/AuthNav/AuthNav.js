import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        activeClassName={css.activeLink}
        className={css.link}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        activeClassName={css.activeLink}
        className={css.link}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
