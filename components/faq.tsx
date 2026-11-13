import { faqs } from "@/content/site";
import { ChevronDownIcon } from "@/components/icons";

export function Faq() {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q} className="faq__item">
          <summary className="faq__q">
            {f.q}
            <span className="faq__icon" aria-hidden="true">
              <ChevronDownIcon />
            </span>
          </summary>
          <p className="faq__a">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQ schema so Google can show these answers. */
export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
