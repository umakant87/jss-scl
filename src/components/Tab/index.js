import React, { useState } from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

const Tab = (props) => {
  const tabs = props?.fields?.Tab;
  const [activeTab, setaActiveTab] = useState(tabs[0].fields.Title.value);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setaActiveTab(newActiveTab);
  };
  return (
    <div className="c-tab">
      <ul className="nav nav-tabs" id="myTab">
        {tabs &&
          tabs.map((tab, index) => {
            const label = tab.fields.Title.value;
            console.log(label);
            return (
              <li className="nav-item" key={`title_${index}`}>
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
        {tabs &&
          tabs.map((content, index) => {
            if (content.fields.Title.value === activeTab) {
              return (
                <div key={index} role="tabpanel" className="tab-pane active">
                  <Text type="h2" field={content.fields.Title} />
                  <RichText type="p" field={content.fields.Description} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default Tab;
