export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
};

export type CreateProductType = Omit<ProductType, 'id'>;
