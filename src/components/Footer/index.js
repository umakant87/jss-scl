import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Link from '../Link/index';
import SocialAccount from '../SocialAccount/index';
import './index.scss';

const Footer = (props) => {
  const address = props?.fields?.Address?.value;
  const email = props?.fields?.Email?.value;
  const phone = props?.fields?.Phone?.value;
  const copyrightContent = props?.fields?.CopyRightContent;
  const disclaimerText = props?.fields?.DisclaimerText;
  const links = props?.fields?.Links;
  const SocialAccountHeading = props?.fields?.SocialAccountHeading;
  const SocialAccounts = props?.fields?.SocialAccount;
  const convertedSocial = SocialAccounts.map((social) => ({
    label: social.displayName,
    service: social.fields.service.value,
    url: social.fields.URL.value.href,
  }));
  return (
    <div className="c-footer-address">
      <div className="c-footer-address__container">
        <div className="c-footer-address__footer-links">
          <h2>Useful links</h2>
          <ul className="c-footer-address__list">
            {links &&
              links.map((link, index) => {
                return (
                  <li className="c-footer-address__item" key={index}>
                    <Link
                      isExternal
                      label={link.displayName}
                      path={link.url}
                      titleLabel={link.displayName}
                    >
                      {link.displayName}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="c-footer-address__footer-address">
          <h2>Address</h2>
          <ul>
            <li>
              <i className={['fas', 'fa-map-marker-alt'].join(' ')}></i> {address}
            </li>
            <li>
              <i className={['fas', 'fa-envelope'].join(' ')}></i> {email}
            </li>
            <li>
              <i className={['fas', 'fa-phone'].join(' ')}></i> {phone}
            </li>
          </ul>
        </div>
        <div className="c-footer-address__social-account">
          <h2>
            <Text tag="p" field={SocialAccountHeading} />
          </h2>
          <SocialAccount socialmenus={convertedSocial} />
        </div>
      </div>
      <div className="c-footer-address__copyright">
        <Text tag="p" field={copyrightContent} />
        <Text tag="p" field={disclaimerText} />
      </div>
    </div>
  );
};

export default Footer;
