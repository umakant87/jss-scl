import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';

const TileCard = (props) => {
  const tiles = props?.fields.Tiles;
  return (
    <div className="TileCard d-flex col-md-12">
      {tiles.map((tile, index) => {
        return (
          <div key={index} className={'children col-md-4'}>
            <div>
              <Image media={tile.fields.Image} />
            </div>
            <div className="title">
              <Text type="p" field={tile.fields.Title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TileCard;
