import { Badge, Button, Grid } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const FloatingCartButton = () => {
  const { xs, sm } = Grid.useBreakpoint();
  const navigate = useNavigate();
  const location = useLocation();
  const onCart = location.pathname === "/cart";
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const buttonSize = xs ? "small" : sm ? "middle" : "large";
  const badgeSize = xs ? "small" : "default";
  const badgeOffset: any = xs ? [0, 0] : [-2, 4];

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
        size={badgeSize}
        offset={badgeOffset}
        data-testid="cart-badge"
      >
        <Button
          data-testid="cart-icon"
          shape="circle"
          size={buttonSize}
          icon={<ShoppingCartOutlined />}
          onClick={() => navigate("/cart")}
        />
      </Badge>
    </div>
  );
};

export default FloatingCartButton;
