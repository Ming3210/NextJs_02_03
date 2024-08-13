import React from "react";
import BaseAlert from "./BaseAlert";

export default function Home() {
  return (
    <div>
      <h2>B9</h2>
      <BaseAlert type="success" children="Success Text"></BaseAlert>
      <BaseAlert type="primary" children="Info Text"></BaseAlert>
      <BaseAlert type="warning" children="Warning Text"></BaseAlert>
      <BaseAlert type="danger" children="Danger Text"></BaseAlert>
    </div>
  );
}
