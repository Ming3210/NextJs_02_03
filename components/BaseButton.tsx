import React from "react";
import style from "../module/b7.module.css";

export default function BaseButton({ type, children }: any) {
  // Xác định lớp CSS dựa trên loại button
  const buttonClass =
    type === "primary"
      ? style.primary
      : type === "success"
      ? style.success
      : type === "warning"
      ? style.warning
      : type === "danger"
      ? style.danger
      : "";

  return <button className={buttonClass}>{children}</button>;
}
