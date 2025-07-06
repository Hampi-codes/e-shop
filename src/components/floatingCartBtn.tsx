import { Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useEffect, useLayoutEffect, useState } from "react";

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [footerHeight, setFooterHeight] = useState(0);

  const calculateFooterHeight = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
  };

  useLayoutEffect(() => {
    calculateFooterHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateFooterHeight);
    return () => window.removeEventListener("resize", calculateFooterHeight);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: `calc(${footerHeight}px + 20px)`,
        right: "20px",
        zIndex: 1000,
      }}
    >
      <Badge count={totalItems} size="small" offset={[-2, 4]}>
        <Button
          shape="circle"
          size="large"
        //   type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={() => navigate("/cart")}
        />
      </Badge>
    </div>
  );
};

export default FloatingCartButton;
