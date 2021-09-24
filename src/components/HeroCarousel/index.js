import React, { useState } from 'react';
import './index.scss';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const HeroCarousel = (props) => {
  const slides = props?.fields?.Slides;
  const showCaption = props?.fields?.showCaption?.value;
  const captionAlignment = props?.fields?.cationAlignment?.fields?.Name?.value;

  const [currSlide, setCurrSlide] = useState(1);
  /**
   * Method to set the current slide
   */
  const currentSlide = (slide) => {
    setCurrSlide(slide);
  };
  /**
   * Method to handle prev slide
   */
  const prevSlide = () => {
    let cnt = 0;
    currSlide === 1 ? (cnt += slides.length) : (cnt += currSlide - 1);
    currentSlide(cnt);
  };

  /**
   * Method to handle next slide
   */
  const nextSlide = () => {
    let cnt = 0;
    currSlide === slides.length ? (cnt += 1) : (cnt += currSlide + 1);
    currentSlide(cnt);
  };
  return (
    <div className={'c-slidecontainer'}>
      <div className={'c-slidecontainer__slider'}>
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={[
                'c-slidecontainer__slider__slide',
                currSlide === index + 1
                  ? 'c-slidecontainer__slider__show'
                  : 'c-slidecontainer__slider__hide',
              ].join(' ')}
            >
              <div className={'c-slidecontainer__slider__slide__number'}>
                {currSlide} {'/'} {slides.length}
              </div>
              <Image media={slide.fields.Image} />
              {showCaption && (
                <div
                  className={[
                    'c-slidecontainer__slider__slide__text',
                    `text-${captionAlignment}`,
                  ].join(' ')}
                >
                  {slide.fields.Title.value}
                </div>
              )}
            </div>
          );
        })}
        <div
          className={['c-slidecontainer__slider__prevnext ', 'd-flex justify-content-between'].join(
            ''
          )}
        >
          <div className={'c-slidecontainer__slider__prevnext__div'} onClick={() => prevSlide()}>
            <FontAwesomeIcon
              className={'c-slidecontainer__slider__prevnext__div__icons'}
              icon={faAngleLeft}
            />
          </div>
          <div className={'c-slidecontainer__slider__prevnext__div'} onClick={() => nextSlide()}>
            <FontAwesomeIcon
              className={'c-slidecontainer__slider__prevnext__div__icons'}
              icon={faAngleRight}
            />
          </div>
        </div>
      </div>
      <div className={'c-slidecontainer__dots'}>
        {slides.map((slide, index) => {
          return (
            <span
              key={index}
              className={[
                'c-slidecontainer__dots__dot',
                currSlide === index + 1 ? 'c-slidecontainer__dots__active' : ' ',
              ].join(' ')}
              onClick={() => currentSlide(index + 1)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCarousel;
