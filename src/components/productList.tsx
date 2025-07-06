import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Row, Col } from "antd";
import type { Product } from "../utils/interfaces";
import ProductCard from "./productCard";

interface ScrollableProductGridProps {
  products: Product[];
}

const ScrollableProductGrid: React.FC<ScrollableProductGridProps> = ({
  products,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [topShadow, setTopShadow] = useState(false);
  const [bottomShadow, setBottomShadow] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const calculateFooterHeight = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
  };

  const checkShadows = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    setTopShadow(scrollTop > 0);
    setBottomShadow(scrollTop + clientHeight < scrollHeight);
  };

  useEffect(() => {
    checkShadows();
  }, [products]);

  useLayoutEffect(() => {
    calculateFooterHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateFooterHeight);
    return () => window.removeEventListener("resize", calculateFooterHeight);
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={checkShadows}
      style={{
        height: `calc(100vh - (${footerHeight}px + 148px))`,
        overflowY: "auto",
        padding: 8,
        borderRadius: 8,
        transition: "box-shadow 0.2s ease-in-out",
        boxShadow: `
          ${topShadow ? "inset 0 8px 8px -6px rgba(0,0,0,0.1)" : ""}
          ${
            bottomShadow
              ? `${topShadow ? "," : ""} inset 0 -8px 8px -6px rgba(0,0,0,0.1)`
              : ""
          }
        `,
      }}
    >
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ScrollableProductGrid;
