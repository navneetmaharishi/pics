import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    // const image = props.images.map(img => {
    //     return <img key={img.id} src={img.urls.regular} alt={img.description} />
    // });

    // const image = props.images.map(({ id, urls, description }) => {
    //     return <img key={id} src={urls.regular} alt={description} />
    // });

    const image = props.images.map(img => {
        return <ImageCard key={img.id} image={img} />
    });

    return (
        <div className="image-list">
            {image}
        </div>
    );
}

export default ImageList;