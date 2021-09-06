import React, { useState } from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import Link from '../Link/index';
import '../../assets/common.scss';
import './index.scss';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const brand = props?.fields?.Logo;
  const links = props?.fields?.Links;
  const theme = props?.fields.Theme?.name;

  console.log(props.fields);

  return (
    <header className={'c-header'}>
      <nav className={['navbar navbar-expand-lg navbar-dark', `${theme}`].join(' ')}>
        <div className="c-header__container-fluid container-fluid">
          <a className="c-header__container-fluid__navbar-brand navbar-brand" href="#">
            <Image media={brand} />
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={[
              'collapse navbar-collapse c-header__container-fluid__menu',
              showMenu ? 'show' : '',
            ].join(' ')}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((val, index) => {
                return (
                  <li className="nav-item" key={index}>
                    {/* <a
                      className={index === 0 ? "nav-link active" : "nav-link"}
                      href="#"
                    >
                      {val.label}
                    </a> */}
                    <Link
                      modifiers={index === 0 ? 'nav-link active' : 'nav-link'}
                      label={val.displayName}
                      path={val.url}
                      titleLabel={val.displayName}
                    >
                      {val.displayName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
