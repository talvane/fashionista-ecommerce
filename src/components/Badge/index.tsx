import React from 'react';

import './styles.scss';

interface BadgeProps {
  discount: string;
}

const Badge: React.FC<BadgeProps> = ({ discount }) => {
  return <span className="badge badge--discount">{`-${discount}`}</span>;
};

export default Badge;
