import './CatalogGrid.css';

const bundles = [
    {
        title: 'Banking + Setup',
        description: 'Company and license aligned to scenario, KYC pack, submission, operational readiness.',
    },
    {
        title: 'Residency + Banking',
        description: 'Residency setup and personal account as one integrated track with control.',
    },
    {
        title: 'Operations Retainer',
        description: 'Accounting, taxes, ESR/substance, ongoing support for regulator requests.',
    },
    {
        title: 'Asset & Family',
        description: 'Wills, foundations, real estate deals, support for large purchases.',
    },
];

function CatalogGrid() {
    return (
        <div className="section-border" id="catalog">
            <div className="padding-box-sm" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="mono-label">04 — Partner Bundles</span>
            </div>
            <div className="catalog-grid">
                {bundles.map((b) => (
                    <div className="catalog-item" key={b.title}>
                        <h3>{b.title}</h3>
                        <p>{b.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogGrid;
