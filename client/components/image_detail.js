import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
    // props.picture => this is the picture object
    // props.picture.title
    // props.picture.link
    
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.picture.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.picture.title}
                </h4>
                <p>{props.picture.description}</p>
                <ImageScore ups={props.picture.ups} downs={props.picture.downs} />
            </div>
            
        </li>
    );
};

export default ImageDetail;