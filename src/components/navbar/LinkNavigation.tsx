import { NavLink } from 'react-router-dom';

interface LinkNavigationProps {
    to: string;
    label: string;
    icon: React.ReactNode;
    end?: boolean;
}

export default function LinkNavigation({ to, label, icon, end }: LinkNavigationProps) {
  return (
    // @ts-ignore
    <NavLink className={({ isActive }) => isActive? "nav_item active": 'nav_item'} to={to} end={end}>
      {icon}
      <span className="text">{label}</span>
    </NavLink>
  )
}
