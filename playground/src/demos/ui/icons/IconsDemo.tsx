import "./icons-demo.css";

import * as Icons from "../../../../../packages/ui/src/icons/icons";

import type { ComponentType } from "react";

const iconEntries = Object.entries(Icons) as [
  string,
  ComponentType<any>,
][];

export default function IconsDemo() {
  return (
    <section className="icons-demo">
      <div className="icons-demo-grid">
        {iconEntries.map(([name, Icon]) => (
          <div
            className="icons-demo-item"
            key={name}
          >
            <Icon />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}