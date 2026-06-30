/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: "tortas" | "cupcakes" | "bocaditos" | "cafe";
  description: string;
  price: number;
  image: string;
  tagline?: string;
  ingredients?: string[];
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  customText?: string;
  selectedSize?: string;
}

export interface CustomCake {
  size: {
    id: string;
    name: string;
    portions: string;
    price: number;
  };
  biscuit: {
    id: string;
    name: string;
    description: string;
  };
  filling: {
    id: string;
    name: string;
    description: string;
  };
  theme: {
    id: string;
    name: string;
    color: string;
    description: string;
  };
  topperText: string;
}
