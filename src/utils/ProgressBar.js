import React, { useEffect } from 'react';
import { projectStorage } from '../firebase/config';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, setImgURL }) => {
    const {url, progress} = useStorage(file);

    useEffect(() => {
        if(url) {
            setImgURL(url)
            setFile(null);
        }
    }, [url, setFile])


    return (
        <div className="progress-bar" style={{width: progress + '%', }}></div>
    )
}

export default ProgressBar;