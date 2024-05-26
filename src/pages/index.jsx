import React, { useState, useEffect } from 'react';
import { CircleCheck, CircleCheckBig } from "lucide-react";
import Header from "../Components/Navbar/Header.jsx";
import { Link } from 'react-router-dom';
import '../pages/Landing.css';
import AboutUs from "../Components/Landing/Components_of_Landing/AboutUs.jsx";

function Landing() {
    const [check, setCheck] = useState(false);
    const [isBooked, setIsBooked] = useState(false); // Khởi tạo mặc định là false

    useEffect(() => {
        const bookedHomestays = localStorage.getItem('bookedHomestays');
        if (bookedHomestays) {
            setIsBooked(true);
        }
    }, []);

    const handleClick = () => {
        if (!check) {
            window.location.href = "/login";
        }
    };

    const cardsData = [
        {
            id: 1,
            name: "Dream Hill, Hanoi",
            image: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/397442446_169702509547457_8442301666497253645_n.jpg?_nc_cat=108&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQzar32SymMW0nJ5a33OFo1PCVVXgCmj_U8JVVeAKaP3Px4_wA0zNquyoallpgQZIStV5uy3EtdFK0Rrb8t396&_nc_ohc=F3ulsA3hffgQ7kNvgFRIye9&_nc_ht=scontent.fhan5-8.fna&oh=00_AYCw2DieGa66WJ_CjwL1JtZtVSU5Yidq25qWw6tJK_naVA&oe=664DC4D7"
        },
        {
            id: 2,
            name: "Dream Hill, Hanoi",
            image: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/397442446_169702509547457_8442301666497253645_n.jpg?_nc_cat=108&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQzar32SymMW0nJ5a33OFo1PCVVXgCmj_U8JVVeAKaP3Px4_wA0zNquyoallpgQZIStV5uy3EtdFK0Rrb8t396&_nc_ohc=F3ulsA3hffgQ7kNvgFRIye9&_nc_ht=scontent.fhan5-8.fna&oh=00_AYCw2DieGa66WJ_CjwL1JtZtVSU5Yidq25qWw6tJK_naVA&oe=664DC4D7"
        },
        {
            id: 3,
            name: "Dream Hill, Hanoi",
            image: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/397442446_169702509547457_8442301666497253645_n.jpg?_nc_cat=108&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQzar32SymMW0nJ5a33OFo1PCVVXgCmj_U8JVVeAKaP3Px4_wA0zNquyoallpgQZIStV5uy3EtdFK0Rrb8t396&_nc_ohc=F3ulsA3hffgQ7kNvgFRIye9&_nc_ht=scontent.fhan5-8.fna&oh=00_AYCw2DieGa66WJ_CjwL1JtZtVSU5Yidq25qWw6tJK_naVA&oe=664DC4D7"
        },
    ];

    const change = () => {
        const aboutUsElement = document.getElementById("aboutus");
        aboutUsElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="Landing">
            <div className="Home">
                <Header />
                
                {isBooked && (<div className='booked'>
                    <div className='name'>
                        <CircleCheck/>
                        <p>Dream Hill</p>
                    </div>
                    <div className="details-container">
                        <div className="cf">
                            <div className="top">
                                <div className="left">
                                    <CircleCheckBig size={50} />
                                    <p>Booking <br />is confirmed!</p>
                                </div>
                                <div className="right">
                                    <img src="https://2.bp.blogspot.com/-Gto-wMNlGOc/XNsejtfZKZI/AAAAAAABS44/jhrXCTrFAZUwqvfhLIoliR0ns8eRDaH0wCLcBGAs/s1600/4073.jpg" alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                    <div className='de'>
                                        <p>Check in</p>
                                        <p>13.07.2024</p>
                                    </div>
                                    <div className='de'>
                                        <p>Check out</p>
                                        <p>20.07.2024</p>
                                    </div>
                                    <div className='de'>
                                        <p>Guests</p>
                                        <p>5 people</p>
                                    </div>
                            </div>
                        </div>
                        <div className='info'>
                                <div className='accommodation'>
                                    <div className='img-container'></div>
                                    <div className='yourstay'>
                                        <p>Your stay:</p>
                                        <a href="facebook.com">Get directions</a>
                                    </div>
                                    <div className='hsinfo'>
                                        <p>Dream Hill</p>
                                        <p>Đồng bà, đồng xuân</p>
                                    </div>
                                </div>
                                <div className='payment-infoo'>
                                    <div className='bank'>
                                        <p>Apple Pay</p>
                                    </div>
                                    <div className='status'>
                                        <p>Confirmed</p>
                                    </div>
                                </div>
                                <div className='edit-container'>
                                    <button className="booking-details">Booking details</button>
                                    <button className="edityyy">Edit information</button>
                                </div>
                            </div>
                    </div>
                </div>
)} 
                <div className='sloganContainer'>
                    <p className='slogan'>* Book Perfect Stay</p>
                    <p className='slogan'>For Your Vacation</p>
                </div>
                <div className='bookButtonContainer' onClick={handleClick}>
                    <div className='bookButton'>
                        <div className='main'>
                            <p>Book your <br />stay <br /> ⬊</p>
                        </div>
                    </div>
                </div>
                <div className='goDown' onClick={change}>⬇</div>
            </div>
            <div className="homestay-container">
                <div className="homestay-view">
                    <div className='card-container'>
                        {cardsData.map(card => (
                            <div key={card.id} className='homestay-card'>
                                <div className='rectangle' style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover' }}>
                                    <div className="content-container">
                                        <p className="hs_name">{card.name}</p>
                                        <p className="hs_search">Search</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className='homestay-title'>Unlock the Art of Sophisticated Stays</p>
                    <p className='homestay-titlee'>From 2023</p>
                </div>
                <div className='homestay-review'>
                    <p>We understand that accommodations play
a pivotal role in shaping travel experience,
and that’s why we are dedicated to curating
an exclusive collection of exquisite suites
in the world’s most desirable destinations.</p>
                    <div className='review-container'>
                        <div className='review-score'>4,9 ⭐</div>
                        <div className='review-score'>Guests' Reviewers</div>
                    </div>
                </div>
            </div>
            <div className="AboutUs" id="aboutus" >
                <AboutUs />
            </div>
        </div>
    );
}

export default Landing;
