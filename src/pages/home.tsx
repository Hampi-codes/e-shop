import { useState, useEffect } from "react";
import { Spin, Empty, Typography, Row, Col } from "antd";
import { useProductsByCategories } from "../services/useProducts";
import FilterBar from "../components/filterBar";
import ScrollableProductGrid from "../components/productList";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategories = searchParams.get("categories")
    ? searchParams.get("categories")!.split(",")
    : [];
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const { products, loading } = useProductsByCategories(selectedCategories);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setSearchParams({ categories: selectedCategories.join(",") });
    } else {
      setSearchParams({});
    }
  }, [selectedCategories]);

  return (
    <div>
      <Typography.Title level={3} style={{ marginBlock: "12px" }}>
        Explore Products
      </Typography.Title>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={5}>
          <FilterBar
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
        </Col>
      </Row>

      {products.length > 0 || loading ? (
        <Spin spinning={loading}>
          <ScrollableProductGrid products={products} />
        </Spin>
      ) : (
        <Empty description="No Products Available" style={{ marginTop: 40 }} />
      )}
    </div>
  );
};

export default Home;
