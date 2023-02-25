import React from 'react';
import { useParams } from 'react-router-dom';

const ImagePreView = () =>{
    const imgsrc = useParams();
    return(
        <div className="row">
            <div className="col-12">
                <img src={imgsrc} alt="wardrobe" width="auto" height="auto"/>
            </div>
        </div>
    );
};

export default ImagePreView;