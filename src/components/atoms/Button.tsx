import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | undefined;
  className?: string | undefined;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = {
    primary: "bg-black text-white px-4 py-2 rounded hover:bg-gray-800",
    secondary: "bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300",
    ghost: "underline text-gray-500 hover:text-black"
  };

  const variantStyle = styles[variant as keyof typeof styles] || styles.primary;

  return (
    <button 
      className={`${variantStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}