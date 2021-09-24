import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

const HeroBanner = (props) => {
  const heroImage = props?.fields?.Image;
  const title = props?.fields?.Title;
  const description = props?.fields?.Description;
  const orientation = props?.fields?.Orientation?.fields?.Name?.value;
  return (
    <div className="c-hero-banner">
      <div className="c-hero-banner__container">
        <div className="c-hero-banner__container__image">
          <Image media={heroImage} />
        </div>
        <div
          className={[
            'c-hero-banner__container__content',
            `c-hero-banner__container__content--${orientation}`,
          ].join(' ')}
        >
          <div className="c-hero-banner__container__content__title">
            <Text type="h1" field={title} />
          </div>
          <div className="c-hero-banner__container__content__description">
            <RichText type="p" field={description} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
