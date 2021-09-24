import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { scrollToTop } from './BackToTop';

const BackToTop = (props) => {
  const srLabelText = props?.fields?.Label?.value;
  const [visible, setVisible] = useState(false);
  // toggleVisible method is used to enable or disable the Icon.
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  // Event Listener scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <div className="c-backtotop">
      <div className="sr-only">{srLabelText}</div>
      <FontAwesomeIcon
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
        className="c-backtotop__icon"
        icon={faArrowUp}
        title={srLabelText}
      />
    </div>
  );
};

export default BackToTop;
