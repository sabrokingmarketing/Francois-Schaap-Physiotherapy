import type { Metadata } from "next";
import {
  seo,
  serviceGroups,
  treatmentMethods,
  sessions,
  prices,
  medicalAid,
  site,
  whatsappHref,
} from "@/content/site";
import { PageIntro } from "@/components/page-intro";
import { ClosingCta } from "@/components/closing-cta";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  alternates: { canonical: "/services" },
  openGraph: { title: seo.services.title, description: seo.services.description, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Assessment, Treatment And Rehabilitation">
        <p className="lead">
          Personalised physiotherapy in Krugersdorp for pain, injury and recovery, with a plan built
          around you.
        </p>
        <div className="btn-row">
          <a href={site.phone.href} className="btn btn--primary">
            <PhoneIcon />
            Call {site.phone.display}
          </a>
          <a href={whatsappHref} className="btn btn--quiet" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp us
          </a>
        </div>
      </PageIntro>

      <section className="section section--tight-top" aria-label="All services">
        <div className="wrap">
          {serviceGroups.map((g) => (
            <div key={g.id} id={g.id} className="svc-group">
              <div className="svc-group__head">
                <h2 className="h2">{g.title}</h2>
                <p className="muted">{g.intro}</p>
              </div>
              <ul className="svc-group__list svc-list">
                {g.services.map((s) => (
                  <li key={s.id} id={s.id} className="svc">
                    <div className="svc__top">
                      <h3 className="h3">{s.name}</h3>
                      {s.detail ? <span className="svc__tag">{s.detail}</span> : null}
                    </div>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="methods-title">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">How we treat you</p>
            <h2 id="methods-title" className="h2">
              What Treatment May Include
            </h2>
            <p className="lead">
              Every plan is different. Depending on your condition, your sessions may include:
            </p>
          </div>
          <ul className="reasons reasons--list">
            {treatmentMethods.map((m) => (
              <li key={m} className="reason">
                <h3 className="h3">{m}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="sessions-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="stack">
              <p className="eyebrow">Sessions</p>
              <h2 id="sessions-title" className="h2">
                How Long Sessions Take
              </h2>
            </div>
            <p className="lead">
              {prices.length > 0
                ? "Session lengths and prices are below."
                : `Phone us on ${site.phone.display} for current prices.`}
            </p>
          </div>
          <div className="sessions">
            {sessions.map((s) => {
              const price = prices.find((p) => p.name.toLowerCase() === s.name.toLowerCase());
              return (
                <div key={s.name} className="card">
                  <p className="card__num">{s.name}</p>
                  <p className="session__len">{s.length}</p>
                  <p className="card__text">{s.text}</p>
                  {price ? <p className="h3">{price.price}</p> : null}
                </div>
              );
            })}
          </div>
          {medicalAid ? (
            <p className="lead" style={{ marginTop: 32 }}>
              {medicalAid}
            </p>
          ) : null}
        </div>
      </section>

      <ClosingCta title="Ready To Start Your Recovery?" />
    </>
  );
}
