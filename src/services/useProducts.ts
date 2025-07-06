import { message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Product } from "../utils/interfaces";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await axios.get<string[]>(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(res.data);
      } catch (err: any) {
        message.error("Failed to fetch product categories.");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export const useProductsByCategories = (selectedCategories: string[]) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let allProducts: Product[] = [];

        if (selectedCategories.length === 0) {
          const res = await axios.get<Product[]>(
            "https://fakestoreapi.com/products"
          );
          allProducts = res.data;
        } else {
          const responses = await Promise.all(
            selectedCategories.map((cat) =>
              axios.get<Product[]>(
                `https://fakestoreapi.com/products/category/${cat}`
              )
            )
          );
          allProducts = responses.flatMap((res) => res.data);
        }

        setProducts(allProducts);
      } catch (err: any) {
        message.error("Failed to fetch products.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories]);

  return { products, loading };
};
