import React,{useState} from 'react'
import "./Navbar.css";
const ıd = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="container-navbar">
        <div className="dropdown">
          <div className="down">
            <div
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              Id
              <span className="fas fa-caret-down">
                <i class="bi bi-sort-down-alt"></i>
              </span>
            </div>
            {isActive && (
              <div className="dropdown-content">
                <div className="dropdown-item">Türkçe</div>
                <div className="dropdown-item">ingilizce</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ıd
