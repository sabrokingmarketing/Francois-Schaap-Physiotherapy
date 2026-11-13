import type { CSSProperties, ReactNode } from "react";

/** The opening block of every inner page. It enters once on load. */
export function PageIntro({
  eyebrow,
  title,
  children,
  side,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  side?: ReactNode;
}) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <div className="wrap page-intro__inner">
        <div>
          <p className="eyebrow" data-enter>
            {eyebrow}
          </p>
          <h1 id="page-title" className="h1" data-enter style={{ "--i": 1 } as CSSProperties}>
            {title}
          </h1>
        </div>
        <div className="stack" data-enter style={{ "--i": 2 } as CSSProperties}>
          {children}
          {side}
        </div>
      </div>
    </section>
  );
}
