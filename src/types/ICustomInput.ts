export interface ICustomInput {
  placeholder?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}
