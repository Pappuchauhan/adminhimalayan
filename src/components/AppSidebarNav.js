import React from 'react';


const AppSidebarNav = () => {
    return (
        <nav id="sidebar" >
        <div className="sidebar-header">
            Brand
        </div>
        <ul className="list-unstyled components text-secondary">
            <li>
                <a href="dashboard.html"><i className="fas fa-home"></i> Home Page</a>
            </li>
            <li>
                <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-copy"></i> Packages</a>
                <ul className="collapse list-unstyled" id="pagesmenu">
                    <li>
                        <a href="blank.html"><i className="fas fa-file"></i> Create Package</a>
                    </li>
                    <li>
                        <a href="404.html"><i className="fas fa-file"></i> View Packages</a>
                    </li>
                </ul>
            </li>
            
        </ul>
    </nav>
    );
};

export default AppSidebarNav;