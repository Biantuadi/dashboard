import { Link } from 'react-router-dom';

interface LinkNavigationProps {
    to: string;
    label: string;
    icon: React.ReactNode;
}

export default function LinkNavigation({ to, label, icon }: LinkNavigationProps) {
  return (
    <Link className={`nav_item ${location.pathname === to ? 'active' : ''}`} to={to}>
      {icon}
      <span className="text">{label}</span>
    </Link>
  )
}


