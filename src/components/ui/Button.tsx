import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'circle';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  
  // Resolve base variant classes
  let variantClass = styles.btnPrimary;
  if (variant === 'secondary') variantClass = styles.btnSecondary;
  else if (variant === 'circle') variantClass = styles.btnCircle;

  const combinedClass = `${styles.btnBase} ${variantClass} ${className}`.trim();

  return (
    <button className={combinedClass} {...props}>
      {icon && iconPosition === 'left' && (
        <span className="btn-icon-left">{icon}</span>
      )}
      
      {children && <span>{children}</span>}
      
      {icon && iconPosition === 'right' && (
        <span className="btn-icon-right">{icon}</span>
      )}
    </button>
  );
}
