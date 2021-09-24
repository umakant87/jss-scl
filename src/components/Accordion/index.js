import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

const AccordionItem = ({ title, content, accoption }) => {
  let collapseItem;
  if (accoption === 'Collapse') {
    collapseItem = false;
  } else {
    collapseItem = true;
  }

  const [isActive, setIsActive] = useState(collapseItem);

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

const Accordion = (props) => {
  const accoridons = props.fields?.AccordionItems;
  const accOption = props.fields?.AccOption?.value;

  return (
    <div className="c-accordion-wrapper">
      {accordions.map((accordion, index) => {
        return (
          <AccordionItem
            key={index}
            title={accordion.title}
            accoption={accOption}
            content={accordion.content}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
