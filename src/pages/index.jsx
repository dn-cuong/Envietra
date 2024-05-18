import React, { useState, useEffect } from 'react';
import Header from "../Components/Navbar/Header.jsx";
import { Link } from 'react-router-dom';
import '../pages/Landing.css';
import AboutUs from "../Components/Landing/Components_of_Landing/AboutUs.jsx";

function Landing() {

    useEffect(() => {
        const timer = setTimeout(() => {
            alert('Please log in to continue.');
        }, 3000);

        return () => clearTimeout(timer);
    }, []); 

    const handleClick = () => {
        alert('Chưa đăng nhập');
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

    return (
        <div className="Landing">
            <div className="Home">
                <Header />
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
                <div className='goDown'>⬇</div>
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
            <div className="AboutUs" id="aboutus">
                <AboutUs />
            </div>
        </div>
    );
}

export default Landing;
