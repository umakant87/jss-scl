import React from 'react';
import './index.scss';

const Text = (props) => {
  const type = props?.fields?.Type?.value;
  const content = props?.fields?.Text?.value;
  const position = props?.fields?.Position?.displayName;
  if (type === 'h1') {
    return <h1 className={[position].join(' ')}>{content}</h1>;
  }
  if (type === 'h2') {
    return <h2 className={[position].join(' ')}>{content}</h2>;
  }
  if (type === 'h3') {
    return <h3 className={[position].join(' ')}>{content}</h3>;
  }
  if (type === 'h4') {
    return <h4 className={[position].join(' ')}>{content}</h4>;
  }
  if (type === 'p') {
    return <p className={[position].join(' ')} dangerouslySetInnerHTML={{ __html: content }}></p>;
  }
  if (type === 'span') {
    return <span className={[position].join(' ')}>{content}</span>;
  }
};

export default Text;
