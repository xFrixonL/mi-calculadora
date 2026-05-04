import { Button } from '../atoms/Button.js';


interface CalcButtonConfig {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | undefined;
  className?: string | undefined;
}

interface Props {
  onAppend: (val: string) => void;
  onClear: () => void;
  onRemove: () => void;
  onCalculate: () => void;
}

export function CalculatorGrid({ onAppend, onClear, onRemove, onCalculate }: Props) {
  const buttons: CalcButtonConfig[] = [
    { label: 'C', action: onClear, variant: 'secondary' },
    { label: '/', action: () => onAppend('/'), variant: 'secondary' },
    { label: '*', action: () => onAppend('*'), variant: 'secondary' },
    { label: '←', action: onRemove, variant: 'secondary' },
    { label: '7', action: () => onAppend('7'), variant: 'secondary' },
    { label: '8', action: () => onAppend('8'), variant: 'secondary' },
    { label: '9', action: () => onAppend('9'), variant: 'secondary' },
    { label: '-', action: () => onAppend('-'), variant: 'secondary' },
    { label: '4', action: () => onAppend('4'), variant: 'secondary' },
    { label: '5', action: () => onAppend('5'), variant: 'secondary' },
    { label: '6', action: () => onAppend('6'), variant: 'secondary' },
    { label: '+', action: () => onAppend('+'), variant: 'secondary' },
    { label: '1', action: () => onAppend('1'), variant: 'secondary' },
    { label: '2', action: () => onAppend('2'), variant: 'secondary' },
    { label: '3', action: () => onAppend('3'), variant: 'secondary' },
    { label: '=', action: onCalculate, variant: 'primary' },
    { label: '0', action: () => onAppend('0'), variant: 'secondary', className: 'col-span-2' },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
      {buttons.map((btn) => (
        <Button
          key={btn.label}
          variant={btn.variant}
          onClick={btn.action}
          className={btn.className}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
}