import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function BodyTemplate({ children }) {
  return (
    <main className="bg-madureira-700">
      <Header />
      <div className="h-40" />
      <div className="flex">{children}</div>
      {/* <Footer/> */}
    </main>
  );
}
