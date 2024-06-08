import { useEffect, useState } from "react";
import Header from "../../Components/Navbar/Header";
import "../manage_booking/index.css";
import { MapPinned } from 'lucide-react';

function ManageBooking() {
    const [homestays, setHomestays] = useState([]);
    const [activeTab, setActiveTab] = useState("Pending");

    useEffect(() => {
        const storedHomestays = JSON.parse(localStorage.getItem("bookedHomestays")) || [];
        const storedCountdowns = JSON.parse(localStorage.getItem("homestayCountdowns")) || {};
        const updatedHomestays = storedHomestays.map(homestay => {
            const countdown = storedCountdowns[homestay.name] !== undefined ? storedCountdowns[homestay.name] : 86400;
            const status = countdown > 0 ? 'Pending' : 'Confirmed';
            return { ...homestay, countdown, status };
        });
        setHomestays(updatedHomestays);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setHomestays(prevHomestays => {
                const updatedHomestays = prevHomestays.map(homestay => {
                    if (homestay.countdown > 0 && homestay.status === 'Pending') {
                        return { ...homestay, countdown: homestay.countdown - 1 };
                    } else if (homestay.countdown === 0 && homestay.status === 'Pending') {
                        return { ...homestay, status: 'Confirmed' };
                    }
                    return homestay;
                });

                const countdowns = updatedHomestays.reduce((acc, homestay) => {
                    acc[homestay.name] = homestay.countdown;
                    return acc;
                }, {});

                localStorage.setItem("homestayCountdowns", JSON.stringify(countdowns));
                localStorage.setItem("bookedHomestays", JSON.stringify(updatedHomestays));
                return updatedHomestays;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${minutes}m ${secs}s`;
    };

    const cancelTrip = (index) => {
        const updatedHomestays = homestays.filter((_, i) => i !== index);
        setHomestays(updatedHomestays);

        const countdowns = updatedHomestays.reduce((acc, homestay) => {
            acc[homestay.name] = homestay.countdown;
            return acc;
        }, {});
        
        localStorage.setItem("bookedHomestays", JSON.stringify(updatedHomestays));
        localStorage.setItem("homestayCountdowns", JSON.stringify(countdowns));
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const filteredHomestays = homestays.filter(homestay => homestay.status === activeTab);

    return (
        <div className="manage_booking_container">
            <Header />
            <ul className="control">
                {["Pending", "Confirmed", "Ongoing trip", "Mission Completed", "Booking cancel"].map((tab) => (
                    <li
                        key={tab}
                        className={`child ${activeTab === tab ? "active" : ""}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            {filteredHomestays.length > 0 && (
                <div className="list_homestays">
                    <ul className="booked_homestays_container">
                        {filteredHomestays.map((homestay, index) => (
                            <li className="item" key={index}>
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/395730895_165357696648605_8174334979229656714_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGIB-02MebZrT_5RztFvi3lQfKQ56QHc5pB8pDnpAdzmjKj9pnjVoavzVghHH3vSlm4PngPxr6k7eiqg63Onptl&_nc_ohc=WCcTzHxgdNoQ7kNvgFNAaW7&_nc_ht=scontent.fhan2-3.fna&oh=00_AYDRd_HMjRWv5guZt0E2o4d2gT5jgTdyumXgWHP1VBn0Hg&oe=6664F3F5" alt="" />
                                <div className="info_homestay">
                                    <div className="basic_info">
                                        <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{homestay.name}</p>
                                        <p style={{ display: "flex", color: "#3C6553" }}><MapPinned />{homestay.address}</p>
                                    </div>
                                    <div className="price_info">
                                        <p>{homestay.reviews}</p>
                                        <p>{homestay.price}₫</p>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="detail">
                                    <div className="details_container">
                                        <div className="top_section">
                                            <div className="container">
                                                <div className="subject">Check-in Check-out</div>
                                                <div>{homestay.checkInDate} {homestay.checkOutDate}</div>
                                            </div>
                                            <div className="container">
                                                <div className="subject">Guests - Rooms</div>
                                                <div>8 people 3 rooms</div>
                                            </div>
                                            <div className="container">
                                                <div className="subject">Service Pack</div>
                                                <div>Something something</div>
                                            </div>
                                        </div>
                                        <div className="bottom_section">
                                            {homestay.status === 'Pending' && <div className="hour">{formatTime(homestay.countdown)} left to reconsider</div>}
                                            <button className="cancel" onClick={() => cancelTrip(index)}>Cancel this trip</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ManageBooking;