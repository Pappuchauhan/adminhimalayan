import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_LINK, CREATE_PACKAGE, VIEW_PACKAGE, CREATE_DESTINATION, VIEW_DESTINATION } from './Constants/Constants';

const AppSidebarNav = () => {
    return (
        <nav id="sidebar" >
            <div className="sidebar-header">
                Brand
            </div>
            <ul className="list-unstyled components text-secondary">
                <li>
                    <Link to={HOME_PAGE_LINK}><i className="fas fa-home"></i> Home Page</Link>
                </li>
                <li>
                    <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-copy"></i> Packages</a>
                    <ul className="collapse list-unstyled" id="pagesmenu">
                        <li>
                            <Link to={CREATE_PACKAGE}><i className="fas fa-file"></i> Create Package</Link>
                        </li>
                        <li>
                            <Link to={VIEW_PACKAGE}><i className="fas fa-file"></i> View Packages</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pagesmenu1" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-copy"></i> Pages</a>
                    <ul className="collapse list-unstyled" id="pagesmenu1">
                        <li>
                            <Link to={CREATE_DESTINATION}><i className="fas fa-file"></i> Create Destination</Link>
                        </li>
                        <li>
                            <Link to={VIEW_DESTINATION}><i className="fas fa-file"></i> View Destination</Link>
                        </li>
                    </ul>
                </li>

            </ul>
        </nav>
    );
};

export default AppSidebarNav;