import React from "react";
import { Select } from "antd";
import { useCategories } from "../services/useProducts";

const { Option } = Select;

interface FilterBarProps {
  selected: string[];
  onChange: (value: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selected, onChange }) => {
  const { categories, loading } = useCategories();

  return (
    <div style={{ marginBottom: "20px" }}>
      <Select
        mode="multiple"
        placeholder="Filter by categories"
        maxTagCount="responsive"
        value={selected}
        onChange={onChange}
        style={{ width: "100%" }}
        loading={loading}
        allowClear
      >
        {categories.map((category) => (
          <Option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterBar;
