import React, { useState } from 'react';
import { useFormik } from 'formik';
import './index.scss';

const NewsletterSubscription = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const initialValues = {
    email: '',
  };
  const onSubmit = (values) => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };
  const newsletterform = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="c-newsletter">
      <h1>Newsletter Subscription</h1>
      <form className="c-newsletter__form" onSubmit={newsletterform.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="c-newsletter__email"
            type="text"
            name="email"
            id="email"
            onChange={newsletterform.handleChange}
            value={newsletterform.values.email}
          />
          {newsletterform.errors.email ? (
            <div className="c-newsletter__error">{newsletterform.errors.email}</div>
          ) : null}
        </div>

        <button className="c-newsletter__button" type="submit">
          Submit
        </button>

        {formSubmitted ? <div className="c-newsletter__success">Form submitted!</div> : null}
      </form>
    </div>
  );
};

export default NewsletterSubscription;
