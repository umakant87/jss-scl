import React from 'react';

const Link = ({ children, path, isExternal, titleLabel, modifiers }) => {
  return (
    <a
      href={path}
      aria-label={titleLabel}
      className={modifiers}
      role="link"
      title={titleLabel}
      rel={isExternal ? 'rel=noreferrer' : ''}
    >
      {children}
    </a>
  );
};

export default Link;
