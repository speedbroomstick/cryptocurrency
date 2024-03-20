export interface IProductItem {
    icon?: string;
    name?: string;
    cost?: number;
    count: number;
    setCount?(value: 1 | 10): void;
}