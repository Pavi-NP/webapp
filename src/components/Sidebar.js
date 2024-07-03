import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Link to="/page3">Page 3</Link>
            <Link to="/page4">Page 4</Link>
            <Link to="/page5">Page 5</Link>
        </nav>
    );
}

export default Sidebar;
