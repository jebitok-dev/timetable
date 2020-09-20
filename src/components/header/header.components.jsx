import React from 'react';
import './header.styles.scss';

function Header() {
    return (
        <div className="header">
            <img src="../../public/images/schoolbs.png" alt="school bus"/>
            <h2>ELIMU SCHOOL TIMETABLE</h2>
            <img src="../../public/images/classroom.png" alt="class-rooms"/>
        </div>
    )
}

export default Header;