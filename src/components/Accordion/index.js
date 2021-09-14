import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const title = props.fields?.Title?.value;
  const content = props.fields?.Content?.value;
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="c-accordion">
      <div className="c-accordion__item">
        <div className="c-accordion__item__title" onClick={handleClick}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="c-accordion__item__content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
