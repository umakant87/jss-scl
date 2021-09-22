import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';
import { useFormik } from 'formik';

const QueryForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    query: '',
  };
  const onSubmit = (values) => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  const validate = (values) => {
    let errors = {};

    if (!values.fname) {
      errors.fname = 'Required';
    }
    if (!values.lname) {
      errors.lname = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.query) {
      errors.query = 'Required';
    }
    return errors;
  };
  const enqyiryForm = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="c-enquiry">
      <div className="c-enquiry__topic">Heading</div>
      <div className="c-enquiry__sub-heading">Sub Heading</div>
      <form onSubmit={enqyiryForm.handleSubmit}>
        <div className="c-enquiry__form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={enqyiryForm.handleChange}
            value={enqyiryForm.values.fname}
          />
          {enqyiryForm.errors.fname ? (
            <div className="c-enquiry__error">{enqyiryForm.errors.fname}</div>
          ) : null}
        </div>

        <div className="c-enquiry__form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={enqyiryForm.handleChange}
            value={enqyiryForm.values.lname}
          />
          {enqyiryForm.errors.lname ? (
            <div className="c-enquiry__error">{enqyiryForm.errors.lname}</div>
          ) : null}
        </div>

        <div className="c-enquiry__form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={enqyiryForm.handleChange}
            value={enqyiryForm.values.email}
          />
          {enqyiryForm.errors.email ? (
            <div className="c-enquiry__error">{enqyiryForm.errors.email}</div>
          ) : null}
        </div>

        <div className="c-enquiry__topic">Query</div>
        <div className="c-enquiry__form-control">
          <textarea
            name="query"
            value={enqyiryForm.values.query}
            onChange={enqyiryForm.handleChange}
          >
            {enqyiryForm.values.query}
          </textarea>
          {enqyiryForm.errors.query ? (
            <div className="c-enquiry__error">{enqyiryForm.errors.query}</div>
          ) : null}
        </div>

        <button className="c-enquiry__button" type="submit">
          Submit
        </button>

        {formSubmitted ? <div className="c-enquiry__success">Form submitted!</div> : null}
      </form>
    </div>
  );
};

export default QueryForm;
