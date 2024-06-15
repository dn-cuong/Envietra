import { useEffect, useMemo, useState } from "react";
import { MapPinned } from "lucide-react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";

import { fetchSearch } from "../../api/search.js";
import Header from "../../Components/Navbar/Header";
import MoreInfo from "../result/myComponent";

import "./Result.css";

function useSearchQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [ search ]);
}

function Result() {

    const query = useSearchQuery().get("q");

    const { isSuccess, data } = useQuery({
        queryKey: [ "search", query ], queryFn: () => fetchSearch(query)
    });
    // const [rooms, setRooms] = useState(1);
    // const [people, setPeople] = useState(1);
    // const [children, setChildren] = useState(0);
    // const [showSelection, setShowSelection] = useState(false);
    const [ showLeftContent, setShowLeftContent ] = useState(true); // New state for left content visibility
    const [ searchValue, setSearchValue ] = useState("");


    useEffect(() => {
        const storedSearchValue = localStorage.getItem('searchValue');
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
        }
    }, []);

    useEffect(() => {
        if (isSuccess) {
            const homestayQueryResult = data.data.hits.hits;
            console.log(homestayQueryResult);
        }
    }, [ isSuccess ]);

    const toggleLeftContent = () => {
        setShowLeftContent(!showLeftContent);
    };

    const handleHomestayClick = (homestay) => {
        window.location.href = `/result/homestay?id=${homestay}`;
    };
    if (!isSuccess) return <></>;
    else {
        const homestayQueryResult = data.data.hits.hits;
        const homestayCount = homestayQueryResult.length;

        return (
            <>
                <Header searchValue={searchValue}/>
                <div className="container">
                    <div className="content">
                        {showLeftContent && (
                            <div className="left">
                                <div className="left-container">
                                    <div className="filter">
                                        <p className="filter">Filters</p>
                                        <p className="hide" onClick={toggleLeftContent}>Hide</p>
                                    </div>
                                    <br/>
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
                                    <br/><br/>
                                    <p className="tag">Property Type</p><br/><br/>
                                    <p className="tag">Number of guests & rooms</p>
                                    <div>
                                        <MoreInfo/>
                                    </div>
                                    <div className="submit-container">
                                        <button className="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!showLeftContent && (
                            <div className="left-container">
                                <p className="hide" onClick={toggleLeftContent}>Show</p>
                            </div>
                        )}
                        <div className="right">
                            <h2>{homestayCount} Homestay(s) Found</h2>
                            <ul className="accommodation-list">
                                {homestayQueryResult.map((homestay) => {
                                        const {
                                            hotel_districts_hotel_infomation_provinces_wards_hotel_id: homestay_id,
                                            hotel_districts_hotel_infomation_provinces_wards_hotel_name: homestay_name,
                                            hotel_districts_hotel_infomation_provinces_wards_hotel_location: homestay_location
                                        } = homestay._source;
                                        return (
                                            <li key={homestay_id} className="accommodation-item"
                                                onClick={() => handleHomestayClick(homestay_id)}>
                                                <img
                                                    src={""}
                                                    alt={homestay_name}
                                                    className="accommodation-image"
                                                />
                                                <div className="accommodation-details">
                                                    <h3 className="accommodation-name">{homestay_name}</h3>
                                                    <p className="accommodation-address">
                                                        <MapPinned/> {homestay_location}
                                                    </p>
                                                </div>
                                                <div className="accommodation-cost">
                                                    <div
                                                        className="reviews-badge">⭐ {5}</div>
                                                    <p className="accommodation-price">{5} {"vnd"}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Result;
