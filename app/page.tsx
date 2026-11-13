import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  site,
  seo,
  hero,
  trust,
  reasons,
  statement,
  audience,
  serviceGroups,
  conditions,
  reviews,
  photos,
  whatsappHref,
} from "@/content/site";
import { ArrowRightIcon, CheckIcon, PhoneIcon, ShieldCheckIcon, WhatsAppIcon } from "@/components/icons";
import { Statement } from "@/components/statement";
import { Faq, FaqSchema } from "@/components/faq";
import { ContactDetails } from "@/components/contact-details";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: { canonical: "/" },
  openGraph: { title: seo.home.title, description: seo.home.description, url: "/" },
};

/** Order of the hero entrance (each step starts 70ms after the last). */
const enter = (i: number) => ({ "--i": i }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p className="eyebrow" data-enter style={enter(0)}>
              {hero.eyebrow}
            </p>
            <h1 id="hero-title" className="h1" data-enter style={enter(1)}>
              {hero.headline}
            </h1>
            <p className="lead" data-enter style={enter(2)}>
              {hero.subline}
            </p>
            <div className="btn-row" data-enter style={enter(3)}>
              <a href={site.phone.href} className="btn btn--primary">
                <PhoneIcon />
                Call {site.phone.display}
              </a>
              <a href={whatsappHref} className="btn btn--quiet" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp us
              </a>
            </div>
            <p className="hero__fact" data-enter style={enter(4)}>
              <span>
                <ShieldCheckIcon />
                HPCSA registered
              </span>
              <span>
                <CheckIcon />
                11+ years of clinical practice
              </span>
            </p>
          </div>

          <div className="hero__visual" data-enter style={enter(2)}>
            {photos.hero ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photos.hero} alt={photos.heroAlt} width={1200} height={1400} fetchPriority="high" />
            ) : (
              <div className="visit-card">
                <div className="visit-card__top">
                  <p className="visit-card__label">What to expect</p>
                  <h2 className="visit-card__title">{hero.firstVisit.title}</h2>
                </div>
                <p className="visit-card__length" aria-label={hero.firstVisit.length}>
                  45<small>minutes</small>
                </p>
                <div className="stack">
                  <ul className="visit-card__list">
                    {hero.firstVisit.points.map((p) => (
                      <li key={p}>
                        <CheckIcon />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="visit-card__foot">{hero.firstVisit.followUp}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust" aria-label="Qualifications and experience">
        <div className="wrap">
          <ul className="trust__list">
            {trust.map((t) => (
              <li key={t.value} className="trust__item">
                <span className="trust__value">{t.value}</span>
                <span className="trust__label">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="stack">
              <h2 id="services-title" className="h2">
                Physiotherapy For Pain, Injury And Recovery
              </h2>
            </div>
            <p className="lead">
              Assessment, treatment and rehabilitation for active people, people recovering from
              surgery and anyone living with pain.
            </p>
          </div>

          <div className="cards cards--2">
            {serviceGroups.map((g) => (
              <Link key={g.id} href={`/services#${g.id}`} className="card">
                <h3 className="h3">{g.title}</h3>
                <p className="card__text">{g.intro}</p>
                <ul className="card__list">
                  {g.services.map((s) => (
                    <li key={s.id}>{s.name}</li>
                  ))}
                </ul>
                <span className="card__foot">
                  <span className="link">
                    See {g.short.toLowerCase()} services
                    <ArrowRightIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (the one dark band) */}
      <section className="section section--dark" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="stack">
              <p className="eyebrow">Why patients choose us</p>
              <h2 id="why-title" className="h2">
                Care That Gets To The Root Of It
              </h2>
            </div>
            <p className="lead">
              Personalised, evidence-based physiotherapy from a professional you can trust.
            </p>
          </div>
          <ol className="reasons">
            {reasons.map((r) => (
              <li key={r.title} className="reason">
                <h3 className="h3">{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATEMENT MOMENT */}
      <Statement text={statement} label="Our approach" />

      {/* WHO WE HELP + CONDITIONS */}
      <section className="section section--surface" aria-labelledby="who-title">
        <div className="wrap split">
          <div className="stack">
            <h2 id="who-title" className="h2">
              {audience.title}
            </h2>
            <p className="lead">{audience.intro}</p>
            <ul className="check-list">
              {audience.groups.map((g) => (
                <li key={g}>
                  <CheckIcon />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="stack">
            <h3 className="h3">Conditions We Treat</h3>
            <ul className="chips" aria-label="Conditions we treat">
              {conditions.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
            <p className="muted">
              Not sure if we can help with your condition?{" "}
              <a href={site.phone.href} className="link">
                Phone us on {site.phone.display}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS: only shown once real reviews are added in content/site.ts */}
      {reviews.length > 0 ? (
        <section className="section" aria-labelledby="reviews-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Reviews</p>
              <h2 id="reviews-title" className="h2">
                What Our Patients Say
              </h2>
            </div>
            <div className="cards cards--3">
              {reviews.map((r) => (
                <figure key={r.name} className="card">
                  <blockquote>
                    <p>&ldquo;{r.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="muted">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* GALLERY: only shown once real photos are added in content/site.ts */}
      {photos.gallery.length > 0 ? (
        <section className="section" aria-labelledby="gallery-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Our practice</p>
              <h2 id="gallery-title" className="h2">
                Inside The Practice
              </h2>
            </div>
            <div className="cards cards--3">
              {photos.gallery.map((p) => (
                <div key={p.src} className="portrait">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" width={800} height={1000} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="stack">
            <h2 id="faq-title" className="h2">
              Frequently Asked Questions
            </h2>
            <p className="lead">
              Anything else you want to know? Phone us on {site.phone.display} or send a WhatsApp.
            </p>
          </div>
          <Faq />
        </div>
        <FaqSchema />
      </section>

      {/* CONTACT */}
      <section className="section section--surface" aria-labelledby="contact-title">
        <div className="wrap split">
          <div className="stack">
            <h2 id="contact-title" className="h2">
              Find Us In Rant-en-Dal
            </h2>
            <p className="lead">
              The practice is at 2 Wildebees Street in Rant-en-Dal, Krugersdorp.
            </p>
          </div>
          <ContactDetails />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
