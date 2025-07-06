import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetail } from "../services/useProductDetail";
import { Spin, Typography, Card, Image } from "antd";
import { backIcon } from "../assets";
import AddToCartButton from "../components/addToCartButton";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  // const { addToCart } = useCart();
  const navigate = useNavigate();
  const { product, loading } = useProductDetail(id);

  if (loading || !product) return <Spin style={{ marginTop: 100 }} />;

  return (
    <div>
      <img
        src={backIcon}
        alt={"Back"}
        role="button"
        onClick={() => navigate(-1)}
        style={{ width: 50, height: 50, cursor: "pointer" }}
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
        <Typography.Title level={4} style={{ marginTop: 16 }}>
          {product.title}
        </Typography.Title>
        <Typography.Paragraph>{product.description}</Typography.Paragraph>
        <Typography.Text strong>
          Price: ₹{product.price.toFixed(2)}
        </Typography.Text>
        <AddToCartButton product={product} />
      </Card>
    </div>
  );
};

export default ProductDetail;
