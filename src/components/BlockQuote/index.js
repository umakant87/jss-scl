import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const BlockQuote = (props) => {
  const title = props.fields?.Title.value;
  const description = props.fields?.Description;
  const authorName = props.fields?.AuthorName.value;
  return (
    <div className="c-quote">
      <h1 className="c-quote__title">{title}</h1>
      <div className="c-quote__description">
        <RichText type="p" field={description} />
        <div className="c-quote__right">
          <FontAwesomeIcon className="c-quote__icon" icon={faQuoteRight} />
        </div>
      </div>
      {authorName && (
        <div className="c-quote__name">
          <p>--{authorName}</p>
        </div>
      )}
    </div>
  );
};

export default BlockQuote;
