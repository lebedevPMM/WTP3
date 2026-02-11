import './PartnerModes.css';

function PartnerModes() {
    return (
        <div className="grid-row section-border">
            {/* Partnership Modes */}
            <div className="col-span-6 border-right padding-box">
                <span className="mono-label">02 — Partnership Modes</span>
                <ul className="feature-list" style={{ marginTop: '24px' }}>
                    <li className="feature-item">
                        <div>
                            <h3>Referral Mode</h3>
                            <p>You make the intro, we run delivery. Fixed commission.</p>
                        </div>
                        <span className="icon-circle" style={{ border: '1px solid var(--text-main)' }}>→</span>
                    </li>
                    <li className="feature-item">
                        <div>
                            <h3>White-label Mode</h3>
                            <p>You lead client-facing; we execute back-office.</p>
                        </div>
                        <span className="icon-circle" style={{ border: '1px solid var(--text-main)' }}>→</span>
                    </li>
                </ul>
            </div>

            {/* Pre-screen Deliverables */}
            <div className="col-span-6 padding-box">
                <span className="mono-label">03 — Pre-screen Deliverables</span>
                <ul className="feature-list" style={{ marginTop: '24px' }}>
                    <li className="feature-item">
                        <h3>Risk Score &amp; Red-flag List</h3>
                        <span>01</span>
                    </li>
                    <li className="feature-item">
                        <h3>Bankability Scenario</h3>
                        <span>02</span>
                    </li>
                    <li className="feature-item">
                        <h3>Package Proposal</h3>
                        <span>03</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PartnerModes;
