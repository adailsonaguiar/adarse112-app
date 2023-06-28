import React from "react";
import { Heading } from "../Heading";

export function SectionWrapper({ title, children, style }) {
  return (
    <section className={style.length ? style : "pt-20"}>
      {title.length ? <Heading>{title}</Heading> : null}
      <div className="pt-20">{children}</div>
    </section>
  );
}
