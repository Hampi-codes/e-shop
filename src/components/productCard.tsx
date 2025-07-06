import React from "react";
import { Card, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./addToCartButton";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  category,
  description,
}) => {
  const navigvate = useNavigate();
  return (
    <Card
      data-testid="product-card"
      style={{ width: "100%", marginBottom: 16 }}
      cover={
        <img
          alt={title}
          src={image}
          style={{ height: 200, objectFit: "contain", padding: "1rem" }}
        />
      }
    >
      <Card.Meta
        data-testid="product-title"
        title={title}
        description={
          <span data-testid="product-price">₹{price.toFixed(2)}</span>
        }
      />
      <Row gutter={[8, 8]} style={{ marginTop: 12 }}>
        <Col span={16} xs={12} lg={14} xxl={18}>
          <Button
            type="primary"
            block
            data-testid="view-details-button"
            onClick={(e) => {
              e.stopPropagation();
              navigvate(`/product/${id}/details`);
            }}
          >
            View Details
          </Button>
        </Col>
        <Col span={8} xs={12} lg={10} xxl={6}>
          <AddToCartButton
            product={{ id, title, image, price, category, description }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
