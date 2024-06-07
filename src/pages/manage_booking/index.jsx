import { useEffect, useState } from "react";
import Header from "../../Components/Navbar/Header";
import "../manage_booking/index.css";
import { MapPinned } from 'lucide-react';

function ManageBooking() {
    const [homestays, setHomestays] = useState([]);

    useEffect(() => {
        const storedHomestays = JSON.parse(localStorage.getItem("bookedHomestays")) || [];
        setHomestays(storedHomestays);
    }, []);

    const cancelTrip = (index) => {
        const updatedHomestays = homestays.filter((_, i) => i !== index);
        setHomestays(updatedHomestays);
        localStorage.setItem("bookedHomestays", JSON.stringify(updatedHomestays));
    };

    return (
        <div className="manage_booking_container">
            <Header />
            
            {homestays.length > 0  && (
                <div className="list_homestays">
                    <ul className="booked_homestays_container">
                        {homestays.map((homestay, index) => (
                            <li className="item" key={index}>
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/395730895_165357696648605_8174334979229656714_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGIB-02MebZrT_5RztFvi3lQfKQ56QHc5pB8pDnpAdzmjKj9pnjVoavzVghHH3vSlm4PngPxr6k7eiqg63Onptl&_nc_ohc=WCcTzHxgdNoQ7kNvgFNAaW7&_nc_ht=scontent.fhan2-3.fna&oh=00_AYDRd_HMjRWv5guZt0E2o4d2gT5jgTdyumXgWHP1VBn0Hg&oe=6664F3F5" alt="" />
                                <div className="info_homestay">
                                    <div className="basic_info">
                                        <p style={{fontWeight: "bold", fontSize: "1.25rem"}}>{homestay.name}</p>
                                        <p style={{display: "flex", color:"#3C6553"}}><MapPinned />{homestay.address}</p>
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
                                            <div className="hour">22 hours left to reconsider</div>
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
