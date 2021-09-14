import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import fields from './mockFields';

const SocialShare = (props) => {
  const sourceUrl = props.fields?.Url?.value;
  const shareTitle = props.fields?.Title;
  const shareDescription = props.fields?.Description;

  const shareProviders = [
    {
      text: 'Facebook',
      url: 'http://www.facebook.com/sharer.php?u=',
      name: 'facebook',
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/share?url=',
      name: 'twitter',
    },
    {
      text: 'Email',
      url: 'mailto:?Subject=Share &body=',
      name: 'email',
    },
    {
      text: 'Whatsapp',
      url: 'whatsapp://send?text=',
      name: 'whatsapp',
    },
  ];
  const shareUrl = (base) => {
    return base + sourceUrl;
  };

  const getIcon = (icon) => {
    if (icon === 'facebook') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faFacebook} />;
    } else if (icon === 'twitter') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faTwitter} />;
    } else if (icon === 'email') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faEnvelope} />;
    } else if (icon === 'whatsapp') {
      return <FontAwesomeIcon className="c-social-account__list__item__icon" icon={faWhatsapp} />;
    }
  };

  return (
    <aside className="c-social-share">
      <Text tag="h3" field={shareTitle} />
      <Text tag="p" field={shareDescription} />
      <ul className="c-social-share__list">
        {shareProviders.map((shareProvider, index) => {
          return (
            <li key={index} className="c-social-share__list__item">
              <a
                className="c-social-share__list__item__link"
                href={shareUrl(shareProvider.url)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${shareProvider.text} Share - New Window`}
              >
                {getIcon(shareProvider.name)}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SocialShare;
