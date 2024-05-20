import React, { useState, useEffect } from 'react';
import './ImageGallery.css'; // Import your CSS file
import homestaysData from './homestays.json'; // Import your JSON data
import Header from "../../../Components/Navbar/Header"


function ImageGallery() {
    const [imagesData, setImagesData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [selectedHomestay, setSelectedHomestay] = useState(null);

    useEffect(() => {
        // Get homestay ID from local storage
        const selectedHomestayId = localStorage.getItem('selectedHomestayId');

        // Find homestay with matching ID
        const homestay = homestaysData.find(homestay => homestay.id === parseInt(selectedHomestayId));

        // Set homestay state if found
        if (homestay) {
            setSelectedHomestay(homestay);
            setImagesData(homestay.images);
        } else {
            console.error(`Homestay with ID ${selectedHomestayId} not found.`);
        }
    }, []);

    const handleSeeMoreClick = () => {
        setShowGallery(true);
        console.log("clicked")
    };

    const handleCloseButtonClick = () => {
        setShowGallery(false);
    };

    const handlePrevButtonClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
    };

    const handleNextButtonClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    };
    const remainingImagesCount = imagesData.length > 4 ? imagesData.length - 4 : 0;
    const seeMoreButtonText = `+${remainingImagesCount}`;
    
    // ...
    
    
    return (
        <>
        <Header></Header>
        <div className='hs-main'>
            <div className="gal-container">
                {imagesData.slice(0, 3).map((image, index) => (
                    <div key={index} className={`item item-${index + 1}`} style={{ backgroundImage: `url(${image})` }}></div>
                ))}
                <div className="item item-4" style={{ backgroundImage: `url(${imagesData[3]})` }}>
                <button id="seeMore" style={{ display: imagesData.length > 4 ? 'block' : 'none' }} onClick={handleSeeMoreClick}>{seeMoreButtonText}</button>

                </div>
            </div>
            {showGallery && (
                <>
                <div id="galleryContainer" className="gallery-container">
                    <div id="imageContainer" className="image-container" style={{ backgroundImage: `url(${imagesData[currentIndex]})` }}></div>
                    <button className="prev-button" onClick={handlePrevButtonClick}>&lt;</button>
                    <button className="next-button" onClick={handleNextButtonClick}>&gt;</button>
                    <button className="close-button" onClick={handleCloseButtonClick}>X</button>
                </div>
                </>
            )}
        </div>
        

        
        </>
    );
}

export default ImageGallery;
