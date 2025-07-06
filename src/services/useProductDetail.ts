import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import type { Product } from "../utils/interfaces";

export const useProductDetail = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(res.data);
      } catch (err: any) {
        console.error("Error fetching product detail:", err);
        message.error("Failed to fetch product details.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading };
};
