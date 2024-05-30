import { useState, useEffect } from 'react';
import './Result.css';
import Header from '../../Components/Navbar/Header';
import MoreInfo from '../result/myComponent';
import { MapPinned } from 'lucide-react';
function Result() {
    const [rooms, setRooms] = useState(1);
    const [people, setPeople] = useState(1);
    const [children, setChildren] = useState(0);
    const [showSelection, setShowSelection] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const storedSearchValue = localStorage.getItem('searchValue');
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
        }
    }, []);

    const handleRoomsChange = (delta) => {
        setRooms((prevRooms) => Math.max(1, prevRooms + delta));
    };

    const handlePeopleChange = (delta) => {
        setPeople((prevPeople) => Math.max(1, prevPeople + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren((prevChildren) => Math.max(0, prevChildren + delta));
    };

    const toggleSelection = () => {
        setShowSelection(!showSelection);
    };

    const accommodations = [
        {
            id: 1,
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/398621948_169702546214120_6427517112403794095_n.jpg?_nc_cat=111&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtfvceTT2BgjCgMi3CxAyjCyv5z_1F8gELK_nP_UXyAaUyGmfvcdYoyjYq_SUT4qJ-UcQRr8Z5SQJaSuqzulfu&_nc_ohc=xoeA7aD0tC0Q7kNvgFwowuu&_nc_ht=scontent.fhan5-10.fna&oh=00_AYCB25EPhg0UWr0Em3gafd1MrIDxRFGkRZ1A8xO-s1Tamg&oe=664EA96B",
            name: "Dream Hill - Sườn đồi mộng mơ",
            address: "Ngõ Suối, thôn Đồng Bồ, xã Đông Xuân, h.Quốc Oai, Hà Nội",
            price: "200.000",
            currency: "₫",
            reviews: "⭐ 4.5",
        },
        {
            id: 2,
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/398621948_169702546214120_6427517112403794095_n.jpg?_nc_cat=111&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtfvceTT2BgjCgMi3CxAyjCyv5z_1F8gELK_nP_UXyAaUyGmfvcdYoyjYq_SUT4qJ-UcQRr8Z5SQJaSuqzulfu&_nc_ohc=xoeA7aD0tC0Q7kNvgFwowuu&_nc_ht=scontent.fhan5-10.fna&oh=00_AYCB25EPhg0UWr0Em3gafd1MrIDxRFGkRZ1A8xO-s1Tamg&oe=664EA96B",
            name: "Dream  - Sườn đồi mộng mơ",
            address: "Ngõ Suối, thôn Đồng Bồ, xã Đông Xuân, h.Quốc Oai, Hà Nội",
            price: "100.000",
            currency: "₫",
            reviews: "⭐ 4.5",
        },
        {
            id: 3,
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/398621948_169702546214120_6427517112403794095_n.jpg?_nc_cat=111&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtfvceTT2BgjCgMi3CxAyjCyv5z_1F8gELK_nP_UXyAaUyGmfvcdYoyjYq_SUT4qJ-UcQRr8Z5SQJaSuqzulfu&_nc_ohc=xoeA7aD0tC0Q7kNvgFwowuu&_nc_ht=scontent.fhan5-10.fna&oh=00_AYCB25EPhg0UWr0Em3gafd1MrIDxRFGkRZ1A8xO-s1Tamg&oe=664EA96B",
            name: "Dream Hill - Sườn đồi mộng mơ",
            address: "Ngõ Suối, thôn Đồng Bồ, xã Đông Xuân, h.Quốc Oai, Hà Nội",
            price: "200.000",
            currency: "₫",
            reviews: "⭐ 4.5",
        },
        {
            id: 4,
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/398621948_169702546214120_6427517112403794095_n.jpg?_nc_cat=111&_nc_cb=99be929b-2300bf0b&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtfvceTT2BgjCgMi3CxAyjCyv5z_1F8gELK_nP_UXyAaUyGmfvcdYoyjYq_SUT4qJ-UcQRr8Z5SQJaSuqzulfu&_nc_ohc=xoeA7aD0tC0Q7kNvgFwowuu&_nc_ht=scontent.fhan5-10.fna&oh=00_AYCB25EPhg0UWr0Em3gafd1MrIDxRFGkRZ1A8xO-s1Tamg&oe=664EA96B",
            name: "Hill - Sườn đồi mộng mơ",
            address: "Ngõ Suối, thôn Đồng Bồ, xã Đông Xuân, h.Quốc Oai, Hà Nội",
            price: "200.000",
            currency: "₫",
            reviews: "⭐ 4.5",
        },
    ];

    const homestayCount = accommodations.length;

    const handleHomestayClick = (homestay) => {
        localStorage.setItem('selectedHomestayId', homestay.id);
        window.location.href = `/result/homestay?id=${homestay.id}`;
    };

    return (
        <>
            <Header searchValue={searchValue} />
            <div className="container">
                <div className="content">
                    <div className="left">
                        <div className="left-container">
                            <div className="filter">
                            <p className="filter">Filters</p>
                            <p>Hide</p>
                            </div>
                        
                            <br />
                            <p className="tag">Price</p>
                            <input
                                type="number"
                                placeholder="From"
                                id="price-from"
                                className="price-input"
                            />
                            <input
                                type="number"
                                placeholder="To"
                                id="price-to"
                                className="price-input"
                            />
                            <br /><br />
                            <p className="tag">Property Type</p><br /><br />
                            <p className="tag">Number of guests & rooms</p>
                            <div>
                                <MoreInfo />
                            </div>
                            <div className="submit-container">
                                <button className="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h2>{homestayCount} Homestay(s) Found</h2>
                        <ul className="accommodation-list">
                            {accommodations.map((accommodation) => (
                                <li key={accommodation.id} className="accommodation-item" onClick={() => handleHomestayClick(accommodation)}>
                                    <div className="reviews-badge">{accommodation.reviews}</div>
                                    <img
                                        src={accommodation.image}
                                        alt={accommodation.name}
                                        className="accommodation-image"
                                    />
                                    <div className="accommodation-details">
                                        <h3 className="accommodation-name">{accommodation.name}</h3>
                                        <p className="accommodation-address"><MapPinned/> {accommodation.address}</p>
                                        <p className="accommodation-price">{accommodation.price} {accommodation.currency}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;
