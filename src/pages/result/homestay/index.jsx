import React, { useState, useEffect } from 'react';
import './ImageGallery.css'; // Import your CSS file
import homestaysData from './homestays.json'; // Import your JSON data
import Header from "../../../Components/Navbar/Header";
import { MapPinned, ChevronDown, MessageCircleMore } from 'lucide-react';
import MoreInfo from '../myComponent';

function ImageGallery() {
    const [imagesData, setImagesData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [selectedHomestay, setSelectedHomestay] = useState(null);
    const [rooms, setRooms] = useState(1);
    const [people, setPeople] = useState(1);
    const [children, setChildren] = useState(0);
    const [showSelection, setShowSelection] = useState(false);

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

    const handleBookNowClick = () => {
        if (selectedHomestay) {
            let bookedHomestays = JSON.parse(localStorage.getItem('bookedHomestays')) || [];
            bookedHomestays.push(selectedHomestay);
            localStorage.setItem('bookedHomestays', JSON.stringify(bookedHomestays));
            console.log('Booked Homestays:', bookedHomestays);
            alert('Homestay booked successfully!');
        }
    };

    const remainingImagesCount = imagesData.length > 4 ? imagesData.length - 4 : 0;
    const seeMoreButtonText = `+${remainingImagesCount}`;
    const toggleSelection = () => {
        setShowSelection(!showSelection);
      };

    return (
        <>
            <Header />
            <div className='hs-main'>
                <div className="gal-container">
                    {imagesData.slice(0, 3).map((image, index) => (
                        <div key={index} className={`item item-${index + 1}`} style={{ backgroundImage: `url(${image})` }}></div>
                    ))}
                    <div className="item item-4" style={{ backgroundImage: `url(${imagesData[3]})` }}>
                        <button id="seeMore" style={{ display: imagesData.length > 4 ? 'block' : 'none' }} onClick={handleSeeMoreClick}>{seeMoreButtonText}</button>
                    </div>
                </div>
                

                {selectedHomestay && (
                    <div className="homestay-details">
                        <div className="details">
                            <h1>{selectedHomestay.name}</h1>
                            <p className='hs-address'> <MapPinned/> {selectedHomestay.address}   <a href="https://www.google.com/maps?ll=20.9449,105.500111&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=17082794631431047032" target={"_blank"}> <i style={{color: "blue"}}> ‣ See map</i></a></p>
                            <div className='map-container'>
                                <iframe src={selectedHomestay.embedmap} className="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <ul className='advantages' >
                                    {selectedHomestay.advantages.map((c, index) => <li key={index} className="ad">{c}</li> )}
                                </ul>
                            </div>
                            <p className='homestay-slogan'>Giữa núi rừng, hè cũng mát</p>
                            <p className='homestay-des'> Giữa núi rừng, hè cũng mát

Những dịp lễ như này là thời gian hoàn hảo để dành cho gia đình, tận hưởng thời gian nghỉ dưỡng với không gian đầy đủ tiện ích tại Dream Hill
Không lo nắng nóng vì không gian bao quanh bởi núi rừng nhưng lại ngay gần Hà Nội (chỉ 40 phút đi đường), đảm bảo đầy đủ tiện ích cho cả gia đình</p>
                        </div>
                        <div className="payment">
                            <div className="cost-container">
                            <div className='price'>
    <span>{selectedHomestay.price}</span>
    <span className='de'>₫ / 1 đêm</span>
</div>

                                <p className='star'>{selectedHomestay.reviews}</p>
                            </div>
                            <div className='option'>
                                <div className='date'>
                                    <div className="check-in">
                                        <label htmlFor="checkin">Check-in</label>
                                        <input type="date" id="checkin" name="checkin" required/>
                                    </div>
                                    <div className="separate"></div>
                                    <div className="check-out">
                                        <label htmlFor="checkout">Check-out</label>
                                        <input type="date" id="checkout" name="checkout" required/>
                                    </div>
                                </div>
                                <hr />
                                <div className='number'>
                                    
                                    <p className='title'>Guests & rooms <ChevronDown size={25}/></p>
                                    <div className='option-container'>
                                        <p onClick={toggleSelection}>
                                            {rooms} rooms, {people+children} people
                                        </p>
                                    </div>
                                    

                                </div>
<hr />
                                <div className='number'>
                                    
                                    <p className='title'>Service Pack <ChevronDown size={25}/></p>
                                    <div className='option-container'>
                                        <p >Something something
                                        </p>
                                    </div>
                                    

                                </div>
                            
                            
                            </div>
                            <button className='submit' onClick={handleBookNowClick}>BOOK NOW</button>
                            <button className='addToCart'>ADD TO CART</button>
                        </div>
                    </div>
                )}
                
                <br />
                <hr />
                <br />
                <div className='contact-container'>
                    <div className='contact'>
                        <p className='got-a-question'>Got a question?</p>
                        <p className='contact-info-title'>Contact info</p>
                        <p className='phone-number'>+99999999999</p>
                    </div>
                    <div className='link-contact'>
                        <button className='send-messages'>Send a message</button>
                        <p>Send us a message right now and we’ll answer!</p>
                    </div>
                </div>
                <br />
                <hr />
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
