import React from 'react';

function Footer(){
    return (<div className="footer">
        <div className="footer-content">
        <p style={{ padding:'15px'}}>&copy; {(new Date().getFullYear())} Expense Tracker</p>
        <nav >
        <a href="https://github.com/JoyBoyIsHere-D/expense-tracker" target="_blank" rel="noopener noreferrer">Github Repo</a>
        </nav>       
      </div>
    </div>);
}

export default Footer;