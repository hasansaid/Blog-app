import React, { useState } from "react";
import "./Navbar.css";

const Sortby = () => {
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
              Sort By
              <span className="fas fa-caret-down">
                <i class="bi bi-sort-down-alt"></i>
              </span>
            </div>
            {isActive && (
              <div className="dropdown-content">
                <div className="dropdown-item">A'dan Z'ye sırala</div>
                <div className="dropdown-item">Z'dan A'ye sırala</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sortby;
