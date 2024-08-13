import React from "react";
import BaseButton from "./BaseButton";

export default function B7() {
  return (
    <div className="flex gap-5">
      <BaseButton type="primary" children="Primary" />;
      <BaseButton type="success" children="Success"></BaseButton>
      <BaseButton type="warning" children="Warning"></BaseButton>
      <BaseButton type="danger" children="Danger"></BaseButton>
    </div>
  );
}
