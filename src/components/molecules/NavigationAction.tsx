import { Button } from '../atoms/Button.js';

interface NavigationActionProps {
  onClick: () => void;
  label?: string | undefined; 
}

export function NavigationAction({ onClick, label = "Back to Menu" }: NavigationActionProps) {
  return (
    <div className="mt-10 flex justify-center w-full">
      <Button variant="ghost" onClick={onClick}>
        {label}
      </Button>
    </div>
  );
}