import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import './index.scss';
import fields from './mock';

const tiles = fields?.Tiles;
console.log(tiles.length);
const TileCard = (props) => {
  // const tiles = props?.fields.Tiles;

  return (
    <div className="TileCard ">
      {tiles.map((tile, index) => {
        return (
          <div key={index} className={'children'}>
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
