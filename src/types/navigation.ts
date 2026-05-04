export type View = "home" | "addition" | "calculator" | "catalog" | "details";

export interface NavigationProps {
  goBack: () => void;
}