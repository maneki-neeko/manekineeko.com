import React from 'react';

interface LogoMonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const LogoMonogram: React.FC<LogoMonogramProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}
      aria-label="Maneki Neeko Logo"
    >
      <img
        src="/MANEKINEEKO.webp"
        alt="Maneki Neeko"
        className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200 select-none"
        draggable={false}
      />
    </div>
  );
};

export default LogoMonogram;
