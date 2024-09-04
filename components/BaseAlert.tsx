import React from "react";
import style from "../module/b9.module.css";

export default function BaseAlert({ type, children }: any) {
  const alertClass =
    type === "primary"
      ? style.alertPrimary
      : type === "success"
      ? style.alertSuccess
      : type === "warning"
      ? style.alertWarning
      : type === "danger"
      ? style.alertDanger
      : "";

  return <div className={alertClass}>{children}</div>;
}
