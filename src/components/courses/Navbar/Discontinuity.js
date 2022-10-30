import React,{useState} from 'react';
import "./Navbar.css";


const Discontinuity = () => {
 
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
              discontinuity
              <span className="fas fa-caret-down">
                <i class="bi bi-sort-down-alt"></i>
              </span>
            </div>
           
                 <div className="card-header"></div>
                 {isActive && (
                   <div className="dropdown-content">
                     <div
                       className="dropdown-item"
                       
                     >
                       0-1
                     </div>
                     <div className="dropdown-item">0-2</div>
                     <div className="dropdown-item">0-3</div>
                   </div>
                 )}
               </div>
            
               
        </div>
      </div>
      </div>
      
  );
}

export default Discontinuity;
