import React, { useState, useRef } from 'react';
import defaultImage from '../../assets/default-photo.png'

const Photo = (props) => {
    const inputRef = useRef();
    const [photoData, setPhotoData] = useState(null);
    const [photoUploaded, setPhotoUploaded] = useState(0);

    const handlePhotoUpload = (e) => {
        console.log('clicked')
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                console.log('stored photo');
                setPhotoData(reader.result);
                setPhotoUploaded(true);
                localStorage.setItem("Photo",reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
    }

    const getImageSource = () => {
        if (photoUploaded) return photoData
        return defaultImage; 
    }

    return (
        <div>
            <label>
            <img style={{
                cursor: 'pointer',
                objectFit: 'cover',
                borderRadius: '5rem',
            }}
                src={getImageSource()}
                width='128px'
                height='128px'
                alt='Me'
                onClick={() => inputRef.current.click()}
            />
            </label>
            <input 
                ref={inputRef}
                type="file" 
                hidden
                multiple={false}
                onChange={handlePhotoUpload}/>
        </div>
    );

}

export default Photo;
