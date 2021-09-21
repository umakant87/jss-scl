import React from 'react';

const Text = (props) => {
  type = props?.fields?.Type.value;
  content = props?.fields?.Text.value;
  if (type === 'h1') {
    return <h1>{content}</h1>;
  }
  if (type === 'h2') {
    return <h2>{content}</h2>;
  }
  if (type === 'h3') {
    return <h3>{content}</h3>;
  }
  if (type === 'h4') {
    return <h4>{content}</h4>;
  }
  if (type === 'p') {
    return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
  }
  if (type === 'span') {
    return <span>{content}</span>;
  }
};

export default Text;
