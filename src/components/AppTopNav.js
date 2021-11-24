import React from 'react';

const AppTopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white">                
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ms-auto">
                 
                <li className="nav-item dropdown">
                    <div className="nav-dropdown">
                        <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user"></i> <span>Admin</span> <i style={{'font-size': '.8em'}} className="fas fa-caret-down"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                            <ul className="nav-list">
                                <li><a href="" className="dropdown-item"><i className="fas fa-address-card"></i> Profile</a></li>
                                <li><a href="" className="dropdown-item"><i className="fas fa-envelope"></i> Messages</a></li>
                                <li><a href="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a href="" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default AppTopNav;