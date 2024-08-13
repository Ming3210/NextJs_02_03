import React from "react";
import BaseCart from "./BaseCart";
import BaseButton from "./BaseButton";

export default function B10() {
  return (
    <div>
      <h2>B10</h2>
      <BaseCart
        content="Áo phông nam mát mẻ"
        title="Áo phông nam"
        image="https://product.hstatic.net/200000054310/product/afgjhj_9d3b164f3acc47b298f9b2b59c4c88c8.jpg"
        children={<BaseButton children="Thêm vào giỏ hàng" type="primary" />}
      ></BaseCart>
    </div>
  );
}
