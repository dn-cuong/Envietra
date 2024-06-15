import "./Header.css";
import { useEffect, useMemo, useState } from "react";
import { AlignJustify, Search, ShoppingCart, User } from "lucide-react";
import { useLocation } from "react-router";

function useSearchQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [ search ]);
}

function Header() {
    const searchQuery = useSearchQuery();
    const [ check, setCheck ] = useState(false);
    const [ showSearch, setShowSearch ] = useState(false);
    const [ searchValue, setSearchValue ] = useState("");
    const [ menuOpen, setMenuOpen ] = useState(false);

    useEffect(() => {
        const storedSearchValue = searchQuery.get("q");
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
            setShowSearch(true);
        }

        handleURLChange();
    }, []);

    useEffect(() => {
        handleURLChange();
    }, [ window.location.pathname ]);

    const loginStatus = () => {
        if (!check) {
            window.location.href = "/login";
        }
    };
    const handleURLChange = () => {
        if (!window.location.pathname.includes(`/result`)) {
            setShowSearch(false);
            setSearchValue("");
        }
    };

    const handleClick = () => {
        if (localStorage.getItem("bookedHomestays")) {
            window.location.href = "/manage_booking";
        }
    };

    const handleSearchClick = () => {
        if (showSearch && searchValue) {
            window.location.href = `/result?q=${searchValue}`;
        } else if (showSearch && !searchValue) {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter" && searchValue) {
            window.location.href = `/result?q=${searchValue}`;
        }
    };

    const handleMenuClick = (e, sectionId) => {
        e.preventDefault();
        window.location.href = "/";
        localStorage.setItem("scrollToSection", sectionId);
    };

    useEffect(() => {
        const scrollToSection = localStorage.getItem("scrollToSection");
        if (scrollToSection && window.location.pathname === "/") {
            localStorage.removeItem("scrollToSection");
            const section = document.getElementById(scrollToSection);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const handleHomeClick = () => {
        localStorage.removeItem("searchValue");
        setSearchValue("");
        setShowSearch(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navBar">
            <img src="" alt="PROJECT NAME LOGO"/>
            <div className="hamburger" onClick={toggleMenu}><AlignJustify/></div>
            <ul className={menuOpen ? "open" : ""}>
                <li><a href="/" onClick={handleHomeClick}>Home</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, "aboutus")}>About Us</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, "services")}>Services</a></li>
                <li><a href="/" onClick={(e) => handleMenuClick(e, "destinations")}>Destinations</a></li>
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
                    <Search size={15}/>
                </div>
                <div className="icon-wrapper" onClick={loginStatus}>
                    <User size={15}/>
                </div>
                <div className="icon-wrapper" onClick={handleClick}>
                    <ShoppingCart size={15}/>
                </div>
                <p className="booking" onClick={handleClick}>Booking</p>
            </div>
        </div>
    );
}

export default Header;
