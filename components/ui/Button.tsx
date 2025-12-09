import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-dark hover:shadow-lg border border-gold",
    outline: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white",
    white: "bg-white text-gold hover:bg-gray-100 hover:shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};