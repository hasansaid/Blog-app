import React, {useState} from 'react';
import './Navbar.css';

const Level = () => {
  const [isActive, setIsActive] = useState (false);
  return (
    <div>
      <div className="container-navbar">
        <div className="dropdown">
          <div className="down">
            <div
              className="dropdown-btn"
              onClick={e => setIsActive (!isActive)}
            >
              Level
              <span className="fas fa-caret-down">
                <i class="bi bi-sort-down-alt" />
              </span>
            </div>
            {isActive &&
              <div className="dropdown-content">
                <div className="dropdown-item">Başlangıçtan</div>
                <div className="dropdown-item">Sondan</div>
                <div className="dropdown-item">Ortadan</div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
