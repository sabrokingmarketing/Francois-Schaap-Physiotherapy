import type { Metadata } from "next";
import { seo, site, whatsappHref, mapsHref, fullAddress } from "@/content/site";
import { PageIntro } from "@/components/page-intro";
import { ContactDetails } from "@/components/contact-details";
import { ClosingCta } from "@/components/closing-cta";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: seo.contact.title, description: seo.contact.description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Book Your Physio Appointment">
        <p className="lead">
          The quickest way to book is to call the practice or send us a WhatsApp.
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

      <section className="section section--tight-top" aria-labelledby="details-title">
        <div className="wrap split">
          <div className="stack">
            <h2 id="details-title" className="h2">
              Practice Details
            </h2>
            <p className="lead">
              Francois Schaap Physiotherapy is at {fullAddress}.
            </p>
            <a href={mapsHref} className="link" target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <ArrowRightIcon />
            </a>
          </div>
          <ContactDetails />
        </div>
      </section>

      <ClosingCta title="We Look Forward To Seeing You" />
    </>
  );
}
