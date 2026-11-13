import type { Metadata } from "next";
import Link from "next/link";
import { about, seo, photos, site, whatsappHref } from "@/content/site";
import { PageIntro } from "@/components/page-intro";
import { ClosingCta } from "@/components/closing-cta";
import { ArrowRightIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: "/about" },
  openGraph: { title: seo.about.title, description: seo.about.description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Francois" title={about.headline}>
        <p className="lead">{about.intro}</p>
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

      <section className="section section--tight-top" aria-labelledby="experience-title">
        <div className="wrap split">
          {photos.about ? (
            <div className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.about} alt={photos.aboutAlt} width={960} height={1200} />
            </div>
          ) : (
            <div className="cred-panel">
              <p className="visit-card__label">Clinical practice</p>
              <p className="cred-panel__big">11+ years</p>
              <ul className="cred-panel__list">
                <li>
                  Private practice and hospital settings
                  <span>Musculoskeletal, sports, post-operative, trauma and ICU</span>
                </li>
                <li>
                  Since 2022
                  <span>Physiotherapist for the Randfontein Rugby Club</span>
                </li>
              </ul>
            </div>
          )}

          <div className="stack">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title" className="h2">
              Private Practice And Hospital Experience
            </h2>
            <p className="lead">{about.experience}</p>
            {photos.about ? <p>{about.rugby}</p> : null}

            <h3 className="h3" style={{ marginTop: 16 }}>
              Special Interests
            </h3>
            <ul className="check-list">
              {about.interests.map((i) => (
                <li key={i}>
                  <CheckIcon />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="quals-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="stack">
              <p className="eyebrow">Qualifications</p>
              <h2 id="quals-title" className="h2">
                Trained, Registered And Certified
              </h2>
            </div>
            <p className="lead">
              Francois graduated from the University of Pretoria in 2014 and is registered with the
              Health Professions Council of South Africa.
            </p>
          </div>
          <ol className="reasons reasons--4">
            {about.qualifications.map((q) => (
              <li key={q.name} className="reason">
                <h3 className="h3">{q.name}</h3>
                {q.detail ? <p>{q.detail}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="next-title">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">What we treat</p>
            <h2 id="next-title" className="h2">
              See How We Can Help You
            </h2>
          </div>
          <div className="stack">
            <p className="lead">
              From sports injuries and back pain to rehab after surgery and Bioflex laser therapy,
              see every service we offer.
            </p>
            <Link href="/services" className="link">
              View all services
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta title="Book A Session With Francois" />
    </>
  );
}
