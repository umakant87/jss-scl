import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';
// Import sitecore forms
import { SitecoreForm } from '@sitecore-jss/sitecore-jss-forms';
import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import { sitecoreApiHost, sitecoreApiKey } from '../../temp/config';
import { withRouter } from 'react-router-dom';

const QueryForm = (props) => {
  return (
    <div className="c-enquiry">
      <Form
        form={props?.fields}
        sitecoreApiHost={sitecoreApiHost}
        sitecoreApiKey={sitecoreApiKey}
        onRedirect={(url) => props.history.push(url)}
      />
    </div>
  );
};

export default withRouter(QueryForm);
