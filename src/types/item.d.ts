export type Item = {
  type: string;
  name: string;
  amount: number;
  product_url?: string;
  ean?: number;
  count?: number;
  vat_rate?: number;
};
