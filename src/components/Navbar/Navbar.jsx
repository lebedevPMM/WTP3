import './Navbar.css';
import PillButton from '../PillButton/PillButton';

function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                <span className="star-icon">✦</span>WTP Partner
            </div>
            <div className="nav-links">
                <a href="#process" className="nav-item">01 Process</a>
                <a href="#risk" className="nav-item">02 Risk Policy</a>
                <a href="#catalog" className="nav-item">03 Catalog</a>
                <a href="#contact" className="nav-item">04 Contact</a>
            </div>
            <div className="nav-actions">
                <PillButton href="#" variant="secondary">Log In</PillButton>
                <PillButton href="#" icon="↗">Start Case</PillButton>
            </div>
        </nav>
    );
}

export default Navbar;
