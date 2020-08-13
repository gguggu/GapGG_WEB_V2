import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from 'assets/images/logos/Gap.GG Logo_White_Scaled.png';
import './Navigation.scss';

const Navigation = () : JSX.Element => {
  return (
    <div className="Navigation">
      <Link className="Navigation-logo" to={'/'}>
        <img src={LOGO} alt="logo"/>
      </Link>
    </div>
  );
};

export default Navigation;
