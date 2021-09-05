export interface IIndexTitleProps {
  title: string;
  total?: number;
  clickHandler?: (idx: number) => void;
  selectedIndex?: number;
  onScreenCount?: number;
  withoutIndex?: true;
}
