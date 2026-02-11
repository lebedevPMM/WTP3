import './ProcessSection.css';

const steps = [
    { number: 1, title: 'Intake', description: 'Quick intake and a base document pack to establish the profile.' },
    { number: 2, title: 'Pre-screen', description: 'Banking & compliance pre-screen. Risks, red flags, and a bankability scenario.' },
    { number: 3, title: 'Proposal', description: "Commercial proposal. Scope, timelines, pricing, terms, what's included and not." },
    { number: 4, title: 'Execution', description: 'We deliver only what matches the approved scenario.' },
];

function ProcessSection() {
    return (
        <div className="grid-row section-border" id="process">
            {/* How It Works */}
            <div className="col-span-8 border-right padding-box">
                <h2><span className="star-icon">✦</span> How It Works</h2>
                <div className="steps-grid">
                    {steps.map((step) => (
                        <div key={step.number}>
                            <span className="step-number">STEP {step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SLA & Communication */}
            <div className="col-span-4 padding-box sla-panel">
                <span className="mono-label">SLA &amp; Communication</span>

                <div className="sla-block">
                    <div className="large-number">20<span className="number-unit">m</span></div>
                    <p>Request receipt confirmation during business hours.</p>
                </div>

                <div className="sla-block">
                    <div className="large-number">48<span className="number-unit">h</span></div>
                    <p>Initial pre-screen verdict after receiving the base pack.</p>
                </div>

                <div style={{ marginTop: '32px' }}>
                    <h3>Updates</h3>
                    <p>Case status updates via CRM/portal or a shared partner chat.</p>
                </div>
            </div>
        </div>
    );
}

export default ProcessSection;
