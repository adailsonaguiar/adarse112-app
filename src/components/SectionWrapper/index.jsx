import React from "react";
import { Heading } from "../Heading";

export function SectionWrapper({ title, children, style }) {
  return (
    <section className={`pt-20 ${style}`}>
      <Heading>{title}</Heading>
      <div className="pt-20">{children}</div>
    </section>
  );
}
