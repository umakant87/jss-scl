import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import Button from '../Button/index';
import './index.scss';

const HeroComposite = (props) => {
  const heroImage = props?.fields?.Image;
  const title = props?.fields?.Title;
  const description = props?.fields?.Description;
  const cta = props?.fields?.Cta;
  const orientation = props?.fields?.Orientation?.value;
  return (
    <div className="c-hero-composite">
      <div
        className={[
          'c-hero-composite__container',
          `c-hero-composite__container--${orientation}`,
        ].join(' ')}
      >
        <div className="c-hero-composite__container__image">
          <Image media={heroImage} />
        </div>
        <div className="c-hero-composite__container__content">
          <div className="c-hero-composite__container__content__title">
            <Text type="h1" field={title} />
          </div>
          <div className="c-hero-composite__container__content__description">
            <Text type="p" field={description} />
          </div>
          {cta && (
            <div className="c-hero-composite__container__content__cta">
              <Button
                className="primary"
                type="button"
                size="medium"
                label={cta.value.text}
                callToAction={cta.value.url}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComposite;
