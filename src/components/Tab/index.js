import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Tab = ({ props }) => {
  const fields = props?.fields.Tab;
  const [activeTab, setaActiveTab] = useState(fields[0].fields.Title);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setaActiveTab(newActiveTab);
  };
  return (
    <div className="c-tab">
      <ul className="nav nav-tabs" id="myTab">
        {fields &&
          fields.map((tab) => {
            const label = tab.fields.Title;
            console.log(label);
            return (
              <li className="nav-item" key={label}>
                <a
                  data-toggle="tab"
                  className={[label === activeTab ? 'active' : '', 'nav-link'].join(' ')}
                  onClick={(e) => handleClick(e, label)}
                >
                  {label}
                </a>
              </li>
            );
          })}
      </ul>
      <div className="tab-content my-tab">
        {fields &&
          fields.map((content) => {
            if (content.fields.Title === activeTab) {
              return (
                <div key={content.fields.Title} role="tabpanel" className="tab-pane active">
                  <h2>{content.fields.Title}</h2>
                  <div>{content.fields.Description}</div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default Tab;
