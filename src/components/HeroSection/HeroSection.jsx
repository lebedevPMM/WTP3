import './HeroSection.css';
import PillButton from '../PillButton/PillButton';

function HeroSection() {
    return (
        <header className="hero-section section-border">
            <div className="accent-blur" style={{ right: '-50px', top: '-50px' }} />
            <div className="grid-row hero-content">
                <div className="col-span-8">
                    <span className="mono-label">Bankability &amp; Compliance First</span>
                    <h1>
                        We don't start with company registration. We start with one decision:{' '}
                        <br />
                        <span className="gradient-accent">"Will a bank accept this?"</span>
                    </h1>
                </div>
                <div className="col-span-4 padding-box-sm">
                    <p>
                        WTP takes clients through bankability and compliance first, then
                        executes transactions and ongoing support in the UAE.
                    </p>
                    <br />
                    <PillButton href="#" icon="↓">
                        Submit case for pre-screen
                    </PillButton>
                </div>
            </div>
        </header>
    );
}

export default HeroSection;
