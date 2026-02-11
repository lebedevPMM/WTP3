import './ValueGrid.css';

const values = [
    {
        title: 'Verdict',
        description: 'Fast case verdict before any spend. GO / GO with conditions / NO-GO.',
    },
    {
        title: 'Scenario',
        description: 'Which banks and why, the requirements, the route, and the document list.',
    },
    {
        title: 'Boundaries',
        description: "We don't promise what we can't control. Banks & regulators make final decisions.",
    },
    {
        title: 'Protection',
        description: 'The partner owns the client. Contact stays within agreed perimeter.',
    },
];

function ValueGrid() {
    return (
        <div className="section-border">
            <div className="padding-box-sm border-bottom" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="mono-label">01 — What you get as a partner</span>
            </div>
            <div className="value-grid">
                {values.map((v) => (
                    <div className="value-card" key={v.title}>
                        <h3>{v.title}</h3>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ValueGrid;
