import './Header.css';
import { useState, useEffect } from 'react';
import { User, Search, ShoppingCart, AlignJustify } from 'lucide-react';

function Header() {
    const [check, setCheck] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [menuOpen, setMenuOpen] = useState(false); 

    useEffect(() => {
        const storedSearchValue = localStorage.getItem('searchValue');
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
            setShowSearch(true); 
        }
        
        handleURLChange();
    }, []);

    useEffect(() => {
        handleURLChange();
    }, [window.location.pathname]);

    const loginStatus = () => {
        if (!check) {
            window.location.href = "/login";
        }
    }
    const handleURLChange = () => {
        if (!window.location.pathname.includes('/result')) {
            localStorage.removeItem('searchValue');
            setShowSearch(false);
            setSearchValue("");
        }
    };

    const handleClick = () => {
        if (!check) {
            alert('Chưa đăng nhập');
        }
    };

    const handleSearchClick = () => {
        if (showSearch && searchValue) {
            localStorage.setItem('searchValue', searchValue);
            window.location.href = "/result";
        } else if (showSearch && !searchValue) {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter' && searchValue) {
            localStorage.setItem('searchValue', searchValue);
            window.location.href = "/result";
        }
    };

    const handleMenuClick = (e, sectionId) => {
        e.preventDefault();
        window.location.href = "/";
        localStorage.setItem('scrollToSection', sectionId);
    };
    
    useEffect(() => {
        const scrollToSection = localStorage.getItem('scrollToSection');
        if (scrollToSection && window.location.pathname === '/') {
            localStorage.removeItem('scrollToSection');
            const section = document.getElementById(scrollToSection);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const handleHomeClick = () => {
        localStorage.removeItem('searchValue'); 
        setSearchValue('');
        setShowSearch(false); 
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    return (
        <div className="navBar">
            <img src="" alt="PROJECT NAME LOGO" /> 
            <div className="hamburger" onClick={toggleMenu}><AlignJustify /></div>
            <ul className={menuOpen ? 'open' : ''}>
                <li><a href="/" onClick={handleHomeClick}>Home</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, 'aboutus')}>About Us</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, 'services')}>Services</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, 'destinations')}>Destinations</a></li>
            </ul>

            <div className="profile-icons">
                {showSearch && (
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={handleSearchKeyPress}
                    />
                )}
                <div className="icon-wrapper" onClick={handleSearchClick}>
                    <Search size={15} />
                </div>
                <div className="icon-wrapper" onClick={loginStatus}>
                    <User size={15} />
                </div>
                <div className="icon-wrapper" onClick={handleClick}>
                    <ShoppingCart size={15} />
                </div>
                <p className="booking" onClick={handleClick}>Booking</p>
            </div>
        </div>
    );
}

export default Header;
