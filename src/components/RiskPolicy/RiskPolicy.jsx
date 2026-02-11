import './RiskPolicy.css';

function RiskPolicy() {
    return (
        <div className="section-border padding-box" id="risk">
            <div className="grid-row">
                <div className="col-span-4" style={{ position: 'relative' }}>
                    <h2>Risk Policy</h2>
                    <p style={{ marginBottom: '24px' }}>Our decision matrix for accepting new profiles.</p>
                    <div
                        className="accent-blur"
                        style={{ left: '-100px', width: '200px', height: '200px' }}
                    />
                </div>
                <div className="col-span-8">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Outcome</th>
                                <th>Criteria &amp; Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cell-label">
                                    <span className="status-tag status-green">We Take</span>
                                </td>
                                <td>
                                    Repeat clients, partner intros, multiple services potential,
                                    transparent Source of Funds/Wealth, readiness for procedures.
                                </td>
                            </tr>
                            <tr>
                                <td className="cell-label">
                                    <span className="status-tag status-yellow">With Conditions</span>
                                </td>
                                <td>
                                    Complex structures, multi-jurisdiction, non-standard transactions.
                                    <br /><br />
                                    <span className="mono-label">Requirements:</span> Higher price,
                                    fixed scope, written risk acknowledgment. No outcome promises.
                                </td>
                            </tr>
                            <tr>
                                <td className="cell-label">
                                    <span className="status-tag status-red">We Decline</span>
                                </td>
                                <td>
                                    "No documents" requests, sanctioned/toxic exposure, deadline
                                    pressure, one-off small tasks, concierge work.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RiskPolicy;
