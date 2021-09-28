import React, { useState } from 'react';
import { useFormik } from 'formik';
import './index.scss';
// Import sitecore forms
import { SitecoreForm } from '@sitecore-jss/sitecore-jss-forms';
import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import { sitecoreApiHost, sitecoreApiKey } from '../../temp/config';
import { withRouter } from 'react-router-dom';

const NewsletterSubscription = (props) => {
  return (
    <div className="c-newsletter">
      <div className="c-newsletter">
        <Form
          form={props?.fields}
          sitecoreApiHost={sitecoreApiHost}
          sitecoreApiKey={sitecoreApiKey}
          onRedirect={(url) => props.history.push(url)}
        />
      </div>
    </div>
  );
};

export default withRouter(NewsletterSubscription);
