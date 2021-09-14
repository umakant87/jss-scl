import React, { useState } from 'react';
import Button from '../Button/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const YoutubeVideo = (props) => {
  const videoId = props.fields?.VideoId?.value;
  const popUp = props.fields?.Popup?.value;
  const thumbnail = props.fields?.Thumbnail?.value;

  const videoUrl = 'http://www.youtube.com/embed/' + videoId + '?autoplay=1';

  // Get Youtube video image from youtube, standard format
  const youtubeThumbnail = `https://i1.ytimg.com/vi/${videoId}/mqdefault.jpg`;

  const [playVideo, setPlayVideo] = useState(false);
  const [isVideoPopUpOpen, setVideoPopUp] = useState('hide');
  const closePopUp = () => {
    setVideoPopUp('hide');
    setPlayVideo(false);
  };
  const handleVideoPlay = () => {
    setPlayVideo(true);
    if (popUp === 'true') {
      setVideoPopUp('show');
    }
  };
  return (
    <div className="c-video">
      {!playVideo && (
        <div>
          <img
            className="c-video__thumbnail"
            src={youtubeThumbnail ? youtubeThumbnail : thumbnail}
            alt="Thumbnail"
          />
          <FontAwesomeIcon onClick={handleVideoPlay} className="c-video__playicon" icon={faPlay} />
        </div>
      )}
      {playVideo && popUp === '' && (
        <iframe width="550" height="300" src={playVideo ? videoUrl : ''} frameBorder="1"></iframe>
      )}
      {playVideo && popUp === 'true' && (
        <div className={[isVideoPopUpOpen, 'c-video__content_wrapper'].join(' ')}>
          <div className="c-video__content">
            <Button
              className="close"
              label="Close"
              size="small"
              type="button"
              onClick={closePopUp}
            />
            <iframe
              width="550"
              height="300"
              src={playVideo ? videoUrl : ''}
              frameBorder="1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
export default YoutubeVideo;
