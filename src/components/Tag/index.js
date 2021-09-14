import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Link from '../Link/index';
import './index.scss';

const Tag = (props) => {
  const tags = props?.fields?.Categories;
  return (
    <div className="c-tag">
      {tags.map((tag, index) => {
        return (
          <div key={index}>
            {tag.url ? (
              <Link path={tag.url} titleLabel={tag.name} title={tag.displayName} isExternal={false}>
                {tag.displayName}
              </Link>
            ) : (
              <Text tag="span" field={tag.displayName} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
