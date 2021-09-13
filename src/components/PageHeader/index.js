import React from 'react';
import './index.scss';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PageHeader = (props) => {
  const backgroundColor = props.fields?.BackgroundColor?.value;
  const headerText = props.fields?.HeaderText;
  return (
    <div className="c-page-header" style={{ backgroundColor: backgroundColor }}>
      <div className="c-page-header__title">
        <Text tag="p" field={headerText} />
      </div>
    </div>
  );
};

export default PageHeader;
