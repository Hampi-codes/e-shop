import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetail } from "../services/useProductDetail";
import { Spin, Typography, Card, Image, Row, Col } from "antd";
import { backIcon } from "../assets";
import AddToCartButton from "../components/addToCartButton";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading } = useProductDetail(id);

  if (loading || !product) return <Spin style={{ marginTop: 100 }} />;

  return (
    <div>
      <img
        data-testid="back-button"
        src={backIcon}
        alt={"Back"}
        role="button"
        onClick={() => navigate(-1)}
        style={{ width: 32, height: 32, cursor: "pointer" }}
      />

      <Card style={{ maxWidth: 600, margin: "0 auto" }} loading={loading}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            style={{ height: 300, objectFit: "contain" }}
          />
        </div>
        <Typography.Title
          level={4}
          style={{ marginTop: 16 }}
          data-testid="product-title"
        >
          {product.title}
        </Typography.Title>
        <Typography.Paragraph data-testid="product-description">
          {product.description}
        </Typography.Paragraph>
        <Typography.Text strong data-testid="product-price">
          Price: ₹{product.price.toFixed(2)}
        </Typography.Text>
        <Row justify="end">
          <Col xs={24} md={12} xl={8} xxl={6}>
            <AddToCartButton product={product} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetail;
