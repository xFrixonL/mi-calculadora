import type { ReactNode } from 'react';
import { NavigationAction } from '../molecules/NavigationAction.js';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
  backLabel?: string | undefined; 
}

export function PageLayout({ title, children, onBack, backLabel }: PageLayoutProps) {
  return (
    <div className="main-container p-6 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="w-full max-w-4xl flex-1">
        {children}
      </div>
      <NavigationAction 
        onClick={onBack} 
        {...(backLabel ? { label: backLabel } : {})} 
      />
    </div>
  );
}