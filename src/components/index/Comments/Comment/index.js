import React from 'react';
import './styles.css';
import me from '../../../../static/images/me2.jpg';
import {SocialIcon} from 'react-social-icons';

const Comment = ({image, info, body, phone, wp}) => {
  return (
    <div className="comment-container">
      <div className="comment-layout">
        <div className="comment-header">
          <div className="comment-header-layout">
            <div className="comment-image">
              <img src={image} width="100px" height="100px" />
            </div>
            <div className="comment-info">
              {info[0]}
              <br />
              {info[1]}

              <br />
              {info[2]}

            </div>
          </div>
        </div>
        <div className="comment-body">
          {body}
        </div>
        <div className="comment-footer">

          <div className="comment-phone">
            <SocialIcon url={phone} network="foursquare" fgColor="white" />
          </div>
          <SocialIcon url={wp} network="whatsapp" fgColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
