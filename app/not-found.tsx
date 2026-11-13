import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page could not be found.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="wrap stack">
        <p className="eyebrow">Page not found</p>
        <h1 className="h1">We Could Not Find That Page</h1>
        <p className="lead">The page may have moved. Try the home page instead.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn--primary">
            Go to the home page
          </Link>
        </div>
      </div>
    </section>
  );
}
