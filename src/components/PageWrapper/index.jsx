import React from "react";
import Header from "../Header";
export function PageWrapper({ children }) {
  return (
    <div className="pt-40 h-screen">
      <Header />
      {children}
    </div>
  );
}
