import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [check, setCheck] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleClick = () => {
        if (!check) {
            alert('Chưa đăng nhập');
        }
    };

    const handleSearchClick = () => {
        if (showSearch && searchValue) {
            // Navigate to the search results page or perform the search
            window.location.href = `/search?query=${searchValue}`;
        } else if (showSearch && !searchValue) {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };

    return (
        <div className="navBar">
            <img src="" alt="PROJECT NAME LOGO" />

            <ul>
                <li><a href="">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Destinations</a></li>
            </ul>

            <div className="profile-icons">
                {showSearch && (
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                )}
                <div className="icon-wrapper" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                </div>
                <div className="icon-wrapper" onClick={handleClick}>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
                <p className="booking" onClick={handleClick}>Booking</p>
            </div>
        </div>
    );
}

export default Header;
