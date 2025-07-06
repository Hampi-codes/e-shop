import { Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onCart = location.pathname === "/cart";
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        display: onCart ? "none" : "block",
      }}
    >
      <Badge
        count={totalItems}
        size="small"
        offset={[-2, 4]}
        data-testid="cart-badge"
      >
        <Button
          data-testid="cart-icon"
          shape="circle"
          size="large"
          icon={<ShoppingCartOutlined />}
          onClick={() => navigate("/cart")}
        />
      </Badge>
    </div>
  );
};

export default FloatingCartButton;
