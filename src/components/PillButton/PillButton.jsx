import './PillButton.css';

function PillButton({ children, href = '#', variant = 'primary', icon, onClick }) {
    const className = `pill-btn${variant === 'secondary' ? ' secondary' : ''}`;

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
            {icon && <span className="icon-circle">{icon}</span>}
        </a>
    );
}

export default PillButton;
