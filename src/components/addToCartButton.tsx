import React from "react";
import { Button, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useCart } from "../contexts/cartContext";
import type { Product } from "../utils/interfaces";

interface Props {
  product: Product;
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAdd = () => addToCart(product);
  const handleRemove = () => removeFromCart(product.id);

  if (!cartItem) {
    return (
      <Button
        onClick={handleAdd}
        style={{
          border: "2px solid #ff007a",
          color: "#ff007a",
          fontWeight: 600,
          borderRadius: 8,
          width: "100%",
        }}
      >
        ADD
      </Button>
    );
  }

  return (
    <Space.Compact style={{ backgroundColor: "#ff007a", borderRadius: 8, width: "100%" }}>
      <Button
        onClick={handleRemove}
        style={{
          backgroundColor: "#ff007a",
          color: "#fff",
          border: "none",
          fontSize: 16,
          width: 32,
        }}
        icon={<MinusOutlined />}
      />
      <Button
        disabled
        style={{
          backgroundColor: "#ff007a",
          color: "#fff",
          border: "none",
          fontWeight: 600,
          width: 32,
        }}
      >
        {cartItem.quantity}
      </Button>
      <Button
        onClick={handleAdd}
        style={{
          backgroundColor: "#ff007a",
          color: "#fff",
          border: "none",
          fontSize: 16,
          width: 32,
        }}
        icon={<PlusOutlined />}
      />
    </Space.Compact>
  );
};

export default AddToCartButton;
