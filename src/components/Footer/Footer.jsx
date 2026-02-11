import './Footer.css';
import PillButton from '../PillButton/PillButton';

function Footer() {
    return (
        <div className="footer-section" id="contact">
            <div>
                <h2>Ready to start?</h2>
                <div className="footer-actions">
                    <PillButton href="#">Submit Case</PillButton>
                    <PillButton href="#" variant="secondary">Request Partner Kit</PillButton>
                </div>
            </div>
            <div className="footer-contact">
                <p className="mono-label">Contact</p>
                <p className="contact-link" style={{ color: 'var(--text-main)' }}>email@wtp.ae</p>
                <p className="contact-link" style={{ color: 'var(--text-main)' }}>@wtp_telegram</p>
            </div>
        </div>
    );
}

export default Footer;
