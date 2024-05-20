import React, { useState } from 'react';
import './MoreInfo.css';

function MoreInfo() {
  const [rooms, setRooms] = useState(1);
  const [people, setPeople] = useState(1);
  const [children, setChildren] = useState(0);
  const [showSelection, setShowSelection] = useState(false);

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

  return (
    <div className="MoreInfo">
      <div className="dropdown-container">
        <p onClick={toggleSelection}>
          {rooms} rooms, {people + children} people 
        </p>

        <div className={`selection-content ${showSelection ? 'show' : ''}`}>
          <div className="input-container">
            <div className="input-label">
              <label htmlFor="rooms">Rooms</label>
            </div>
            <div className="input-controls">
              <button onClick={() => handleRoomsChange(-1)}>-</button>
              <input type="number" id="rooms" value={rooms} readOnly />
              <button onClick={() => handleRoomsChange(1)}>+</button>
            </div>
          </div>

          <div className="input-container">
            <div className="input-label">
              <label htmlFor="people">Adults</label>
              <span>Ages 18 or above</span>
            </div>
            <div className="input-controls">
              <button onClick={() => handlePeopleChange(-1)}>-</button>
              <input type="number" id="people" value={people} readOnly />
              <button onClick={() => handlePeopleChange(1)}>+</button>
            </div>
          </div>

          <div className="input-container">
            <div className="input-label">
              <label htmlFor="children">Children</label>
              <span>Ages 0-17</span>
            </div>
            <div className="input-controls">
              <button onClick={() => handleChildrenChange(-1)}>-</button>
              <input type="number" id="children" value={children} readOnly />
              <button onClick={() => handleChildrenChange(1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
