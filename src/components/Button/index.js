import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

export const Button = (props) => {
  props = props?.child ? props?.props : props;
  const type = props?.fields ? props?.fields?.Type?.value : props.type;
  const className = props?.fields ? props?.fields?.ClassName?.value : props.className;
  const backgroundColor = props?.fields
    ? props?.fields?.BackgroundColor?.value
    : props.backgroundColor;
  const size = props?.fields ? props?.fields?.Size?.value : props.size;
  const label = props?.fields ? props?.fields?.Label?.value : props.label;
  const callToAction = props?.fields ? props?.fields?.CallToAction?.value : props.callToAction;
  const onClick = props.onClick;
  const CTA = (link) => {
    window.open(link, '_blank');
  };
  return (
    <button
      type={type}
      className={['c-button', `c-button__${size}`, `c-button__${className}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...(callToAction && { onClick: () => CTA(callToAction) })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
