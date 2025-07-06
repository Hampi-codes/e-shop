import React from "react";
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  Divider,
  Empty,
  Space,
} from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useCart } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import { backIcon } from "../assets";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Space
        style={{ marginBottom: 16, alignItems: "center" }}
        styles={{ item: { display: "flex", alignItems: "center" } }}
      >
        <img
          src={backIcon}
          alt="Back"
          onClick={() => navigate(-1)}
          style={{
            width: 32,
            height: 32,
            cursor: "pointer",
          }}
        />
        <Typography.Title level={3} style={{ margin: 0 }}>
          My Cart
        </Typography.Title>
      </Space>

      <Divider />

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <Empty description="Your cart is empty." />
          <Button
            type="primary"
            style={{ marginTop: 24 }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div
          style={{
            maxHeight: "calc(100vh - 201px)",
            overflowY: "auto",
            paddingRight: 16,
          }}
        >
          {cart.map((item) => (
            <Card
              key={item.id}
              style={{ marginBottom: 16 }}
              styles={{ body: { padding: 16 } }}
            >
              <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={6}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: 100,
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </Col>

                <Col xs={24} sm={18}>
                  <Typography.Title level={5}>{item.title}</Typography.Title>

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography.Text>
                      Price: ₹{item.price.toFixed(2)}
                    </Typography.Text>
                    <Typography.Text>
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </Typography.Text>
                  </div>

                  <div style={{ marginTop: 8 }}>
                    <Button
                      icon={<MinusOutlined />}
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginRight: 8 }}
                    />
                    <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                    <Button
                      icon={<PlusOutlined />}
                      onClick={() => addToCart(item)}
                      style={{ marginLeft: 8 }}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          ))}

          <Divider />

          <div style={{ textAlign: "right" }}>
            <Typography.Text strong>
              Total ({totalItems} items): ₹{totalPrice.toFixed(2)}
            </Typography.Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
